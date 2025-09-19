"use client"
import React from 'react'
import { FedexBanner2, UPSBanner, UPSVan, UPSAbout, World, UPSFreeTracking, UPSLogo } from '@/assets'
import DynamicBanner from '@/shared/components/banner/dynamic-banner'
import NavigationSection from '@/shared/components/service-couriers/NavigationSection'
import WhySendSection from '@/shared/components/service-couriers/WhySendSection'
import { Container, Stack, Typography, useTheme, Grid, Paper, Box } from '@mui/material'
import UIButton from '@/shared/pure-components/button/button'
import Image from 'next/image'
import AboutSection from '@/shared/components/service-couriers/AboutSection'
import ServicesSection from '@/shared/components/service-couriers/ServicesSection'
import FreeTrackingSection from '@/shared/components/service-couriers/FreeTrackingSection'
import { faqsUPS } from '@/shared/constant/constant'
import Faqs from '@/shared/common-layouts/faqs/faqs'


const navigationItems = [
  "UPS Services",
  "About UPS Couriers",
  "UPS Tracking",
  "FAQs",
];

const fedexBenefits = [
  "Collections available between 9am and 5:30pm",
  "Parcel protection worth up to £10,000 on selected services",
  "Send up to 65kg per parcel",
  "Free parcel tracking available on all services",
];


const UPS = () => {
  const theme = useTheme();

  const upsAboutParagraphs = [
    `UPS is the world’s largest parcel delivery company. Originally called the American Messenger Company when it was founded in 1907,  UPS (or the United Parcel Service) now delivers over 15 million packages a day around the world.`,
    `UPS delivery offers a broad range of solutions for the transportation of packages and freight, including innovative delivery options for the global consumer market; the facilitation of international trade, and the deployment of advanced technology to more efficiently manage the world of business`,
    `Get a UPS quote today with our quick quote tool. UPS delivery starts from £8.10 exc VAT - find out how much it will cost you now.`
  ];



  return (
    <>
      <DynamicBanner
        image1={
          <Image
            src={UPSBanner}
            alt="UPS Banner"
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
          Send a Parcel with UPS
        </Typography>
        <Typography variant="h6" fontWeight={"medium"}>
          Send from only £8.10 exc VAT
        </Typography>
      </DynamicBanner>

      <Container maxWidth="xl">
        <Stack spacing={7} alignItems="center" sx={{ py: 6 }}>
          {/* Navigation Section */}
          <NavigationSection navigationItems={navigationItems} />

          {/* Why send a parcel with UPS? */}
          <WhySendSection
            courierName="UPS"
            benefits={fedexBenefits}
            image={UPSVan}
            imageAlt="UPS Van"
          />

          {/* About UPS */}
          <AboutSection
            courierName="UPS Couriers"
            paragraphs={upsAboutParagraphs}
            image={UPSAbout}
            imageAlt="UPS About"
            backgroundColor="lightBlue"
          />

          {/* UPS Services */}
          <ServicesSection
            title="UPS Services"
            image={World}
            imageAlt="FedEx Services"
            items={[
              {
                heading: "Super-Fast Delivery",
                body:
                  "As the world’s largest courier service, there is a vast network of UPS couriers who can deliver your items within 24 or 48 hours. Timed deliveries of 10:30am or 12pm the next day are also available should you require more expedited UPS postage.",
              },
              {
                heading: "International UPS Services",
                body: "Delivering more than 15 million parcels every day across 200 countries and territories, UPS’ courier service is on hand to take care of your international deliveries and imports. Find the full range of UPS international shipping services above.",
              },
            ]}
          />

          {/* Collection Services */}
          <Container maxWidth="lg">
            <Stack spacing={2} sx={{ width: '100%' }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: theme.typography.Bold, color: theme.palette.text.primary, textAlign: 'center' }}
              >
                Collection Services
              </Typography>

              <Grid container spacing={3} justifyContent="center">
                {/* UPS Standard */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: `2px solid #E0E0E0`, backgroundColor: 'white', transition: 'all 0.3s ease', '&:hover': { borderColor: theme.palette.primary.main, boxShadow: '0 8px 25px rgba(0,0,0,0.1)' } }}>
                    <Stack spacing={2}>
                      <Box>
                        <Image src={UPSLogo} alt="UPS Logo" width={60} height={40} style={{ height: 30, width: 'auto' }} />
                        <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                          UPS Standard®
                        </Typography>
                      </Box>

                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontWeight: 500 }}>
                        Est Delivery:Tue 23 Sep - Thu 02 Oct
                      </Typography>

                      <Stack spacing={2}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, backgroundColor: '#F8F9FA', borderRadius: 2 }}>
                          <Typography variant="body1" sx={{ fontWeight: 500 }}>From £8.10</Typography>
                        </Box>
                        <UIButton variant="contained" sx={{ backgroundColor: theme.palette.primary.main, '&:hover': { backgroundColor: theme.palette.primary.dark } }}>
                          Book with £50 Protection
                        </UIButton>
                      </Stack>
                    </Stack>
                  </Paper>
                </Grid>

                {/* UPS Express Saver by 12pm */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: `2px solid #E0E0E0`, backgroundColor: 'white', transition: 'all 0.3s ease', '&:hover': { borderColor: theme.palette.primary.main, boxShadow: '0 8px 25px rgba(0,0,0,0.1)' } }}>
                    <Stack spacing={2}>
                      <Box>
                        <Image src={UPSLogo} alt="UPS Logo" width={60} height={40} style={{ height: 30, width: 'auto' }} />
                        <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                          UPS Express Saver® by 12pm
                        </Typography>
                      </Box>

                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontWeight: 500 }}>
                        Est Delivery:Tue 23 Sep - Thu 02 Oct
                      </Typography>

                      <Stack spacing={2}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, backgroundColor: '#F8F9FA', borderRadius: 2 }}>
                          <Typography variant="body1" sx={{ fontWeight: 500 }}>From £10.04</Typography>
                        </Box>
                        <UIButton variant="contained" sx={{ backgroundColor: theme.palette.primary.main, '&:hover': { backgroundColor: theme.palette.primary.dark } }}>
                          Book with £50 Protection
                        </UIButton>
                      </Stack>
                    </Stack>
                  </Paper>
                </Grid>

                {/* UPS Express by 10.30am */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: `2px solid #E0E0E0`, backgroundColor: 'white', transition: 'all 0.3s ease', '&:hover': { borderColor: theme.palette.primary.main, boxShadow: '0 8px 25px rgba(0,0,0,0.1)' } }}>
                    <Stack spacing={2}>
                      <Box>
                        <Image src={UPSLogo} alt="UPS Logo" width={60} height={40} style={{ height: 30, width: 'auto' }} />
                        <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                          UPS Express® by 10.30am
                        </Typography>
                      </Box>

                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontWeight: 500 }}>
                        Est Delivery:Tue 23 Sep - Thu 02 Oct
                      </Typography>

                      <Stack spacing={2}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, backgroundColor: '#F8F9FA', borderRadius: 2 }}>
                          <Typography variant="body1" sx={{ fontWeight: 500 }}>From £14.64</Typography>
                        </Box>
                        <UIButton variant="contained" sx={{ backgroundColor: theme.palette.primary.main, '&:hover': { backgroundColor: theme.palette.primary.dark } }}>
                          Book with £50 Protection
                        </UIButton>
                      </Stack>
                    </Stack>
                  </Paper>
                </Grid>
              </Grid>
            </Stack>
          </Container>

          {/* Free Tracking */}
          <FreeTrackingSection
            title="Free UPS Tracking"
            description="Track your parcel from collection to delivery with our free UPS tracking service."
            image={UPSFreeTracking}
            imageAlt="Free UPS Tracking"
          />


          {/* Faqs Section */}
          <Faqs faqa={faqsUPS} />
        </Stack>
      </Container>
    </>
  )
}

export default UPS