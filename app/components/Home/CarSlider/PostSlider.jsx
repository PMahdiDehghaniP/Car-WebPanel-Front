import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useRef, useEffect, useState } from 'react';
import { perfectCentering } from '@/app/constants/Styles';
import InstagramPostCard from '../../PostCard';

const PostSlider = ({ topPostsData, onLoadMore }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
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

  const handleSlideChange = (swiper) => {
    if (
      swiper.slides.length - swiper.activeIndex <= 3 &&
      topPostsData?.length
    ) {
      onLoadMore();
    }
  };

  const handleTransitionEnd = (swiper) => {
    if (swiper.isEnd && !swiper.params.loop && topPostsData?.length) {
      onLoadMore();
    }
  };

  return (
    <Box
      sx={{
        width: '90%',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'center' : 'center',
        justifyContent: isMobile ? 'center' : 'space-between',
        gap: '1rem',
        zIndex: 999,
        position: 'relative'
      }}
    >
      {!isMobile && (
        <>
          <Box
            component="button"
            sx={{
              backgroundColor: theme.palette?.carSlider?.sliderButtonBgColor,
              border: `1px solid ${theme.palette?.carSlider?.borderColor}`,
              ...perfectCentering,
              borderRadius: '100%',
              width: '4rem',
              height: '4rem',
              cursor: 'pointer'
            }}
            ref={prevRef}
          >
            <ArrowForwardIos
              sx={{ color: theme.palette?.carSlider?.iconColor }}
            />
          </Box>
        </>
      )}

      <Box
        sx={{
          width: isMobile ? '100%' : 'calc(100% - 12rem)',
          position: 'relative',
          order: isMobile ? 1 : 2
        }}
      >
        <Swiper
          spaceBetween={20}
          loop
          modules={[Navigation, Autoplay, Pagination]}
          onSwiper={setSwiperInstance}
          onSlideChange={handleSlideChange}
          onTransitionEnd={handleTransitionEnd}
          autoplay={{ delay: 2500 }}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current
          }}
          style={{
            width: '100%'
          }}
        >
          {topPostsData.map((post, index) => (
            <SwiperSlide key={index} style={{ ...perfectCentering }}>
              <InstagramPostCard post={post} />
            </SwiperSlide>
          ))}
        </Swiper>

        {isMobile && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              mt: 2,
              order: 2
            }}
          >
            <Box
              component="button"
              onClick={() => {
                if (swiperInstance) {
                  swiperInstance.slideNext();
                }
              }}
              sx={{
                backgroundColor: theme.palette?.carSlider?.sliderButtonBgColor,
                border: `1px solid ${theme.palette?.carSlider?.borderColor}`,
                ...perfectCentering,
                borderRadius: '100%',
                width: '3rem',
                height: '3rem',
                cursor: 'pointer',
                flexShrink: 0
              }}
            >
              <ArrowForwardIos
                sx={{
                  color: theme.palette?.carSlider?.iconColor,
                  fontSize: '1rem'
                }}
              />
            </Box>
            <Box
              component="button"
              onClick={() => {
                if (swiperInstance) {
                  swiperInstance.slidePrev();
                }
              }}
              sx={{
                backgroundColor: theme.palette?.carSlider?.sliderButtonBgColor,
                border: `1px solid ${theme.palette?.carSlider?.borderColor}`,
                ...perfectCentering,
                borderRadius: '100%',
                width: '3rem',
                height: '3rem',
                cursor: 'pointer',
                flexShrink: 0
              }}
            >
              <ArrowBackIos
                sx={{
                  color: theme.palette?.carSlider?.iconColor,
                  fontSize: '1rem'
                }}
              />
            </Box>
          </Box>
        )}
      </Box>

      {!isMobile && (
        <Box
          component="button"
          sx={{
            backgroundColor: theme.palette?.carSlider?.sliderButtonBgColor,
            border: `1px solid ${theme.palette?.carSlider?.borderColor}`,
            ...perfectCentering,
            borderRadius: '100%',
            width: '4rem',
            height: '4rem',
            cursor: 'pointer',
            flexShrink: 0,
            order: 3
          }}
          ref={nextRef}
        >
          <ArrowBackIos sx={{ color: theme.palette?.carSlider?.iconColor }} />
        </Box>
      )}
    </Box>
  );
};

export default PostSlider;
