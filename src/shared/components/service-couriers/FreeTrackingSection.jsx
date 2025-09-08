import React from "react";
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import UIButton from "@/shared/pure-components/button/button";

const FreeTrackingSection = ({
  title = "Free Tracking",
  description,
  ctaText,
  onCtaClick,
  image,
  imageAlt = "Free Tracking",
  backgroundColor = "lightBlue",
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
        spacing={6}
        alignItems={"center"}
        sx={{ backgroundColor: theme.palette.background[backgroundColor] }}
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
            {title}
          </Typography>
          {description && (
            <Typography
              variant="body1"
              sx={{ color: theme.palette.text.secondary }}
            >
              {description}
            </Typography>
          )}
          {ctaText && (
            <Box>
              <UIButton
                variant="contained"
                onClick={onCtaClick}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: "white",
                  px: 3,
                  "&:hover": {
                    backgroundColor: theme.palette.primary.dark,
                  },
                }}
              >
                {ctaText}
              </UIButton>
            </Box>
          )}
        </Stack>

        {/* Right side - Image */}
        <Box
          component="img"
          src={image?.src || image}
          alt={imageAlt}
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
  );
};

export default FreeTrackingSection;


