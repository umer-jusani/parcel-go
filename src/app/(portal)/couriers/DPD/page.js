"use client"
import { AboutDPD, DPDBanner, DPDservices, FedexBanner2, FedexTracking, WhyDPD } from '@/assets'
import Faqs from '@/shared/common-layouts/faqs/faqs'
import DynamicBanner from '@/shared/components/banner/dynamic-banner'
import AboutSection from '@/shared/components/service-couriers/AboutSection'
import FreeTrackingSection from '@/shared/components/service-couriers/FreeTrackingSection'
import NavigationSection from '@/shared/components/service-couriers/NavigationSection'
import ServicesSection from '@/shared/components/service-couriers/ServicesSection'
import WhySendSection from '@/shared/components/service-couriers/WhySendSection'
import { faqsdpd } from '@/shared/constant/constant'
import { Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const DPD = () => {

  const navigationItems = [
    "DPD Delivery Services",
    "About DPD Couriers",
    "DPD Tracking",
    "FAQs",
  ];

  const fedexBenefits = [
    "1-hour collection and delivery windows",
    "Exclusive tracking features with DPD Predict",
    "Over 6,000 Drop Off Points",
    "Parcel Protection up to £10,000 on selected services",
    "Send up to 30kg per parcel",
  ];


  const dpdAboutParagraphs = [
    `As one of Europe’s biggest parcel services, DPD is owned by La Poste, a French company and the second largest postal group in Europe. DPD - which stands for Dynamic Parcel Distribution - has been around in several forms since the 1980s, but DPD has become one of the most experienced couriers in the industry by delivering over 300 million parcels every year.`,
    `With over 500 depots in 185 countries and territories, you can rest assured that DPD courier services are tailored to meet high demand both locally and internationally. DPD Express and its other shipping services offer quick and reliable door to door services across the UK and international locations.`,
    `DPD offers a service for all types of senders, whether you are a one-time sender or you need to send in bulk for your online e-commerce shop. Furthermore, if you need to ship worldwide, DPD is well-equipped to handle any demand you have, allowing you to send up to 30kg per parcel.`,
    `With DPD drop-off services and DPD collection points available, DPD’s extensive network across the UK has got you covered. You’ll always get the best possible DPD courier service to ensure your parcels get from A to B safely and on time, without the hassle!`,
    `When you ship with Parcel2Go, you’ll always get the most competitive prices from DPD! DPD prices start from as low as £5.29 exc VAT - find out your cost with our quick quote tool now`
  ];

  return (
    <>
      <DynamicBanner
        image1={
          <Image
            src={DPDBanner}
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
          Send a Parcel with DPD
        </Typography>
        <Typography variant="h6" fontWeight={"medium"}>
          Send from only £5.29 exc VAT
        </Typography>
      </DynamicBanner>

      <Container maxWidth="xl">
        <Stack spacing={7} alignItems="center" sx={{ py: 6 }}>
          {/* Navigation Section */}
          <NavigationSection navigationItems={navigationItems} />

          <WhySendSection
            courierName="DPD"
            benefits={fedexBenefits}
            image={WhyDPD}
            imageAlt="DPD Van"
          />

          <AboutSection
            courierName="DPD"
            paragraphs={dpdAboutParagraphs}
            image={AboutDPD}
            imageAlt="FedEx About"
            backgroundColor="lightBlue"
          />

          <ServicesSection
            title="DPD UK Services"
            image={DPDservices}
            imageAlt="DPD Services"
            items={[
              {
                heading: "Drop-off Services",
                body:
                  "Send a parcel with DPD anytime at any of the 6,000 DPD Drop Shop locations around the UK. Easily track your parcel from collection until it reaches its final destination.",
              },
              {
                heading: "Super-fast Delivery",
                body:
                  "Once your parcel is in their possession, DPD couriers deliver within 1-3 working days as standard. You will be provided with a 1-hour collection delivery window so you can plan your day!",
              },
              {
                heading: "International Services",
                body:
                  "DPD offers a wide range of international delivery solutions worldwide. You can send a parcel with DPD to over 185 countries and territories, with a range of services to choose from.",
              },
            ]}
          />

          {/* Free Tracking */}
          <FreeTrackingSection
            title="Free DPD Tracking"
            description="Looking for professional courier tracking at no extra cost? Get free parcel tracking on all DPD delivery services with Parcel2Go."
            ctaText="Track Your DPD Parcel"
            image={FedexTracking}
            imageAlt="FedEx Free Tracking"
            backgroundColor="lightBlue"
          />

          {/* Faqs Section */}
          <Faqs faqa={faqsdpd} />

        </Stack>
      </Container>
    </>
  )
}

export default DPD