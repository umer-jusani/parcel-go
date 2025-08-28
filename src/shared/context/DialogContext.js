'use client'
import React, { createContext, useContext, useState } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  IconButton,
  Box,
} from '@mui/material'
import {
  CheckCircle as CheckCircleIcon,
  Error as ErrorIcon,
  Warning as WarningIcon,
  Info as InfoIcon,
  Close as CloseIcon,
} from '@mui/icons-material'

const DialogContext = createContext()

export const useDialog = () => useContext(DialogContext)

export function DialogProvider({ children }) {
  const [dialog, setDialog] = useState({
    open: false,
    title: '',
    message: '',
    type: 'info', // 'success', 'error', 'warning', 'info', 'confirm'
    onConfirm: null,
    onCancel: null,
  })

  const getIcon = () => {
    switch (dialog.type) {
      case 'success':
        return <CheckCircleIcon sx={{ color: 'success.main' }} />
      case 'error':
        return <ErrorIcon sx={{ color: 'error.main' }} />
      case 'warning':
        return <WarningIcon sx={{ color: 'warning.main' }} />
      default:
        return <InfoIcon sx={{ color: 'info.main' }} />
    }
  }

  const showDialog = (options) => {
    setDialog({ ...options, open: true })
  }

  const hideDialog = () => {
    setDialog({ open: false })
  }

  const handleConfirm = (data = () => {}) => {
    if (dialog.onConfirm) {
      dialog.onConfirm()
    }
    hideDialog()
  }

  const handleCancel = (data = () => {}) => {
    if (dialog.onCancel) {
      dialog.onCancel()
    }
    hideDialog()
  }

  return (
    <DialogContext.Provider value={{ showDialog, hideDialog }}>
      {children}
      <Dialog
        open={dialog.open}
        onClose={dialog.type !== 'confirm' ? hideDialog : undefined}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <Box display="flex" alignItems="center" gap={1}>
            {getIcon()}
            {dialog.title}
          </Box>
          {dialog.type !== 'confirm' && (
            <IconButton
              aria-label="close"
              onClick={hideDialog}
              sx={{ position: 'absolute', right: 8, top: 8 }}
            >
              <CloseIcon />
            </IconButton>
          )}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{dialog.message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          {dialog.type === 'confirm' ? (
            <>
              <Button onClick={handleCancel} color="inherit">
                Cancel
              </Button>
              <Button onClick={handleConfirm} variant="outlined" autoFocus>
                Confirm
              </Button>
            </>
          ) : (
            <Button onClick={hideDialog} variant="contained" autoFocus>
              OK
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </DialogContext.Provider>
  )
}
