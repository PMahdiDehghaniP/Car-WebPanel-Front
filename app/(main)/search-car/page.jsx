'use client';

import CarCard from '@/app/components/Home/CarSlider/CarCard';
import SearchBar from '@/app/components/Home/SearchBar';
import { Box, useTheme } from '@mui/material';
import { useRef, useState } from 'react';
import FilterButton from '@/app/components/FilterButton';
import GarajinoPagination from '@/app/components/GarajinoPagination';

const SearchCarPage = () => {
  const [page, setPage] = useState(1);
  const [openFilterList, setOpenFilterList] = useState(false);
  const handleToggle = () => setOpenFilterList(!openFilterList);
  const handleSelectFilter = () => {
    setOpenFilterList(false);
  };
  const anchorEl = useRef();
  const theme = useTheme();
  const cars = Array(100).fill({
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
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '3rem',
        width: '100%'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          gap: '1.5rem',
          justifyContent: 'center'
        }}
      >
        <FilterButton
          isOpen={openFilterList}
          anchorRef={anchorEl}
          handleToggle={handleToggle}
          handleSelect={handleSelectFilter}
          handleClose={() => setOpenFilterList(false)}
        />
        <SearchBar />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          maxHeight: '600px',
          overflowY: 'auto'
        }}
      >
        {cars.slice((page - 1) * 20, page * 20).map((car, index) => (
          <CarCard key={index} theme={theme} {...car} />
        ))}
      </Box>
      <GarajinoPagination
        handlePageChange={handlePageChange}
        page={page}
        items={cars}
      />
    </Box>
  );
};
export default SearchCarPage;
