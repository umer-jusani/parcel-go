"use client";

import { Button, CircularProgress } from "@mui/material";
import * as PropTypes from "prop-types";

// import UIFilterButton from "./filter";

const UIButton = ({
  children,
  variant = "contained",
  fullWidth = false,
  isLoading = false,
  sans = false,
  size = "large",
  width = null,
  startIcon = null,
  endIcon = null,
  capitalize = true,
  disabled = false,
  sx = {},
  color = "primary",
  callback = () => { },
  btncolor,
  ...otherProps
}) => {
  const loaderColor = variant === "contained" ? "common" : "primary";

  return (
    <Button
      fullWidth={fullWidth}
      color={color}
      size={size}
      sx={{
        color: "text.light",
        textTransform: capitalize && "capitalize",
        bgcolor: btncolor,
        width: width,
        textWrap: "nowrap",
        ...sx
      }}
      variant={variant}
      startIcon={
        isLoading ? (
          <CircularProgress size="0.7rem" color={loaderColor} pr="0.4rem" />
        ) : (
          startIcon
        )
      }
      endIcon={
        isLoading ? (
          // <CircularProgress size="0.7rem" color={loaderColor} pr="0.4rem" />
          <></>
        ) : (
          endIcon
        )
      }
      btncolor={btncolor}
      disabled={isLoading || disabled}
      {...otherProps}
      onClick={callback}
    >
      {children}
    </Button>
  );
};

export default UIButton;

// export {  UIFilterButton };

UIButton.propTypes = {
  sx: PropTypes.object,
  sans: PropTypes.bool,
  size: PropTypes.string,
  rounded: PropTypes.bool,
  children: PropTypes.any,
  isLoading: PropTypes.bool,
  startIcon: PropTypes.node,
  variant: PropTypes.string,
  btncolor: PropTypes.string,
};
