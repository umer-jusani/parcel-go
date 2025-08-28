import { Backdrop, Box, CircularProgress } from '@mui/material';

function Loader() {
    return (
        <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex", justifyContent: "center", alignItems: "center", zIndex: 10000 }}>
            <CircularProgress color="primary" size={50} />
        </Box>
    );
}

export default Loader;
