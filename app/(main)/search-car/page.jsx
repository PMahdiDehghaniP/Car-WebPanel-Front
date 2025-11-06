'use client';

import CarCard from '@/app/components/Home/CarSlider/CarCard';
import SearchBar from '@/app/components/Home/SearchBar';
import { BiSortDown } from 'react-icons/bi';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import {
  Box,
  IconButton,
  Pagination,
  PaginationItem,
  useTheme
} from '@mui/material';
import { useState } from 'react';

const SearchCarPage = () => {
  const [page, setPage] = useState(1);
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
          gap: '1rem',
          justifyContent: 'center'
        }}
      >
        <IconButton
          sx={{
            width: 75,
            height: 75,
            backgroundColor: '#ffffff',
            boxShadow: '0px 4px 4px 0px #00000040',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
              backgroundColor: '#ffffff'
            }
          }}
        >
          <Box
            sx={{
              width: 55,
              height: 55,
              borderRadius: '50%',
              backgroundColor: '#405FF2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <BiSortDown size={35} color="#fff" />
          </Box>
        </IconButton>

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
      <Pagination
        dir="ltr"
        size="large"
        page={page}
        color="primary"
        count={Math.ceil(cars.length / 20)}
        onChange={handlePageChange}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIos, next: ArrowForwardIos }}
            {...item}
          />
        )}
        shape="rounded"
        sx={{
          '& .MuiPaginationItem-root': {
            color: '#555',
            fontSize: '1.5rem',
            fontWeight: 600,
            width: '3rem',
            height: '3rem',
            borderRadius: '16px',
            border: '1px solid #ccc',
            transition: 'all 0.2s ease-in-out'
          },
          '& .MuiPaginationItem-root:hover': {
            backgroundColor: '#f5f5f5'
          },
          '& .MuiPaginationItem-root.Mui-selected': {
            color: '#1976D2',
            border: '1px solid #1976d2',
            backgroundColor: '#ffffff'
          },
          '& .MuiPaginationItem-root.Mui-selected:hover': {
            backgroundColor: '#ffffff'
          },
          '& .MuiPaginationItem-root.Mui-disabled': {
            backgroundColor: '#919EAB',
            color: '#C4CDD5'
          }
        }}
      />
    </Box>
  );
};
export default SearchCarPage;
