import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// Import custom styles
import './styles.css';

// import required modules
import { EffectCube, Pagination } from 'swiper/modules';
import { CardMedia, Box } from '@mui/material';
import ModalWrapper from '@/shared/pure-components/ModalWrapper/ModalWrapper';

const ImageSlider = ({ images = [], height = 400, width = '100%' }) => {
  // State for modal control
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  // Default images if none provided
  console.log(images, 'images')
  const defaultImages = [
    'https://swiperjs.com/demos/images/nature-1.jpg',
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    'https://swiperjs.com/demos/images/nature-4.jpg'
  ];

  const imageList = images.length > 0 ? images : defaultImages;

  // Handle image click to open modal
  const handleImageClick = (image) => {
    if (image && image.trim() !== '') {
      setSelectedImage(image);
      setModalOpen(true);
    }
  };

  // Handle modal close
  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedImage('');
  };

  return (
    <>
      <div style={{ width, height }}>
        <Swiper
          effect={'cube'}
          grabCursor={true}
          cubeEffect={{
            shadow: false,
            slideShadows: false,
            shadowOffset: 0,
            shadowScale: 0,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="mySwiper"
          style={{ width: '100%', height: '100%' }}
        >
          {imageList.map((image, index) => (
            <SwiperSlide key={index}>
              <CardMedia 
                image={image} 
                alt={`Slide ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  cursor: 'pointer' // Add pointer cursor to indicate clickable
                }}
                onClick={() => handleImageClick(image)} // Make image clickable
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Image Modal */}
      <ModalWrapper
        open={modalOpen}
        onClose={handleModalClose}
        // title="Image Preview"
        size="md"
        // showCloseIcon={true}
        dialogContentSx={{ 
          // padding: '20px',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center'
        }}
      >
        {selectedImage && (
          <Box
            component="img"
            src={selectedImage}
            alt="Full size image"
            sx={{
              maxWidth: '100%',
              maxHeight: '70vh',
              objectFit: 'contain',
              borderRadius: '8px'
            }}
          />
        )}
      </ModalWrapper>
    </>
  );
};

export default ImageSlider;
