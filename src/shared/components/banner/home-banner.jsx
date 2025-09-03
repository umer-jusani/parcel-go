import Calculator from "@/shared/components/calculator/calculator";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const HomeBanner = ({ title, description, image }) => {
  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
          position: "relative",
          overflow: "hidden",
          pt: 2,
          pb: 6
        }}
      >
        <Container maxWidth={"lg"}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={4}
            sx={{ position: "relative", zIndex: 2 }}
          >
            {/* Duck Image */}
            <Box
              sx={{ flex: 1, display: "flex", justifyContent: "flex-start" }}
            >
              <Image
                src={image}
                alt="Delivery Duck"
                width={400}
                height={"auto"}
                style={{ objectFit: "contain" }}
              />
            </Box>

            {/* Title Section */}
            <Stack
              spacing={2}
              sx={{
                color: "white",
                zIndex: 2,
              }}
            >
              <Typography
                variant="h3"
                fontWeight={"bold"}
                sx={{
                  color: "white",
                  textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="h5"
                fontWeight={"medium"}
                sx={{
                  color: "white",
                  opacity: 0.9,
                }}
              >
                {description}
              </Typography>
            </Stack>

            {/* Right side spacing */}
            <Box sx={{ flex: 1 }} />
          </Stack>

          {/* Calculator - Positioned to overlap the banner */}
            <Calculator />
        </Container>

        {/* Background decorative elements */}
        <Box
          sx={{
            position: "absolute",
            top: 20,
            right: 50,
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 30,
            left: 100,
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            zIndex: 1,
          }}
        />
      </Box>
    </>
  );
};

export default HomeBanner;
