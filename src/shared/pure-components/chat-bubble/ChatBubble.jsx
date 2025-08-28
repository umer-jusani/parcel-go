import { Avatar, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const MessageContainer = styled(Stack)(({ theme, isadmin }) => ({
  width: '75%',
  backgroundColor: isadmin
    ? theme.palette.background.lightPurple
    : theme.palette.background.paper,
  [theme.breakpoints.up('md')]: {
    width: '60%', // Apply different width for medium screens and above
  },
  [theme.breakpoints.up('sm')]: {
    width: '65%', // Apply different width for medium screens and above
  },
  padding: '8px 16px',
  position: 'relative',
  borderRadius: '12px',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: 0,
    height: 0,
    borderStyle: 'solid',
    ...(isadmin
      ? {
          right: '-10px',
          borderWidth: '10px 0 10px 15px',
          borderColor: `transparent transparent transparent ${theme.palette.background.lightPurple}`,
        }
      : {
          left: '-10px',
          borderWidth: '10px 15px 10px 0',
          borderColor: `transparent ${theme.palette.background.paper} transparent transparent`,
        }),
  },
}))

const ChatBubble = ({ message, name, time, isadmin, avatar }) => {
  return (
    <Stack
      justifyContent={'flex-start'}
      columnGap={2}
      direction={isadmin ? 'row-reverse' : 'row'}
    >
      <Avatar
        src={avatar}
        sx={{
          width: 35,
          height: 35,
        }}
      />
      <MessageContainer isadmin={isadmin}>
        <Typography fontWeight={'bold'}>{name}</Typography>
        <Typography>{message}</Typography>
        <Typography variant="caption" textAlign={'end'}>
          {time}
        </Typography>
      </MessageContainer>
    </Stack>
  )
}

export default ChatBubble
