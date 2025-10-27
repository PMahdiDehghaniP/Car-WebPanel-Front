'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import CarCard from './CarCard';
import { Box, IconButton, useTheme } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useRef, useEffect, useState } from 'react';
import { perfectCentering } from '@/app/constants/Styles';

const cars = Array(10).fill({
  description: 'توضیحات تست',
  price: 2000,
  carName: 'Peugeot 206',
  imageAlt: '206',
  carInformation: {
    gearboxType: 'Automatic',
    gasType: 'Gasoline',
    maxSpeed: 200
  },
  imageSrc: '/loginPageImage.png'
});

const CarSlider = () => {
  const theme = useTheme();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

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
    <Box width="100%" display="flex" flexDirection="column" alignItems="end">
      <Swiper
        spaceBetween={20}
        loop
        modules={[Navigation, Autoplay]}
        onSwiper={setSwiperInstance}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
          1200: { slidesPerView: 3 },
          1400: { slidesPerView: 4 }
        }}
        style={{ width: '100%', paddingLeft: '1rem', paddingRight: '1rem' }}
      >
        {cars.map((car, index) => (
          <SwiperSlide key={index}>
            <CarCard {...car} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Box display="flex" justifyContent="end" gap={2} mt={2}>
        <IconButton
          sx={{
            backgroundColor: theme.palette?.carSlider?.sliderButtonBgColor,
            border: `1px solid ${theme.palette?.carSlider?.borderColor}`,
            ...perfectCentering
          }}
          ref={nextRef}
        >
          <ArrowForwardIos
            sx={{ color: theme.palette?.carSlider?.iconColor }}
          />
        </IconButton>
        <IconButton
          sx={{
            backgroundColor: theme.palette?.carSlider?.sliderButtonBgColor,
            border: `1px solid ${theme.palette?.carSlider?.borderColor}`,
            ...perfectCentering
          }}
          ref={prevRef}
        >
          <ArrowBackIos sx={{ color: theme.palette?.carSlider?.iconColor }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CarSlider;
