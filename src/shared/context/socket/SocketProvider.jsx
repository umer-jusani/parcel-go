import { createContext } from 'react'

const SocketProvider = ({ children }) => {

  return (
    <SocketContext.Provider
      value={{ state, connectSocket, disconnectSocket, resetSocket }}
    >
      {children}
    </SocketContext.Provider>
  )
}

export default SocketProvider

export const SocketContext = createContext(null)
