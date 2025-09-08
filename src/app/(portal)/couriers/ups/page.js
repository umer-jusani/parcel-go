"use client"
import React from 'react'
import { FedexBanner2, UPSBanner, UPSVan, UPSAbout, World, UPSFreeTracking } from '@/assets'
import DynamicBanner from '@/shared/components/banner/dynamic-banner'
import NavigationSection from '@/shared/components/service-couriers/NavigationSection'
import WhySendSection from '@/shared/components/service-couriers/WhySendSection'
import { Container, Stack, Typography, useTheme } from '@mui/material'
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