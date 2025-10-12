import React from "react";
import { Stack, useTheme } from "@mui/material";
import { Container } from "@mui/material";
import { FLOW_SPACER } from "@/shared/constant/constant";
import Calculator from "@/shared/components/calculator/calculator";

const DynamicBanner = ({ image1, image2, isCalculator = false, children }) => {
  const theme = useTheme();
  return (
    <>
      <Stack sx={{ backgroundColor: theme.palette.background["200"], color: "white" }} py={7}>
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
