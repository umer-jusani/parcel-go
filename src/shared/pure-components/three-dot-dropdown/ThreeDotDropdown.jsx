'use client'
import React from 'react'
import { Menu, MenuItem, Box } from '@mui/material'
import { removeCookie } from '@/shared/helper/Cookies'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'

const ThreeDotDropdown = ({ dropdownList, anchorEl, setAnchorEl }) => {
  // Close the dropdown
  const handleClose = () => {
    setAnchorEl(null)
  }
  const { user } = useSelector((state) => state.appReducer)
  // Handle option selection
  const handleOptionClick = (option) => {
    handleClose() // Close the dropdown after selecting an option
  }
  const router = useRouter()

  function handleLogout() {
    handleClose()
    removeCookie(process.env.NEXT_PUBLIC_ACCESS_TOKEN)
    localStorage.removeItem(process.env.NEXT_PUBLIC_ACCESS_TOKEN)
    router.push('/login')
  }

  return (
    <Box>
      <Menu
        {...DropdownStyles}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {dropdownList?.map((item) => (
          <MenuItem
            sx={{
              color: item.label === 'Cancel Bid' ? 'primary.A100' : 'inherit',
              borderBottom: '1px solid #dbdbdb',
              backgroundColor: '#fff',
              py: 1,
            }}
            key={item.id}
            onClick={handleLogout}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

export default ThreeDotDropdown

const DropdownStyles = {
  sx: {
    '& .MuiMenu-list': {
      padding: 0, // Removes padding from ul
    },
  },
  slotProps: {
    paper: {
      elevation: 3,
      sx: {
        overflow: 'visible',
        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
        '& .MuiAvatar-root': {
          width: 32,
          height: 32,
          ml: -0.5,
          mr: 1,
          borderRadius: '50%',
        },
        '&::before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 25,
          width: 10,
          height: 10,
          bgcolor: 'background.paper',
          transform: 'translateY(-50%) rotate(45deg)',
          zIndex: 0,
        },
      },
    },
  },
}
