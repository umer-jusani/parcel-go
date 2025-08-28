import { getCookie } from '@/shared/helper/Cookies'
import { io } from 'socket.io-client'

export const SOCKET_ACTIONS = {
  CONNECT: 'CONNECT',
  DISCONNECT: 'DISCONNECT',
  RESET: 'RESETTING',
}

export const socketReducer = (state, action) => {
  switch (action.type) {
    case SOCKET_ACTIONS.CONNECT:
      return { ...state, socket: action.payload, connected: true }

    case SOCKET_ACTIONS.DISCONNECT:
      return { ...state, socket: null, connected: false }

    case SOCKET_ACTIONS.RESET:
      state.socket.disconnect()
      const socket = io(`${process.env.NEXT_PUBLIC_API_BASE_URL}/real-time`, {
        auth: {
          access_token: localStorage?.getItem(
            process.env.NEXT_PUBLIC_ACCESS_TOKEN
          ),
          'ngrok-skip-browser-warning': true,
        },
        transports: ['websocket'],
        forceNew: true,
      })
      return { ...state, socket, connected: true }
  }
}
