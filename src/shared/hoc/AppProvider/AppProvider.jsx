'use client'
import { DialogProvider } from '@/shared/context/DialogContext'
import { ToastProvider } from '@/shared/context/ToastContext'
import store from '@/store/store'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { SnackbarProvider } from 'notistack'
import { Suspense, useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import SessionProvider from '../sessionProvider/SessionProvider'
import UIThemeProvider from '../theme/ThemeProvider'

const AppProvider = ({ children }) => {
  const [mount, setMount] = useState(false)

  useEffect(() => {
    setMount(true)
  }, [])

  if (!mount) {
    return null
  }

  return (
    <SnackbarProvider maxSnack={3}>
      <DialogProvider>
        <ToastProvider>
          <UIThemeProvider>
            <Provider store={store}>
              <SessionProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Suspense>
                    <>{children}</>
                  </Suspense>
                </LocalizationProvider>
              </SessionProvider>
            </Provider>
          </UIThemeProvider>
        </ToastProvider>
      </DialogProvider>
    </SnackbarProvider>
  )
}

export default AppProvider
