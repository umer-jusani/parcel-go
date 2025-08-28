import { CloseIcon } from '@/assests'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  useMediaQuery,
  Stack,
  DialogActions,
} from '@mui/material'

const BootstrapDialogTitle = ({
  children,
  showCloseIcon,
  onClose,
  ...other
}) => {
  return (
    <DialogTitle sx={{ textAlign: 'center' }} {...other}>
      {children}
    </DialogTitle>
  )
}

const ModalWrapper = ({
  open,
  onClose,
  title,
  children,
  dialogContentSx,
  submitBtnTitle = 'Save',
  imageTitle = 'Upload Your Image',
  imageSubTitle,
  size = 'sm',
  showImageUploader = true,
  showCloseIcon = true,
  dialogActions,
  ...props
}) => {
  const isSmallScreen = useMediaQuery('(max-width: 600px)')
  const isLargeScreen = useMediaQuery('(min-width:600px)')

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={size}
      fullWidth={!isSmallScreen}
      PaperProps={{
        style: {
          borderRadius: 10,
          // padding: 0,
          backgroundColor: 'rgba(255, 255, 255, 1)',
        },
      }}
      sx={{
        '& .MuiDialog-container': {
          '& .MuiPaper-root': { minWidth: '280px' },
        },
      }}
      scroll="paper"
      {...props}
    >
      {!!title && (
        <BootstrapDialogTitle onClose={onClose} showCloseIcon={showCloseIcon}>
          {title}
        </BootstrapDialogTitle>
      )}
      {isLargeScreen && showCloseIcon && onClose && (
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', right: 15, top: 20 }}
        >
          <CloseIcon />
        </IconButton>
      )}
      <DialogContent sx={{ ...dialogContentSx }}>
        <Stack>{children}</Stack>
      </DialogContent>
      {dialogActions && <DialogActions>{dialogActions}</DialogActions>}
    </Dialog>
  )
}

export default ModalWrapper
