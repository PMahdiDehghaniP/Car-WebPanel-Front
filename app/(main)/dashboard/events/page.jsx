'use client';

import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import SearchBar from '@/app/components/Home/SearchBar';
import GarajinoPagination from '@/app/components/GarajinoPagination';
import EventBox from './components/EventBox';
import FilterButton from '@/app/components/FilterButton';

const EventsPage = () => {
  const isMobile = useMediaQuery('(max-width:900px)');
  const { theme } = useSelector((state) => state.theme || { theme: 'light' });
  const bgPage = theme === 'dark' ? '#20263C' : '#FFFFFF';
  const anchorRef = useRef(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleToggleFilter = () => setIsFilterOpen((prev) => !prev);
  const handleCloseFilter = () => setIsFilterOpen(false);
  const handleSelectFilter = (value) => setIsFilterOpen(false);

  const defaultEvents = useMemo(
    () =>
      Array.from({ length: 15 }, (_, index) => ({
        id: index,
        EventName: 'رویداد سبزتازان',
        description:
          'این رویداد برای انتخاب بهترین ماشینِ سبز رنگ برگزار شده. میتونی هم جزو برنده‌ها باشی یا انتخاب برنده سهمت باشه!',
        time: `${Math.floor(Math.random() * 30) + 1} days ${Math.floor(Math.random() * 24)} hours`,
        image: '/GreenEvent.jpg'
      })),
    []
  );

  const itemsPerPage = isMobile ? 7 : 4;
  const [page, setPage] = useState(1);
  useEffect(() => {
    setPage(1);
  }, [itemsPerPage]);
  const totalPages = Math.max(
    1,
    Math.ceil(defaultEvents.length / itemsPerPage)
  );
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedEvents = defaultEvents.slice(start, end);
  const syntheticItemsForPager = useMemo(
    () => Array.from({ length: totalPages * 20 }),
    [totalPages]
  );

  const handlePageChange = (_, value) => {
    const v = Math.max(1, Math.min(value, totalPages));
    setPage(v);
  };

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        padding: isMobile ? '1rem' : '3rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5rem',
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
      <Box
        id="events-list"
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          flexDirection: 'column',
          gap: 5
        }}
      >
        {paginatedEvents.map((ev) => (
          <EventBox
            key={ev.id}
            id={ev.id}
            isMobile={isMobile}
            isParticularPage={false}
            EventName={ev.EventName}
            description={ev.description}
            time={ev.time}
            image={ev.image}
          />
        ))}
      </Box>
      <GarajinoPagination
        page={page}
        handlePageChange={handlePageChange}
        items={syntheticItemsForPager}
      />
    </Box>
  );
};

export default EventsPage;
