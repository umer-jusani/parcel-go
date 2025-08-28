import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";

const SectionWrapper = ({ children, color, padding = 4 }) => {
  let HeaderChildern = children?.find(
    (ele) => ele.props["data-role"] == "header"
  );
  let ContentChildern = children?.find(
    (ele) => ele.props["data-role"] == "content"
  );

  return (
    <>
      <Box>
        {/* Heading Row */}
        <AppBar
          sx={{
            bgcolor: "background.default",
            boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.15)", // Soft bottom shadow
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            color: color || "text.primary",
            px: 1,
            py: 1,
          }}
          position="relative"
          elevation={0}
        >
          <Toolbar>{HeaderChildern}</Toolbar>
        </AppBar>
        <Box bgcolor={"background.default"} sx={{ p: padding }}>
          {ContentChildern}
        </Box>
      </Box>
    </>
  );
};

export default SectionWrapper;
