import { Box, Skeleton } from "@mui/material";

const UIFileUploaderSkeleton = ({ height = "11em" }) => {
  return (
    <Box m={0}>
      <Skeleton variant="text" width={200} height={40} />
      <Skeleton
        variant="rectangular"
        width="100%"
        height={height}
        sx={{ borderRadius: 1, mt: 1 }}
      />
      <Box mt={2} display="flex" flexWrap="wrap" gap={2}>
        {[1, 2, 3].map((item) => (
          <Box
            key={item}
            display="flex"
            flexDirection="column"
            alignItems="center"
            position="relative"
          >
            <Skeleton
              variant="rectangular"
              width={100}
              height={100}
              sx={{ borderRadius: 1 }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default UIFileUploaderSkeleton;