"use client";
import React from "react";
import DynamicBanner from "@/shared/components/banner/dynamic-banner";
import Image from "next/image";
  import { Typography } from "@mui/material";
import { BannerParcelForce, FedexBanner2 } from "@/assets";
import { NavigationSection } from "@/shared/common-layouts/navigation/navigation";
import { Container, Stack } from "@mui/material";
import { Typography } from "@mui/material";

const navigationItems = [
  "FedEx Services",
  "About FedEx Couriers",
  "FedEx Tracking",
  "FAQs",
];

const ParcelForce = () => {
  return (
    <>
      <DynamicBanner
        image1={
          <Image
            src={BannerParcelForce}
            alt="Parcel Force Banner"
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
          Send a Parcel with Parcelforce
        </Typography>
        <Typography variant="h6" fontWeight={"medium"}>
          Send from only £7.99 exc VAT
        </Typography>
      </DynamicBanner>

      <Container maxWidth="xl">
        <Stack spacing={7} alignItems="center" sx={{ py: 6 }}>
          {/* Navigation Section */}
          <NavigationSection navigationItems={navigationItems} />
        </Stack>
      </Container>
    </>
  );
};

export default ParcelForce;
