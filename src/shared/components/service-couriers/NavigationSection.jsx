import React from "react";
import {
  Box,
  Divider,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";

const NavigationSection = ({ navigationItems = [] }) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: theme.palette.background["100"],
        borderRadius: 3,
        border: `2px solid #E0E0E0`,
        overflow: "hidden",
        mx: "auto",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {navigationItems.map((item, index) => (
          <React.Fragment key={index}>
            <Box
              sx={{
                flex: 1,
                textAlign: "center",
                py: 3,
                px: 2,
                cursor: "pointer",
                transition: "all 0.2s ease-in-out",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "text.primary",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                }}
              >
                {item}
              </Typography>
            </Box>
            {index < navigationItems.length - 1 && (
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  display: { xs: "none", sm: "block" },
                  borderColor: theme.palette.grey[300],
                }}
              />
            )}
            {index < navigationItems.length - 1 && (
              <Divider
                orientation="horizontal"
                sx={{
                  display: { xs: "block", sm: "none" },
                  width: "80%",
                  mx: "auto",
                  borderColor: theme.palette.grey[300],
                }}
              />
            )}
          </React.Fragment>
        ))}
      </Box>
    </Paper>
  );
};

export default NavigationSection;
