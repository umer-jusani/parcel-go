import React from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { DeleteIcon } from "@/assets";

const ImagePreview = ({
  imgUrl,
  width = 100,
  height = 100,
  handleDelete = () => {},
  fileType,
}) => {
  const isPDF = fileType === "application/pdf";

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: isPDF ? 250 : width,
          height: isPDF ? 300 : height,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid #e0e0e0",
          borderRadius: 1,
          backgroundColor: isPDF ? "#fff" : "transparent",
          overflow: "hidden",
        }}
      >
        {isPDF ? (
          <object
            data={imgUrl}
            type="application/pdf"
            width="100%"
            height="100%"
            style={{
              border: "none",
            }}
          >
            <iframe
              src={imgUrl}
              width="100%"
              height="100%"
              style={{
                border: "none",
              }}
            >
              <p>
                Your browser does not support PDFs. Please download the PDF to
                view it.
              </p>
            </iframe>
          </object>
        ) : (
          <Stack  gap={5}>
            <Image
              src={imgUrl}
              alt="Preview"
              width={100}
              height={100}
              style={{ borderRadius: 8, objectFit: "cover" }}
            />
            <Typography>nehal</Typography>
          </Stack>
        )}
        <IconButton
          size="small"
          onClick={() => handleDelete()}
          sx={{
            position: "absolute",
            top: 10,
            left: 8,
            background: "rgba(0,0,0,0.6)",
            color: "white",
            "&:hover": {
              background: "rgba(0,0,0,0.8)",
            },
            zIndex: 1000,
          }}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Box>
    </>
  );
};

export default ImagePreview;
