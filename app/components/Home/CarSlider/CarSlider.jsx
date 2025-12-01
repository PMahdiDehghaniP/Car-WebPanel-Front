'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import CarCard from './CarCard';
import { Box, CircularProgress, Tab, Tabs, useTheme } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useRef, useEffect, useState } from 'react';
import { perfectCentering } from '@/app/constants/Styles';

const CarSlider = ({
  carsSortType,
  handleCarsSortTypeChange,
  carsData,
  getBaseCarsLoading,
  handleCarSliderPageChange,
  hasNext
}) => {
  const theme = useTheme();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const loadingRef = useRef(false);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  const handleSlideChange = (swiper) => {
    const realIndex = swiper.realIndex;
    const total = carsData.length;

    if (total - realIndex <= 3 && hasNext) {
      if (loadingRef.current) return;
      loadingRef.current = true;
      handleCarSliderPageChange();
      setTimeout(() => {
        loadingRef.current = false;
      }, 800);
    }
  };

  return getBaseCarsLoading ? (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="400px"
    >
      <CircularProgress size={64} />
    </Box>
  ) : (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="end"
      gap="1rem"
    >
      <Tabs
        sx={{ alignSelf: 'center', marginBottom: '1rem' }}
        value={carsSortType}
        onChange={(event, newValue) => handleCarsSortTypeChange(newValue)}
      >
        <Tab value="BY_RATING" label="منتخب" />
        <Tab value="NEW" label="جدید" />
        <Tab value="NONE" label="همه" />
      </Tabs>

      <Swiper
        spaceBetween={20}
        loop
        modules={[Navigation, Autoplay]}
        onSwiper={setSwiperInstance}
        onSlideChange={handleSlideChange}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
          1500: { slidesPerView: 4 }
        }}
        style={{
          width: '100%',
          paddingLeft: '1rem',
          paddingRight: '1rem'
        }}
      >
        {carsData.map((car, index) => (
          <SwiperSlide key={index} style={{ ...perfectCentering }}>
            <CarCard
              theme={theme}
              carName={car?.name}
              price={car?.price}
              description={car?.description}
              carId={car?.id}
              imageAlt={car?.name?.slice(0, 1)?.toUpperCase()}
              imageSrc={car?.pictureUrl}
              carInformation={{
                maxSpeed: car?.topSpeedKmh,
                gasType: car?.fuel,
                gearboxType: car?.gearbox
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Box display="flex" justifyContent="end" gap={2}>
        <Box
          component="button"
          sx={{
            backgroundColor: theme.palette?.carSlider?.sliderButtonBgColor,
            border: `1px solid ${theme.palette?.carSlider?.borderColor}`,
            ...perfectCentering,
            borderRadius: '100%',
            width: '3rem',
            height: '3rem'
          }}
          ref={nextRef}
        >
          <ArrowForwardIos
            sx={{ color: theme.palette?.carSlider?.iconColor }}
          />
        </Box>

        <Box
          component="button"
          sx={{
            backgroundColor: theme.palette?.carSlider?.sliderButtonBgColor,
            border: `1px solid ${theme.palette?.carSlider?.borderColor}`,
            ...perfectCentering,
            borderRadius: '100%',
            width: '3rem',
            height: '3rem'
          }}
          ref={prevRef}
        >
          <ArrowBackIos sx={{ color: theme.palette?.carSlider?.iconColor }} />
        </Box>
      </Box>
    </Box>
  );
};

export default CarSlider;
