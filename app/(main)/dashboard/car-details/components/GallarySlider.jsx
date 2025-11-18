'use client';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { perfectCentering } from '@/app/constants/Styles';
import 'swiper/css';
import 'swiper/css/navigation';

const GallarySlider = () => {
  const cars = Array(10).fill('/blueAmg.png');
  const theme = useTheme();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:900px)');
  const sliderHeight = isMobile ? '50vh' : isTablet ? '65vh' : '85vh';

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <Box sx={{ position: 'relative', width: '100%', height: sliderHeight }}>
      <Swiper
        spaceBetween={0}
        loop
        modules={[Navigation, Autoplay]}
        onSwiper={setSwiperInstance}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={1}
        style={{ width: '100%', height: '100%' }}
      >
        {cars.map((car, index) => (
          <SwiperSlide key={index} style={{ ...perfectCentering }}>
            <Image
              src={car}
              alt={`car-${index}`}
              fill
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Box
        sx={{
          position: 'absolute',
          bottom: '20px',
          right: '30px',
          display: 'flex',
          gap: 2,
          zIndex: 10
        }}
      >
        <Box
          component="button"
          ref={nextRef}
          sx={{
            backgroundColor: theme.palette?.carSlider?.sliderButtonBgColor,
            border: `1px solid ${theme.palette?.carSlider?.borderColor}`,
            ...perfectCentering,
            borderRadius: '50%',
            width: '3rem',
            height: '3rem',
            cursor: 'pointer'
          }}
        >
          <ArrowForwardIos
            sx={{ color: theme.palette?.carSlider?.iconColor }}
          />
        </Box>
        <Box
          component="button"
          ref={prevRef}
          sx={{
            backgroundColor: theme.palette?.carSlider?.sliderButtonBgColor,
            border: `1px solid ${theme.palette?.carSlider?.borderColor}`,
            ...perfectCentering,
            borderRadius: '50%',
            width: '3rem',
            height: '3rem',
            cursor: 'pointer'
          }}
        >
          <ArrowBackIos sx={{ color: theme.palette?.carSlider?.iconColor }} />
        </Box>
      </Box>
    </Box>
  );
};

export default GallarySlider;
