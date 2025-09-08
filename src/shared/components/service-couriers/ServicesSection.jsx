import React from "react";
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";

const ServicesSection = ({
  title,
  image,
  imageAlt = "Services",
  items = [], // [{ heading, body }]
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
      <Stack direction={{ xs: "column", md: "row" }} spacing={6} alignItems={"center"}>
        {/* Left side - Image */}
        <Box sx={{ flex: 1, width: { xs: "100%", md: "45%" } }}>
          <Box
            component="img"
            src={image?.src || image}
            alt={imageAlt}
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: 2,
              display: "block",
            }}
          />
        </Box>

        {/* Right side - Content */}
        <Stack spacing={2} sx={{ flex: 1, px: 5, py: 4 }}>
          {title && (
            <Typography
              variant="h4"
              sx={{ fontWeight: theme.typography.Bold, color: theme.palette.text.primary }}
            >
              {title}
            </Typography>
          )}

          {items.map((item, index) => (
            <Box key={index}>
              <Typography variant="h6" sx={{ fontWeight: theme.typography.Bold, mt: index === 0 ? 1 : 2 }}>
                {item?.heading}
              </Typography>
              <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                {item?.body}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Paper>
  );
};

export default ServicesSection;


