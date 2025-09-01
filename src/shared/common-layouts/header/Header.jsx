'use client'
import { toggleMenu } from '@/store/reducer'
import { Badge, Button, Container, IconButton, List, ListItem, ListItemButton, ListItemText, Stack, Typography, Menu, MenuItem, ListItemIcon, Avatar, Divider, Tooltip, Box, Grid } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import Profile from './Profile'
import { AppBarStyled, ToolbarStyled } from './ui'
import Image from 'next/image'
import { Logo, ShoppingBasketIcon } from '@/assets'
import { useState } from 'react'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'

const navItems = [
  { label: 'Smart Send', link: '/smart-send' },
  { label: 'Get a Quote', link: '/quick-quote' },
  { label: 'Services', link: '/services' },
  { label: 'Track a Parcel', link: '/home/track' },
  { label: 'Bussiness', link: '/home/business' },
  { label: 'Help', link: '/home/help' },
  { label: 'cart', link: '/cart' }
]

const Header = () => {
  // const matches = useMediaQuery(DRAWER_BREAK_POINT);
  const { openMenu } = useSelector((state) => state.appReducer)
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.appReducer)
  const { notificationCount } = useSelector((state) => state.appReducer)
  const router = useRouter()

  return (
    <>
      <AppBarStyled
        position="sticky"
        sx={{ backgroundColor: 'background.white', py: 1 }}
        elevation={1}
      >
        <ToolbarStyled>
          <Container maxWidth="xl">
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
              <Image src={Logo} alt="logo" width={130} objectFit='contain' />

              {/* Navigation Items */}
              <List sx={{ display: 'flex', gap: 0 }}>
                {navItems.map((item) => (
                  item.label === 'cart' ? (
                    <ListItem key={item.label} disablePadding>
                      <ListItemButton sx={{ textAlign: 'center' }} onClick={() => router.push(item.link)}>
                        <ShoppingBasketIcon sx={{ color: 'text.primary' }} />
                      </ListItemButton>
                    </ListItem>
                  ) : item.label === 'Services' ? (
                    <ListItem
                      key={item.label}
                      disablePadding
                      sx={{ position: 'relative', "&:hover #services-dropdown": { display: 'flex' } }}
                      onMouseEnter={() => {
                        console.log('mouse enter')
                        const dropdown = document.getElementById('services-dropdown')
                        const overlay = document.getElementById('services-overlay')
                        dropdown.style.display = 'flex'
                        overlay.style.display = 'block'
                      }}
                    >
                      <ListItemButton
                        sx={{ textAlign: 'center' }}
                        onClick={() => router.push(item.link)}
                      >
                        <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'text.primary', textWrap: 'nowrap' }}>
                          {item.label}
                        </Typography>
                      </ListItemButton>
                    </ListItem>
                  ) : (
                    <ListItem key={item.label} disablePadding>
                      <ListItemButton sx={{ textAlign: 'center' }} onClick={() => router.push(item.link)}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'text.primary', textWrap: 'nowrap' }}>
                          {item.label}
                        </Typography>
                      </ListItemButton>
                    </ListItem>
                  )
                ))}
              </List>

              <Profile dropdown={true} />
            </Stack>
          </Container>
        </ToolbarStyled>
      </AppBarStyled>

      {/* Services Dropdown */}
      <ServicesDropdown />

      {/* Background Overlay */}
      <Box
        id="services-overlay"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          zIndex: 1200,
          display: 'none',
          pointerEvents: 'none'
        }}
      />

    </>
  )
}

export default Header

const ServicesDropdown = () => {
  return (
    <Box
      onMouseEnter={() => {
        const dropdown = document.getElementById('services-dropdown')
        const overlay = document.getElementById('services-overlay')
        dropdown.style.display = 'flex'
        overlay.style.display = 'block'
      }}
      onMouseLeave={() => {
        const dropdown = document.getElementById('services-dropdown')
        const overlay = document.getElementById('services-overlay')
        dropdown.style.display = 'none'
        overlay.style.display = 'none'
      }}
      id="services-dropdown"
      sx={{
        position: 'absolute',
        top: '8%',
        display: 'none',
        right: 0,
        width: '100vw',
        minHeight: '400px',
        backgroundColor: 'background.paper',
        boxShadow: '0px 4px 20px rgba(0,0,0,0.15)',
        border: '1px solid #e0e3ea',
        borderLeft: 'none',
        borderRight: 'none',
        zIndex: 1300,
      }}
    >
      <Container maxWidth="xl" sx={{ py: 4, px: 2 }}>
        <Grid container spacing={4}>
          {/* Range of Couriers */}
          <Grid item xs={12} sm={6} md={3} justifyItems="center">
            <Stack spacing={2}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: '#2E5B8A',
                  fontSize: '1.1rem',
                  mb: 1
                }}
              >
                Range of Couriers
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {[
                  'All Couriers',
                  'Royal Mail',
                  'FedEx Express',
                  'Parcelforce',
                  'UPS',
                  'UPS Access Point',
                  'TNT',
                  'Evri Drop-off',
                  'DPD',
                  'Yodel Direct',
                  'Evri Collection',
                  'CitySprint',
                  'InPost',
                  'DHL',
                  'DHL Parcel',
                  'DX',
                  'Whistl',
                  { name: 'Relay', isNew: true },
                  'Business Account'
                ].map((item, index) => (
                  <Button
                    key={index}
                    sx={{
                      justifyContent: 'flex-start',
                      textTransform: 'none',
                      color: 'text.secondary',
                      fontSize: '0.9rem',
                      p: 0,
                      minHeight: 'auto',
                      '&:hover': {
                        backgroundColor: 'rgba(46, 91, 138, 0.04)',
                        color: '#2E5B8A'
                      }
                    }}
                  >
                    {typeof item === 'string' ? item : item.name}
                    {typeof item === 'object' && item.isNew && (
                      <Typography
                        component="span"
                        sx={{
                          ml: 1,
                          fontSize: '0.7rem',
                          color: 'white',
                          backgroundColor: '#4A90E2',
                          px: 0.8,
                          py: 0.2,
                          borderRadius: 0.5,
                          fontWeight: 600
                        }}
                      >
                        NEW
                      </Typography>
                    )}
                  </Button>
                ))}
              </Box>
            </Stack>
          </Grid>

          {/* UK Parcel Delivery */}
          <Grid item xs={12} sm={6} md={3} justifyItems="center">
            <Stack spacing={2}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: '#2E5B8A',
                  fontSize: '1.1rem',
                  mb: 1
                }}
              >
                UK Parcel Delivery
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {[
                  'All UK Delivery Services',
                  'Postage Costs',
                  'Large Parcels',
                  'Drop-Off Services',
                  'Collection Services',
                  'eBay Quicksend',
                  'Pallet Delivery',
                  'Same-Day Delivery',
                  'Letters & Small Parcels',
                  'Next-Day Delivery',
                  'Weekend Delivery',
                  'Small Parcels',
                  'No Printer Couriers',
                  '3 Day Delivery',
                  'Heavy Parcels',
                  '2 to 3 Day',
                  'Express Delivery',
                  'Recorded Delivery',
                  'Evri Postable'
                ].map((item, index) => (
                  <Button
                    key={index}

                    sx={{
                      justifyContent: 'flex-start',
                      textTransform: 'none',
                      color: 'text.secondary',
                      p: 0,
                      minHeight: 'auto',
                      '&:hover': {
                        backgroundColor: 'rgba(46, 91, 138, 0.04)',
                        color: '#2E5B8A'
                      }
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
            </Stack>
          </Grid>

          {/* International Parcel Delivery */}
          <Grid item xs={12} sm={6} md={3} justifyItems="center">
            <Stack spacing={2}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: '#2E5B8A',
                  fontSize: '1.1rem',
                  mb: 1
                }}
              >
                International Parcel Delivery
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {[
                  { name: 'EU Shipping info', isNew: true },
                  'All International Delivery',
                  'Economy Delivery',
                  'Express Delivery',
                  'Germany Delivery',
                  'Australia Delivery',
                  'Spain Delivery',
                  'USA Delivery',
                  'European Delivery',
                  'Asia Delivery',
                  'Worldwide Delivery',
                  'Delivery Services'
                ].map((item, index) => (
                  <Button
                    key={index}
                    sx={{
                      justifyContent: 'flex-start',
                      textTransform: 'none',
                      color: 'text.secondary',
                      p: 0,
                      minHeight: 'auto',
                      '&:hover': {
                        backgroundColor: 'rgba(46, 91, 138, 0.04)',
                        color: '#2E5B8A'
                      }
                    }}
                  >
                    {typeof item === 'string' ? item : item.name}
                    {typeof item === 'object' && item.isNew && (
                      <Typography
                        component="span"
                        sx={{
                          ml: 1,
                          fontSize: '0.7rem',
                          color: 'white',
                          backgroundColor: '#4A90E2',
                          px: 0.8,
                          py: 0.2,
                          borderRadius: 0.5,
                          fontWeight: 600
                        }}
                      >
                        NEW
                      </Typography>
                    )}
                  </Button>
                ))}
              </Box>
            </Stack>
          </Grid>

          {/* Delivery Tools */}
          <Grid item xs={12} sm={6} md={3} justifyItems="center">
            <Stack spacing={2}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: '#2E5B8A',
                  fontSize: '1.1rem',
                  mb: 1
                }}
              >
                Delivery Tools
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {[
                  'Parcel2Go Prepay',
                  'Postcode Finder',
                  'Parcel Volume Calculator',
                  'Print Your Labels',
                  'Print a Commercial Invoice',
                  'Rearrange Your Collection',
                  'Prohibited Items',
                  'Track a Parcel',
                  'Content Hub',
                  'Parcel Delivery Advice',
                  'Mobile App',
                  'Ecommerce Shipping',
                  'Despatch Bay Alternative'
                ].map((item, index) => (
                  <Button
                    key={index}
                    sx={{
                      justifyContent: 'flex-start',
                      textTransform: 'none',
                      color: 'text.secondary',
                      p: 0,
                      minHeight: 'auto',
                      '&:hover': {
                        backgroundColor: 'rgba(46, 91, 138, 0.04)',
                        color: '#2E5B8A'
                      }
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
