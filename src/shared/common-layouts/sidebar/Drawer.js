'use client'
import { sideBarRoutes } from '@/app/routes'
import { Logo, LogoutIcon } from '@/assests'
import {
  DRAWER_WIDTH
} from '@/shared/constant/constant'
import { removeCookie } from '@/shared/helper/Cookies'
import { toggleMenu } from '@/store/reducer'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Box, Collapse, ListItem, useMediaQuery } from '@mui/material'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const DrawerStyles = {
  '&.Mui-selected, &:hover': {
    backgroundColor: 'background.lightDark',
    '& *': {
      color: 'primary.main',
      transition: '0.2s all ease-in-out',
    },
    '&::before': {
      height: '100%',
      backgroundColor: 'primary.main',
    },
  },
  '&::before': {
    content: `''`,
    position: 'absolute',
    top: '50%',
    right: '0',
    transform: 'translateY(-50%)',
    height: '0',
    width: '4px',
    backgroundColor: 'primary.main',
    transition: '0.2s all ease-in-out',
  },
  gap: 1.5,
}

const nestedDrawerStyle = {
  '&.Mui-selected, &:hover': {
    // backgroundColor: 'background.lightDark',
    '& *': {
      color: 'primary.main',
      transition: '0.2s all ease-in-out',
    },
    // '&::before': {
    //   height: '100%',
    //   backgroundColor: 'primary.main',
    // },
  },
  gap: 1.5,
  pl: 4,
}

function ResponsiveDrawer(props) {
  const { window } = props
  const dispatch = useDispatch()
  const { openMenu, user } = useSelector((state) => state.appReducer)
  const matches = useMediaQuery('(min-width:900px)')
  const router = useRouter()
  const pathname = usePathname()
  const isSelected = (ele) => {
    return pathname === ele.href
    // return pathname.includes(ele.href)
  }

  function handleLogout() {
    removeCookie(process.env.NEXT_PUBLIC_ACCESS_TOKEN)
    localStorage.removeItem(process.env.NEXT_PUBLIC_ACCESS_TOKEN)
    router.push('/login')
  }

  const drawer = (
    <Box
      sx={{
        overflowY: 'auto', // Enables scrolling
        scrollbarWidth: 'none', // For Firefox
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
      display="flex"
      flexDirection="column"
      height="100vh"
    >
      <Box flex={1}>
        <Toolbar
          sx={{ gap: 1.5, overflow: 'hidden', px: '16px' }}
          disableGutters
        >
          <Link
            href={`/${user?.role == ('super_admin' || 'admin') ? 'admin' : user?.role
              }/${user?.role == ('super_admin' || 'admin') ? 'dashboard' : 'home'
              }`}
            style={{ marginInline: 'auto' }}
          >
            <Image
              src={Logo}
              alt="logo"
              style={{
                width: '100%',
                height: '4.8rem',
                objectFit: 'contain',
              }}
            />
          </Link>
        </Toolbar>
        <Divider sx={{ mb: 3 }} />

        {/* Progress Bar */}

        {/* Listing Routes */}
        <List sx={{ alignSelf: 'flex-end' }}>
          {sideBarRoutes['admin']?.map((ele, i) => {
            return (
              <NavItem
                ele={ele}
                key={i}
                isSelected={isSelected}
                openMenu={openMenu}
              />
            )
          })}
        </List>
      </Box>

      {/* Settings at the Bottom */}
      <List disablePadding>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            cursor: 'pointer',
            padding: '10px 16px',
            backgroundColor: 'background.default',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              backgroundColor: '#FF8A8A',
              '& .MuiTypography-root, & .MuiSvgIcon-root': {
                color: 'primary.A100',
              },
            },
          }}
          onClick={handleLogout}
        >
          <LogoutIcon sx={{ color: 'primary.A100' }} />
          <Typography sx={{ color: 'primary.A100', fontWeight: '500' }}>
            Logout
          </Typography>
        </Box>
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <>
      <Drawer
        container={container}
        variant={matches ? 'permanent' : 'temporary'}
        open={openMenu}
        onClose={() => dispatch(toggleMenu(!openMenu))}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: DRAWER_WIDTH,
            backgroundColor: 'background.default',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
}

export default ResponsiveDrawer

const NavItem = ({ ele, isSelected, openMenu }) => {
  const dispatch = useDispatch()
  return (
    <>
      <Link
        onClick={() => {
          dispatch(toggleMenu(!openMenu))
        }}
        href={ele?.href}
        style={{
          textDecoration: 'none',
          color: 'inherit',
          alignItems: 'center',
        }}
      >
        <ListItem disablePadding>
          <ListItemButton sx={DrawerStyles} selected={isSelected(ele)}>
            <ListItemIcon
              sx={{
                minWidth: 'min-content',
              }}
            >
              {ele?.icon?.filled}
            </ListItemIcon>
            <ListItemText>
              <Typography fontWeight={'medium'} color="text.primary">
                {ele?.title}
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </Link>
    </>
  )
}

const NavItemCollapse = ({ ele, isSelected, openMenu }) => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  return (
    <>
      <ListItem disablePadding onClick={() => setOpen(!open)}>
        <ListItemButton
          sx={DrawerStyles}
          selected={!open && ele?.children?.some((e) => isSelected(e))}
        >
          <ListItemIcon
            sx={{
              minWidth: 'min-content',
            }}
          >
            {ele?.icon?.filled}
          </ListItemIcon>
          <ListItemText>
            <Typography fontWeight={'medium'} color="text.primary">
              {ele?.title}
            </Typography>
          </ListItemText>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>
      <Collapse in={open} timeout="auto">
        <List component="div" disablePadding>
          {ele?.children?.map((ele, i) => (
            <Link
              key={i}
              onClick={() => dispatch(toggleMenu(!openMenu))}
              href={ele?.href}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                alignItems: 'center',
              }}
            >
              <ListItemButton
                selected={isSelected(ele)}
                sx={{
                  ...nestedDrawerStyle,
                  // ...(isSelected(ele)
                  //   ? { '& *': { color: 'primary.main' } }
                  //   : {}),
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 'min-content',
                  }}
                >
                  {ele?.icon?.filled}
                </ListItemIcon>
                <ListItemText primary={ele?.title} />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Collapse>
    </>
  )
}
