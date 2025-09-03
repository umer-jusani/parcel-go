import React from "react";
import { Stack } from "@mui/material";
import { Container } from "@mui/material";
import Image from "next/image";
import { Typography } from "@mui/material";
import { GetAQuote } from "@/assets";
import { FLOW_SPACER } from "@/shared/constant/constant";
import Calculator from "@/shared/components/calculator/calculator";

const DynamicBanner = ({ title, description, image1, image2 }) => {
  return (
    <>
      <Stack bgcolor={"background.white"} py={7}>
        <Container maxWidth={"lg"}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={FLOW_SPACER}
          >
            {/* ImAage */}
            <Image
              src={image1}
              alt="Get a Quote"
              width={250}
              height={"auto"}
              objectFit="cover"
            />
            {/* Title */}
            <Stack textAlign={"center"} spacing={2}>
              <Typography variant="h3" fontWeight={"bold"}>
                {title}
              </Typography>
              <Typography variant="h4" fontWeight={"medium"}>
                {description}
              </Typography>
            </Stack>
            {/* ImAage */}
            <Image
              src={image2}
              alt="Get a Quote"
              width={250}
              height={"auto"}
              objectFit="cover"
            />
          </Stack>

          {/* Calculator */}
          <Container maxWidth={"lg"}>
            <Calculator />
          </Container>
        </Container>
      </Stack>
    </>
  );
};

export default DynamicBanner;
