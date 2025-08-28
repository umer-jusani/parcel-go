import DescriptionIcon from '@mui/icons-material/Description';
import { Box, Typography } from '@mui/material';

const Attachment = () => {
  // const [isDragging, setIsDragging] = useState(false);
  // const [selectedFile, setSelectedFile] = useState(null);

  // const handleDragEnter = (e) => {
  //   e.preventDefault();
  //   setIsDragging(true);
  // };

  // const handleDragLeave = (e) => {
  //   e.preventDefault();
  //   setIsDragging(false);
  // };

  // const handleDrop = (e) => {
  //   e.preventDefault();
  //   setIsDragging(false);
  //   const files = e.dataTransfer.files;
  //   if (files.length > 0) {
  //     handleFileSelect(files[0]);
  //   }
  // };

  // const handleFileSelect = (file) => {
  //   if (file) {
  //     setSelectedFile(file);
  //     if (onFileSelect) {
  //       onFileSelect(file);
  //     }
  //   }
  // };

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: '100%',
        left: 0,
        right: 0,
        mb: 1,
        // backgroundColor: 'background.paper',
        borderRadius: 1,
        p: 2,
      }}
    >
      <Box
        // onDragEnter={handleDragEnter}
        // onDragOver={(e) => e.preventDefault()}
        // onDragLeave={handleDragLeave}
        // onDrop={handleDrop}
        sx={{
          border: '2px dashed',
          // borderColor: isDragging ? 'primary.main' : 'grey.300',
          borderColor: "grey.300",
          borderRadius: 1,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundColor: isDragging ? 'action.hover' : 'background.paper',
          // backgroundColor: 'background.paper',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          minHeight: '200px',
        }}
      >
        <input
          id="file-input"
          type="file"
          accept="image/*,.pdf,.doc,.docx"
          style={{ display: 'none' }}
        />
        <DescriptionIcon sx={{ fontSize: 48, color: 'grey.400', mb: 2 }} />
        <Typography variant="body1" color="grey.600" textAlign="center">
          Upload documents
        </Typography>
        <Typography variant="body2" color="grey.500" textAlign="center">
          from library
        </Typography>
        {/* {selectedFile && (
          <Box mt={2}>
            <Typography variant="body2" color="primary">
              Selected: {selectedFile.name}
            </Typography>
          </Box>
        )} */}
      </Box>
    </Box>
  );
};

export default Attachment; 