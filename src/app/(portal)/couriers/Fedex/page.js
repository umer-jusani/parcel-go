"use client";
import {
  FedEx,
  FedExAbout,
  FedexBanner,
  FedexBanner2,
  FedexInnerCards,
  FedexTracking,
  NearestLocation,
} from "@/assets";
import InputField from "@/shared/form-control/InputField";
import UIButton from "@/shared/pure-components/button/button";
import {
  Box,
  Container,
  Paper,
  Stack,
  Typography,
  useTheme
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import DynamicBanner from "@/shared/components/banner/dynamic-banner";
import AboutSection from "@/shared/components/service-couriers/AboutSection";
import NavigationSection from "@/shared/components/service-couriers/NavigationSection";
import WhySendSection from "@/shared/components/service-couriers/WhySendSection";
import Image from "next/image";
import "swiper/css";
// navigation removed

const Couriers = () => {
  const theme = useTheme();

  const navigationItems = [
    "FedEx Services",
    "About FedEx Couriers",
    "FedEx Tracking",
    "FAQs",
  ];

  const fedexBenefits = [
    "Send overseas in 3 working days",
    "Parcel protection worth up to £10,000 on selected services",
    "Send parcels up to 120cm in length",
    "Free parcel tracking on all services",
  ];

  const fedexAboutParagraphs = [
    `The FedEx Express delivery service was founded as "Federal Express" in 1971 in a small town in Arkansas, United States. From there FedEx Express has grown consistently and now has over 280,000 employees.`,
    `FedEx Express <span style="color: ${theme.palette.primary.main}; font-weight: 600;">international courier</span> services now have a fleet of over 671 aircraft and 43,000 road vehicles across the world. They also have 1,200 service centres across the globe. Approximately 3.1 million packages are delivered by FedEx Express worldwide each day.`,
    `Send a parcel with FedEx from just £3.65 exc VAT today. Get your FedEx Express quote now with our <span style="color: ${theme.palette.primary.main}; text-decoration: underline;">quick quote</span> tool.`
  ];

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
          Send a Parcel with FedEx Express
        </Typography>
        <Typography variant="h6" fontWeight={"medium"}>
          Send from only £3.65 exc VAT
        </Typography>
      </DynamicBanner>

      <Container maxWidth="xl">
        <Stack spacing={7} alignItems="center" sx={{ py: 6 }}>
          {/* Navigation Section */}
          <NavigationSection navigationItems={navigationItems} />

          {/* Find Nearest Drop-off Point Section */}
          <Paper
            sx={{
              p: 4,
              borderRadius: 3,
              backgroundColor: "white",
              border: `2px solid #E0E0E0`,
              width: { xs: "100%", md: "80%" },
            }}
            elevation={0}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={6}
              alignItems={"center"}
            >
              {/* Left side - Image */}
              <Box sx={{ width: { xs: "100%", md: "45%" }, maxWidth: "370px" }}>
                <Box
                  component="img"
                  src={NearestLocation.src}
                  alt="Drop-off Location"
                  sx={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Box>

              {/* Right side - Content */}
              <Stack
                spacing={2}
                sx={{
                  // width: { xs: '100%', md: '55%' },
                  justifyContent: "center",
                  alignItems: { xs: "flex-start", md: "center" },
                  textAlign: { xs: "left", md: "center" },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: theme.typography.Bold,
                    color: theme.palette.text.primary,
                  }}
                >
                  Find Your Nearest FedEx Express Drop-Off Point
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ color: theme.palette.text.secondary }}
                >
                  Simply enter the name of your nearest town or postcode in the
                  box below to search for your nearest FedEx drop-off point.
                </Typography>

                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    mt: 2,
                    width: "100%",
                    maxWidth: 720,
                    mx: { xs: 0, md: "auto" },
                  }}
                >
                  <Box sx={{ flexGrow: 1 }}>
                    <InputField
                      placeholder="Enter Town or Postcode"
                      fullWidth
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "white",
                        },
                      }}
                    />
                  </Box>
                  <UIButton
                    variant="contained"
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      color: "white",
                      "&:hover": {
                        backgroundColor: theme.palette.primary.dark,
                      },
                    }}
                  >
                    Search
                  </UIButton>
                </Stack>
              </Stack>
            </Stack>
          </Paper>

          {/* Why send a parcel with FedEx Express? */}
          <WhySendSection
            courierName="FedEx Express"
            benefits={fedexBenefits}
            image={FedEx}
            imageAlt="FedEx Van"
          />

          {/* About Fedex */}
          <AboutSection
            courierName="FedEx Express"
            paragraphs={fedexAboutParagraphs}
            image={FedExAbout}
            imageAlt="FedEx About"
            backgroundColor="lightBlue"
          />

          {/* Free Tracking */}
          <Paper
            sx={{
              borderRadius: 3,
              backgroundColor: "white",
              border: `2px solid #E0E0E0`,
              width: "100%",
              mx: "auto",
            }}
            elevation={0}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={6}
              alignItems={"center"}
              sx={{ backgroundColor: theme.palette.background.lightBlue }}
            >
              {/* Left side - Content */}
              <Stack spacing={3} py={4} px={6}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: theme.typography.Bold,
                    color: theme.palette.text.primary,
                  }}
                >
                  Free FedEx Tracking
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: theme.palette.text.secondary }}
                >
                  Looking for professional courier tracking at no extra cost?
                  Get free parcel tracking on all FedEx delivery services with
                  Parcel2Go.
                </Typography>
                <Box>
                  <UIButton
                    variant="contained"
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      color: "white",
                      px: 3,
                      "&:hover": {
                        backgroundColor: theme.palette.primary.dark,
                      },
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
                sx={{
                  width: "100%",
                  maxHeight: "300px",
                  objectFit: "cover",
                  borderRadius: 2,
                  display: "block",
                }}
              />
            </Stack>
          </Paper>

          {/* Guides Slider */}
          <Container maxWidth="lg">
            <Swiper
              style={{ width: "100%" }}
              slidesPerView={3}
              spaceBetween={30}
              // navigation removed
            >
              {FedexInnerCards.map((card, index) => (
                <SwiperSlide key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      borderRadius: 3,
                      overflow: "hidden",
                      border: `2px solid #E0E0E0`,
                      backgroundColor: "white",
                    }}
                  >
                    <Box
                      component="img"
                      src={
                        card.image && card.image.src
                          ? card.image.src
                          : card.image
                      }
                      alt={card.title}
                      sx={{
                        width: "100%",
                        height: 180,
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                    <Box sx={{ p: 2.5 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          minHeight: "70px",
                          lineHeight: "1.3",
                          fontWeight: 700,
                          color: theme.palette.text.primary,
                        }}
                      >
                        {card.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          mt: 1.5,
                          color: theme.palette.primary.main,
                          cursor: "pointer",
                        }}
                      >
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
    </>
  );
};

export default Couriers;
