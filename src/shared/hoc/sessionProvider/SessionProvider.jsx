import { UIProvider } from '@/shared/centralizeManagement/UIManager'
import { getCookie } from '@/shared/helper/Cookies'
import { setUser } from '@/store/reducer'
import { Stack } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'


const SessionProvider = ({ children }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    ;(async () => {
      const data = await getCookie(process.env.NEXT_PUBLIC_ACCESS_TOKEN);
      let parsedData = JSON.parse(data?.value);

      dispatch(setUser(parsedData?.user))
    })()
  }, [])

  return (
    <UIProvider>
      {/* <SplashScreen /> */}
      {children}
    </UIProvider>
  )
}

export default SessionProvider
