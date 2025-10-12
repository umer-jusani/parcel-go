"use client";
import { AllCourierOne, FedexBanner2 } from '@/assets';
import DynamicBanner from '@/shared/components/banner/dynamic-banner';
import NavigationSection from '@/shared/components/service-couriers/NavigationSection';
import CompareCouriersSection from '@/shared/components/service-couriers/CompareCouriersSection';
import SliderWrapper from '@/shared/pure-components/animation-wrapper/SliderWrapper';
import { Box, Container, IconButton, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import React from 'react';
// external services logos
import { Amazon, BigCommerce, BluePark, Ebay, Etsay, Km, Magento, OnBuy, PrestaShop, ShopWiered, Shopify, SquareSpace, Tiktok, Wix, WooCommerce } from '@/assets';
// icons
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const navigationItems = [
    "Compare Prices",
    "UK Delivery",
    "International Delivery",
    "Bussiness Shipping",
    "All Couriers",
];

const All = () => {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
    const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    const isLg = useMediaQuery(theme.breakpoints.between('lg', 'xl'));

    const logos = [Amazon, Ebay, OnBuy, Shopify, WooCommerce, BigCommerce, SquareSpace, Wix, Magento, PrestaShop, BluePark, ShopWiered, Etsay, Tiktok, Km];

    const perPage = isXs ? 2 : isSm ? 3 : isMd ? 5 : isLg ? 6 : 7;

    const chunkArray = React.useCallback((arr, size) => {
        const chunks = [];
        for (let i = 0; i < arr.length; i += size) {
            chunks.push(arr.slice(i, i + size));
        }
        return chunks;
    }, []);

    const pages = React.useMemo(() => chunkArray(logos, perPage), [logos, perPage, chunkArray]);
    const [current, setCurrent] = React.useState(0);
    const [direction, setDirection] = React.useState('next');

    const goNext = () => {
        setDirection('next');
        setCurrent(prev => (prev + 1) % (pages.length || 1));
    };

    const goPrev = () => {
        setDirection('prev');
        setCurrent(prev => (prev - 1 + (pages.length || 1)) % (pages.length || 1));
    };

    return (
        <>
            <DynamicBanner
                image1={
                    <Image
                        src={AllCourierOne}
                        alt="Fedex Banner"
                        width={350}
                        style={{ height: "auto" }}
                    />
                }
                isCalculator={true}
                image2={
                    <Image
                        src={FedexBanner2}
                        alt="Fedex Banner"
                        width={350}
                        style={{ height: "auto" }}
                    />
                }
            >
                <Typography variant="h3" fontWeight={"bold"}>
                    UK & International Courier Services
                </Typography>
                <Typography variant="h6" fontWeight={"medium"}>
                    Parcel Delivery from just £2.19 exc VAT
                </Typography>
            </DynamicBanner>

            <Container maxWidth="xl">
                <Stack spacing={7} alignItems="center" sx={{ py: 6 }}>

                    {/* Navigation Section */}
                    <NavigationSection navigationItems={navigationItems} />

                    {/* External Services Slider using framer-motion SliderWrapper */}
                    <Box sx={{ position: 'relative', width: '100%' }}>
                        <IconButton
                            aria-label="previous"
                            onClick={goPrev}
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: { xs: -8, sm: -16, md: -24 },
                                transform: 'translateY(-50%)',
                                zIndex: 10,
                                bgcolor: 'white',
                                border: '1px solid #E5E7EB',
                                boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                                '&:hover': { bgcolor: 'white' },
                            }}
                            size="medium"
                        >
                            <ChevronLeftIcon />
                        </IconButton>
                        <IconButton
                            aria-label="next"
                            onClick={goNext}
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                right: { xs: -8, sm: -16, md: -24 },
                                transform: 'translateY(-50%)',
                                zIndex: 10,
                                bgcolor: 'white',
                                border: '1px solid #E5E7EB',
                                boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                                '&:hover': { bgcolor: 'white' },
                            }}
                            size="medium"
                        >
                            <ChevronRightIcon />
                        </IconButton>

                        {pages.map((page, index) => (
                            <SliderWrapper
                                key={index}
                                index={index}
                                current={current}
                                direction={direction}
                                height="auto"
                                styles={{ width: '100%' }}
                            >
                                <Box
                                    sx={{
                                        display: 'grid',
                                        gridTemplateColumns: `repeat(${perPage}, minmax(0, 1fr))`,
                                        gap: 2,
                                        width: '100%'
                                    }}
                                >
                                    {page.map((logo, idx) => (
                                        <Box
                                            key={`${index}-${idx}`}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                height: 72,
                                                p: '8px 12px',
                                                borderRadius: 2,
                                                bgcolor: 'white',
                                                border: '1px solid #E5E7EB',
                                            }}
                                        >
                                            <Image src={logo} alt="service logo" height={32} width={120} style={{ width: 'auto', height: '100%' }} />
                                        </Box>
                                    ))}
                                </Box>
                            </SliderWrapper>
                        ))}
                        <Typography variant='h4' sx={{ textAlign: 'center', mt: 2, fontWeight: 'bold' }}>
                            The UK's Largest Courier Comparison Site
                        </Typography>
                    </Box>

                    {/* Compare Couriers content section */}
                    <CompareCouriersSection />

                </Stack>
            </Container>
        </>
    )
}

export default All
