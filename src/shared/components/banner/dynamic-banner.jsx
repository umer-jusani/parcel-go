import React from "react";
import { Stack } from "@mui/material";
import { Container } from "@mui/material";
import { FLOW_SPACER } from "@/shared/constant/constant";
import Calculator from "@/shared/components/calculator/calculator";

const DynamicBanner = ({ image1, image2, isCalculator = false, children }) => {
  return (
    <>
      <Stack bgcolor={"background.white"} py={7}>
        <Container maxWidth={"xl"}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={FLOW_SPACER}
          >
            {/* ImAage */}
            {image1}
            {/* Title */}
            <Stack textAlign={"center"} spacing={2}>
              {children}
            </Stack>
            {/* ImAage */}
            {image2}
          </Stack>

          {/* Calculator */}
          <Container maxWidth={"lg"}>
            {isCalculator && <Calculator />}
          </Container>
        </Container>
      </Stack>
    </>
  );
};

export default DynamicBanner;
