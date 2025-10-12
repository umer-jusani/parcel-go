"use client";
import React from 'react';
import Image from 'next/image';
import { Box, Button, Grid, Paper, Stack, Typography, useTheme } from '@mui/material';
import { Coins, ParcelImage, Star } from '@/assets';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const CompareCouriersSection = () => {
    const theme = useTheme();

    return (
        <Paper
            elevation={0}
            sx={{
                borderRadius: 4,
                p: { xs: 2.5, sm: 3, md: 4 },
                // backgroundColor: theme.palette.background['100'],
            }}
        >
            <Grid container spacing={{ xs: 3, md: 5 }} >
                <Grid item xs={12} md={4}>
                    <Box sx={{ position: 'relative' }}>

                        <Image
                            src={ParcelImage}
                            alt="Courier illustration"
                            style={{ width: '400px', height: 'auto', display: 'block', margin: 'auto' }}
                            priority
                        />
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Stack spacing={2.5}>
                        <Typography variant="h4" fontWeight={800} sx={{ color: theme.palette.text.primary }}>
                            Compare UK Courier Prices With Ease
                        </Typography>
                        <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                            Find trusted services and fair prices in minutes. We work with leading UK and international couriers and surface the best options for your parcel size and speed.
                        </Typography>
                        <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                            Get clear delivery times, tracked options and great value — all in one place. No more tab‑hopping; just pick the service that fits your budget.
                        </Typography>

                        <Box>
                            <Button
                                variant="contained"
                                color="primary"
                                endIcon={<ChevronRightIcon />}
                                sx={{ borderRadius: 999, px: 2.5, textTransform: 'none', fontWeight: 700 }}
                                href="#compare-uk-couriers"
                            >
                                Compare UK Couriers
                            </Button>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default CompareCouriersSection;


