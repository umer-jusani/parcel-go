"use client"
import { FedEx, FedExAbout, FedexInnerCards, FedexTracking, NearestLocation } from '@/assets'
import InputField from '@/shared/form-control/InputField'
import UIButton from '@/shared/pure-components/button/button'
import {
    Box,
    Container,
    Divider,
    Paper,
    Stack,
    Typography,
    useTheme
} from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
// navigation removed

const Couriers = () => {
    const theme = useTheme()

    const navigationItems = [
        'DHL Services',
        'About DHL Couriers',
        'DHL Tracking',
        'FAQs'
    ]

    return (
        <Container maxWidth="xl" >

            <Stack spacing={7} alignItems="center" sx={{ py: 6 }}>

                {/* Navigation Section */}
                <Paper
                    elevation={0}
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: 3,
                        border: `2px solid #E0E0E0`,
                        overflow: 'hidden',
                        mx: 'auto',
                        width: "100%"
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        {navigationItems.map((item, index) => (
                            <React.Fragment key={index}>
                                <Box
                                    sx={{
                                        flex: 1,
                                        textAlign: 'center',
                                        py: 3,
                                        px: 2,
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease-in-out',
                                        '&:hover': {
                                            backgroundColor: theme.palette.grey[50]
                                        }
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: 'text.primary',
                                            fontWeight: 600,
                                            fontSize: '1.1rem'
                                        }}
                                    >
                                        {item}
                                    </Typography>
                                </Box>
                                {index < navigationItems.length - 1 && (
                                    <Divider
                                        orientation="vertical"
                                        flexItem
                                        sx={{
                                            display: { xs: 'none', sm: 'block' },
                                            borderColor: theme.palette.grey[300]
                                        }}
                                    />
                                )}
                                {index < navigationItems.length - 1 && (
                                    <Divider
                                        orientation="horizontal"
                                        sx={{
                                            display: { xs: 'block', sm: 'none' },
                                            width: '80%',
                                            mx: 'auto',
                                            borderColor: theme.palette.grey[300]
                                        }}
                                    />
                                )}
                            </React.Fragment>
                        ))}
                    </Box>
                </Paper>

                {/* Find Nearest Drop-off Point Section */}
                <Paper sx={{ p: 4, borderRadius: 3, backgroundColor: "white", border: `2px solid #E0E0E0`, width: { xs: '100%', md: '80%' } }} elevation={0} >
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} alignItems={"center"}>
                        {/* Left side - Image */}
                        <Box sx={{ width: { xs: '100%', md: '45%' }, maxWidth: '370px' }}>
                            <Box
                                component="img"
                                src={NearestLocation.src}
                                alt="Drop-off Location"
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'contain'
                                }}
                            />
                        </Box>

                        {/* Right side - Content */}
                        <Stack
                            spacing={2}
                            sx={{
                                // width: { xs: '100%', md: '55%' },
                                justifyContent: 'center',
                                alignItems: { xs: 'flex-start', md: 'center' },
                                textAlign: { xs: 'left', md: 'center' }
                            }}
                        >
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: theme.typography.Bold,
                                    color: theme.palette.text.primary
                                }}
                            >
                                Find Your Nearest FedEx Express Drop-Off Point
                            </Typography>

                            <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                                Simply enter the name of your nearest town or postcode in the box below to search for your nearest FedEx drop-off point.
                            </Typography>

                            <Stack direction="row" spacing={2} sx={{ mt: 2, width: '100%', maxWidth: 720, mx: { xs: 0, md: 'auto' } }}>
                                <Box sx={{ flexGrow: 1 }}>
                                    <InputField
                                        placeholder="Enter Town or Postcode"
                                        fullWidth
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                backgroundColor: 'white'
                                            }
                                        }}
                                    />
                                </Box>
                                <UIButton
                                    variant="contained"
                                    sx={{
                                        backgroundColor: theme.palette.primary.main,
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: theme.palette.primary.dark
                                        }
                                    }}
                                >
                                    Search
                                </UIButton>
                            </Stack>
                        </Stack>
                    </Stack>
                </Paper>

                {/* Why send a parcel with FedEx Express? */}
                <Paper sx={{ borderRadius: 3, backgroundColor: 'white', border: `2px solid #E0E0E0`, width: '100%', mx: 'auto', }} elevation={0}>
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems={'center'}>
                        {/* Left side - Content */}
                        <Stack spacing={3} sx={{ flex: 1, justifyContent: 'center', px: 5 }}>
                            <Typography
                                variant="h4"
                                sx={{ fontWeight: theme.typography.Bold, color: theme.palette.text.primary }}
                            >
                                Why send a parcel with FedEx Express?
                            </Typography>

                            <Stack component="ul" spacing={1} sx={{ pl: 3, m: 0, color: theme.palette.text.secondary, listStyle: 'disc' }}>
                                <Typography component="li" variant="body1">Send overseas in 3 working days</Typography>
                                <Typography component="li" variant="body1">Parcel protection worth up to £10,000 on selected services</Typography>
                                <Typography component="li" variant="body1">Send parcels up to 120cm in length</Typography>
                                <Typography component="li" variant="body1">Free parcel tracking on all services</Typography>
                            </Stack>
                        </Stack>

                        {/* Right side - Image */}
                        <Box sx={{ flex: 1, width: { xs: '100%', md: '55%' }, }}>
                            <Box
                                component="img"
                                src={FedEx.src}
                                alt="FedEx Van"
                                sx={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: 2, maxHeight: 270, display: "block" }}
                            />
                        </Box>
                    </Stack>
                </Paper>

                {/* About Fedex */}
                <Paper sx={{ borderRadius: 3, backgroundColor: 'white', border: `2px solid #E0E0E0`, width: '100%', mx: 'auto' }} elevation={0}>
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} alignItems={'center'} sx={{ backgroundColor: theme.palette.background.lightBlue, }}>
                        <Stack spacing={3} sx={{ justifyContent: 'center', px: 5, }} >
                            <Typography
                                variant="h4"
                                sx={{ fontWeight: theme.typography.Bold, color: theme.palette.text.primary }}
                            >
                                About FedEx Express
                            </Typography>

                            <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                                The FedEx Express delivery service was founded as &quot;Federal Express&quot; in 1971 in a small town in Arkansas, United States. From there FedEx Express has grown consistently and now has over 280,000 employees.
                            </Typography>

                            <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                                FedEx Express <Box component="span" sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>international courier</Box> services now have a fleet of over 671 aircraft and 43,000 road vehicles across the world. They also have 1,200 service centres across the globe. Approximately 3.1 million packages are delivered by FedEx Express worldwide each day.
                            </Typography>

                            <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                                Send a parcel with FedEx from just £3.65 exc VAT today. Get your FedEx Express quote now with our <Box component="span" sx={{ color: theme.palette.primary.main, textDecoration: 'underline' }}>quick quote</Box> tool.
                            </Typography>
                        </Stack>

                        <Box sx={{}}>
                            <Box
                                component="img"
                                src={FedExAbout.src}
                                alt="FedEx About"
                                sx={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: 2, display: "block", }}
                            />
                        </Box>
                    </Stack>
                </Paper>

                {/* Free Tracking */}
                <Paper sx={{ borderRadius: 3, backgroundColor: 'white', border: `2px solid #E0E0E0`, width: '100%', mx: 'auto', }} elevation={0}>
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} alignItems={'center'} sx={{ backgroundColor: theme.palette.background.lightBlue, }}>
                        {/* Left side - Content */}
                        <Stack spacing={3} py={4} px={6}>
                            <Typography variant="h4" sx={{ fontWeight: theme.typography.Bold, color: theme.palette.text.primary }}>
                                Free FedEx Tracking
                            </Typography>
                            <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                                Looking for professional courier tracking at no extra cost? Get free parcel tracking on all FedEx delivery services with Parcel2Go.
                            </Typography>
                            <Box>
                                <UIButton
                                    variant="contained"
                                    sx={{
                                        backgroundColor: theme.palette.primary.main,
                                        color: 'white',
                                        px: 3,
                                        '&:hover': { backgroundColor: theme.palette.primary.dark }
                                    }}
                                >
                                    Track Your FedEx Parcel
                                </UIButton>
                            </Box>
                        </Stack>

                        <Box
                            component="img"
                            src={FedexTracking.src}
                            alt="FedEx Free Tracking"
                            sx={{ width: '100%', maxHeight: '300px', objectFit: 'cover', borderRadius: 2, display: 'block' }}
                        />
                    </Stack>
                </Paper>

                {/* Guides Slider */}
                <Container maxWidth="lg">
                    <Swiper
                        style={{ width: '100%' }}
                        slidesPerView={3}
                        spaceBetween={30}
                    // navigation removed
                    >
                        {FedexInnerCards.map((card, index) => (
                            <SwiperSlide key={index}>
                                <Paper elevation={0} sx={{ borderRadius: 3, overflow: 'hidden', border: `2px solid #E0E0E0`, backgroundColor: 'white' }}>
                                    <Box component="img" src={(card.image && card.image.src) ? card.image.src : card.image} alt={card.title} sx={{ width: '100%', height: 180, objectFit: 'cover', display: 'block' }} />
                                    <Box sx={{ p: 2.5 }}>
                                        <Typography variant="h6" sx={{ minHeight: "70px", lineHeight: "1.3", fontWeight: 700, color: theme.palette.text.primary }}>
                                            {card.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ mt: 1.5, color: theme.palette.primary.main, cursor: 'pointer' }}>
                                            Read More
                                        </Typography>
                                    </Box>
                                </Paper>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Container>

            </Stack>

        </Container>
    )
}

export default Couriers
