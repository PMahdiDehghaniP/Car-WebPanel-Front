'use client';

import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import SearchBar from '@/app/components/Home/SearchBar';
import GaragePage from '../garage/page';
import GarajinoPagination from '@/app/components/GarajinoPagination';
import EventBox from './components/EventBox';

const EventsPage = () => {
  const isMobile = useMediaQuery('(max-width:900px)');
  const { theme } = useSelector((state) => state.theme);

  const bgPage = theme === 'dark' ? '#20263C' : '#FFFFFF';
  const bgCard = theme === 'dark' ? '#272F4E' : '#F4F4F4';
  const textColor = theme === 'dark' ? '#fff' : '#222';
  const borderColor =
    theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.04)';
  const shadow =
    theme === 'dark'
      ? '0 2px 4px rgba(0,0,0,0.5)'
      : '0 2px 4px rgba(0,0,0,0.15)';

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        padding: isMobile ? '1rem' : '3rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10rem',
        backgroundColor: bgPage,
        transition: 'background-color 0.3s'
      }}
    >
      <SearchBar />
      <EventBox />
      <GarajinoPagination />
    </Box>
  );
};

export default EventsPage;
