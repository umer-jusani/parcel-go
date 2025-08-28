import { Box, Stack } from "@mui/material";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const SliderWrapper = ({
  children,
  item,
  index,
  current,
  styles = {},
  height = "calc(100vh - 40vh)",
  direction,
}) => {
  return (
    <>
      {index === current && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            scrollSnapAlign: "center",
            height: height,
          }}
        >
          <motion.div
            key={index}
            initial={{ opacity: 0, y: direction === "next" ? 50 : -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: direction === "next" ? -50 : 50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ flex: 1, width: "100%" }}
          >
            <Stack sx={{ ...styles }}>{children}</Stack>
          </motion.div>
        </Box>
      )}
    </>
  );
};

export default SliderWrapper;
