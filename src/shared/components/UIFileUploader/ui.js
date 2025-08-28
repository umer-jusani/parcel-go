import { Box, alpha, styled } from '@mui/material';
// import { StyledCard } from 'components/card/ui';

export const StyledCardDropzone = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isDragActive',
})(({ theme, isDragActive }) => ({
  width: '100%',
  display: 'flex',
  minHeight: "16rem",
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  // border: `solid 2px ${theme.palette.border.main}`,
  border: `2px solid ${theme.palette.divider}`,
  backgroundColor: 'rgb(191, 191, 194)',
  borderStyle: 'dashed',
  borderRadius: '0.5rem',
  transition: '0.2s',

  '&:hover': {
    // borderColor: theme.palette.border.dark,
    borderColor: "gray",
  },

  ...(isDragActive
    ? {
        backgroundColor: theme.palette.background["100"],
      }
    : {}),
}));
