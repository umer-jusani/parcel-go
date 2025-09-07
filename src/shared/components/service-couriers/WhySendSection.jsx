import React from "react";
import {
  Box,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

const WhySendSection = ({ 
  courierName, 
  benefits = [], 
  image, 
  imageAlt 
}) => {
  const theme = useTheme();

  return (
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
        spacing={4}
        alignItems={"center"}
      >
        {/* Left side - Content */}
        <Stack
          spacing={3}
          sx={{ flex: 1, justifyContent: "center", px: 5 }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: theme.typography.Bold,
              color: theme.palette.text.primary,
            }}
          >
            Why send a parcel with {courierName}?
          </Typography>

          <Stack
            component="ul"
            spacing={1}
            sx={{
              pl: 3,
              m: 0,
              color: theme.palette.text.secondary,
              listStyle: "disc",
            }}
          >
            {benefits.map((benefit, index) => (
              <Typography key={index} component="li" variant="body1">
                {benefit}
              </Typography>
            ))}
          </Stack>
        </Stack>

        {/* Right side - Image */}
        <Box sx={{ flex: 1, width: { xs: "100%", md: "55%" } }}>
          <Box
            component="img"
            src={image?.src || image}
            alt={imageAlt}
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: 2,
              maxHeight: 270,
              display: "block",
            }}
          />
        </Box>
      </Stack>
    </Paper>
  );
};

export default WhySendSection;
