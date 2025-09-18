"use client";
import React from "react";
import DynamicBanner from "@/shared/components/banner/dynamic-banner";
import Image from "next/image";
import { FedEx, FedexBanner, FedexBanner2 } from "@/assets";
// Temporarily commenting out problematic JPEG images
// import { Skynet2, whySkynet } from "@/assets";
import { Container, Stack, Typography, useTheme } from "@mui/material";
import NavigationSection from "@/shared/components/service-couriers/NavigationSection";
import WhySendSection from "@/shared/components/service-couriers/WhySendSection";
import AboutSection from "@/shared/components/service-couriers/AboutSection";

const navigationItems = [
  "Skynet Services",
  "About Skynet Couriers",
  "Skynet Tracking",
  "FAQs",
];


const skynetAboutParagraphs = [
  `Founded in 1972, SkyNet Worldwide Express has grown to become the world's largest independently owned express network, serving over 209 countries with more than 1,100 branches and 1,300 offices globally.`,
  `SkyNet offers fast, reliable and flexible door-to-door courier services—including international express, air cargo, e-commerce solutions, return logistics, PUDO networks, and streamlined customs clearance—backed by modern online tracking and proof of delivery capabilities.`,
  `Powered by an advanced, user-friendly web-based infrastructure featuring online tracking, electronic invoicing, and proof of delivery, SkyNet emphasizes flexibility, customization, and efficient service to deliver solutions even to the most challenging destinations.`
];

const Skynet = () => {
  return (
    <>
      <DynamicBanner
        image1={
          <Image
            src={FedexBanner}
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
          Send a Parcel with Skynet
        </Typography>
        <Typography variant="h6" fontWeight={"medium"}>
          Send from only £3.65 exc VAT
        </Typography>
      </DynamicBanner>

      <Container maxWidth="xl">
        <Stack spacing={7} alignItems="center" sx={{ py: 6 }}>
          {/* Navigation Section */}
          <NavigationSection navigationItems={navigationItems} />

          <WhySendSection
            courierName="Skynet"
            benefits={[
              "International Air Express with tracking, insurance, proof of delivery",
              "Global coverage in 156+ countries with 1,000+ offices worldwide",
              "E-commerce & fulfillment services with API integrations (Shopify, WooCommerce, etc.)",
              "Dedicated handling of dangerous goods and time-sensitive shipments",
            ]}
            // Temporarily commenting out problematic JPEG image
            // image={whySkynet}
            // imageAlt="Skynet Worldwide Express Van"
          />

          <AboutSection
            courierName="Skynet"
            paragraphs={skynetAboutParagraphs}
            // Temporarily commenting out problematic JPEG image
            // image={Skynet2}
            // imageAlt="SkyNet Worldwide Express Delivery"
          />
        </Stack>
      </Container>
    </>
  );
};

export default Skynet;
