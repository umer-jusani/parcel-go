import React, { useState } from 'react'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  TextField,
} from '@mui/material'
import { CloseIcon } from '@/assests'

const ConfirmationModal = ({
  title,
  open,
  children,
  hideFooter = false,
  close,
  matchText = 'Delete',
  isIcon = true,
  callBack = () => {},
  onIconClose = () => {},
  isLoading = false,
  disclaimerText = '',
}) => {
  const [inputText, setInputText] = useState('')
  const isYesButtonDisabled = !inputText || inputText !== matchText

  return (
    <Dialog
      title={title}
      open={open}
      onClose={close}
      // sx={{ position: "relative" }}
    >
      <Box position={'relative'}>
        {children || (
          <>
            <DialogTitle>ATTENTION</DialogTitle>
            <DialogContent>
              <Box component={'span'}>
                Are you sure you want to {matchText}? Type:{' '}
                <Typography
                  component={'span'}
                  sx={{ fontWeight: 700 }}
                  color={'primary'}
                >
                  {matchText}
                </Typography>
              </Box>
              <TextField
                label={`Type "${matchText}" to confirm`}
                placeholder={matchText}
                variant="outlined"
                fullWidth
                margin="normal"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              {disclaimerText && (
                <Box sx={{ marginTop: -1 }}>
                  <Typography
                    variant="caption"
                    color="error"
                    fontWeight={'medium'}
                    lineHeight={0}
                  >
                    {disclaimerText}
                  </Typography>
                </Box>
              )}
            </DialogContent>
          </>
        )}
        {!hideFooter && (
          <DialogActions>
            <Button
              variant="contained"
              loading={isLoading}
              type="submit"
              disabled={isYesButtonDisabled}
              onClick={() => {
                callBack()
                setInputText('')
              }}
            >
              Yes
            </Button>
            <Button color="error" variant="contained" onClick={() => close()}>
              No
            </Button>
          </DialogActions>
        )}

        {isIcon && (
          <CloseIcon
            onClick={onIconClose}
            sx={{
              position: 'absolute',
              top: '0',
              right: '0',
              backgroundColor: 'secondary.main',
              color: 'secondary.light',
              fontSize: '25px',
              width: '35px',
              height: '35px',
            }}
          />
        )}
      </Box>
    </Dialog>
  )
}

export default ConfirmationModal
