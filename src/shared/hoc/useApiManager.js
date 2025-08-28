import axios from 'axios'
import { getCookie } from '../helper/Cookies';

export default async function ApiManager({
  header = {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': true,
  },
  method = 'get',
  path = '',
  params = {},
  baseUrl = process.env.NEXT_PUBLIC_API_URL,
  responseType = 'json',
  onUploadProgress = null,
}) {
  // Ensure baseUrl doesn't end with slash and path starts with slash
  let cookie
  try {
    cookie = (await getCookie(process.env.NEXT_PUBLIC_ACCESS_TOKEN)) || {}
  } catch (error) {
    console.log(error, 'error')
    cookie = null
  }

  let token
  try {
    const cookieValue = cookie?.value
    if (cookieValue) {
      const parsedValue = JSON.parse(cookieValue)
      token = parsedValue?.token
    }
  } catch (error) {
    token = null
  }

  baseUrl = baseUrl?.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl
  path = path.startsWith('/') ? path : `/${path}`

  let HEADER = { headers: header }
  if (token) {
    HEADER = { headers: { Authorization: `Bearer ${token}`, ...header } }
  }

  const fullUrl = `${baseUrl}${path}`

  return new Promise(function (myResolve, myReject) {
    const config = {
      ...HEADER,
      ...(method.toLowerCase() === 'get' && { params }),
      responseType,
      onUploadProgress: onUploadProgress
        ? (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          )
          onUploadProgress(percentCompleted)
        }
        : undefined,
    }

    // Simplify the axios calls
    const axiosCall = ['put', 'patch', 'post'].includes(method.toLowerCase())
      ? axios[method.toLowerCase()](fullUrl, params, config)
      : axios[method.toLowerCase()](fullUrl, config)

    axiosCall
      .then((response) => myResolve(response))
      .catch((err) => myReject(err))
  })
}