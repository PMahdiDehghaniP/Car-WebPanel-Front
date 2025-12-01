'use client';

import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import SearchBar from '@/app/components/Home/SearchBar';
import CarCard from '@/app/components/Home/CarSlider/CarCard';
import FilterButton from '@/app/components/FilterButton';
import GarajinoPagination from '@/app/components/GarajinoPagination';
import AddCarCard from '../../AddCarCard';

const carsData = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  carName: 'خودرو',
  description: 'توضیح کوتاه خودرو',
  carInformation: {
    maxSpeed: '220 km/h',
    gasType: 'بنزین',
    gearboxType: 'اتوماتیک'
  },
  price: `${50 + i} $`,
  imageSrc: '/forgotPasswordImage.png',
  imageAlt: `Car ${i + 1}`
}));

const chunk = (arr, size) => {
  const res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
};

const CategoryPage = () => {
  const isMobile = useMediaQuery('(max-width:900px)');
  const { theme } = useSelector((state) => state.theme);

  const bgPage = theme === 'dark' ? '#20263C' : '#fff';
  const bgCard = theme === 'dark' ? '#2E3B55' : '#fff';
  const textColor = theme === 'dark' ? '#fff' : '#222';
  const borderColor =
    theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.04)';
  const shadow =
    theme === 'dark'
      ? '0 2px 4px rgba(0,0,0,0.5)'
      : '0 2px 4px rgba(0,0,0,0.15)';

  const anchorRef = useRef(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleToggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
  };
  const handleCloseFilter = () => setIsFilterOpen(false);
  const handleSelectFilter = (value) => {
    setIsFilterOpen(false);
  };

  const [page, setPage] = useState(1);
  const itemsPerPage = isMobile ? 8 : 16;

  const pages = useMemo(() => {
    const items = [...carsData, { __addCard: true }];
    return chunk(items, itemsPerPage);
  }, [carsData, itemsPerPage]);

  const totalPages = Math.max(1, pages.length);
  useEffect(() => {
    if (page > totalPages) setPage(Math.max(1, totalPages));
  }, [isMobile, totalPages, page]);

  const handlePageChange = (_, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const visibleCombined = pages[page - 1] || [];
  const paginationPlaceholderItems =
    pages.length > 0 ? new Array(pages.length * 20).fill(null) : [];
  const cardMaxWidth = isMobile ? 170 : 330;
  const cardMinHeight = isMobile ? 320 : 430;

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        padding: isMobile ? '1rem' : '3rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
        backgroundColor: bgPage,
        transition: 'background-color 0.3s'
      }}
    >
      {!isMobile && (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 5,
            mr: '10rem',
            transition: 'all 0.3s ease-in-out'
          }}
        >
          <FilterButton
            isOpen={isFilterOpen}
            anchorRef={anchorRef}
            handleToggle={handleToggleFilter}
            handleSelect={handleSelectFilter}
            handleClose={handleCloseFilter}
          />
          <Box sx={{ flex: 1, minWidth: '100%' }}>
            <SearchBar />
          </Box>
        </Box>
      )}

      {isMobile && (
        <Box sx={{ width: '100%' }}>
          <SearchBar />
        </Box>
      )}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          textAlign: 'center',
          marginTop: '1rem',
          marginBottom: '1rem',
          color: textColor
        }}
      >
        لیست خرید
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: isMobile
            ? 'repeat(2, minmax(0, 1fr))'
            : 'repeat(4, minmax(0, 1fr))',
          gap: isMobile ? '0.75rem' : '1.25rem',
          width: '100%',
          justifyContent: 'center',
          justifyItems: 'center',
          direction: 'ltr'
        }}
      >
        {visibleCombined.map((item, idx) => {
          return (
            <Box
              key={(item && item.id) ?? `wrap-${idx}`}
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                boxSizing: 'border-box'
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  maxWidth: `${cardMaxWidth}px`,
                  minHeight: `${cardMinHeight}px`,
                  display: 'flex',
                  alignItems: 'stretch',
                  boxSizing: 'border-box'
                }}
              >
                {item && item.__addCard ? (
                  <AddCarCard
                    key={`add-car-card-${(page - 1) * itemsPerPage + idx}`}
                    isMobile={isMobile}
                    textColor={textColor}
                    borderColor={borderColor}
                    shadow={shadow}
                    bgCard={bgCard}
                    maxWidth={cardMaxWidth}
                    minHeight={cardMinHeight}
                    sxForRoot={{ height: '100%' }}
                  />
                ) : (
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      '& > *': {
                        width: '100% !important',
                        height: '100% !important',
                        maxWidth: '100% !important',
                        maxHeight: '100% !important',
                        boxSizing: 'border-box'
                      }
                    }}
                  >
                    <CarCard
                      key={item.id}
                      imageSrc={item.imageSrc}
                      imageAlt={item.imageAlt}
                      carName={item.carName}
                      description={item.description}
                      carInformation={item.carInformation}
                      price={item.price}
                      onClick={() => alert(`مشاهده جزئیات ${item.carName}`)}
                      maxWidth={cardMaxWidth}
                      minHeight={cardMinHeight}
                      bgCard={bgCard}
                      textColor={textColor}
                      borderColor={borderColor}
                      shadow={shadow}
                    />
                  </Box>
                )}
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box
        sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 2 }}
      >
        <GarajinoPagination
          page={page}
          handlePageChange={handlePageChange}
          items={paginationPlaceholderItems}
        />
      </Box>
    </Box>
  );
};

export default CategoryPage;
