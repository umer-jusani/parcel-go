import React from "react";
import {
  Box,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

const AboutSection = ({ 
  courierName, 
  paragraphs = [], 
  image, 
  imageAlt,
  backgroundColor = "lightBlue"
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
        <Stack spacing={3} sx={{ justifyContent: "center", px: 5 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: theme.typography.Bold,
              color: theme.palette.text.primary,
            }}
          >
            About {courierName}
          </Typography>

          {paragraphs.map((paragraph, index) => (
            <Typography
              key={index}
              variant="body1"
              sx={{ color: theme.palette.text.secondary }}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </Stack>

        <Box sx={{}}>
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
      </Stack>
    </Paper>
  );
};

export default AboutSection;
