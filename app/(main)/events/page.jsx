'use client';

import React, { useRef, useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import SearchBar from "@/app/components/Home/SearchBar";
import GarajinoPagination from "@/app/components/GarajinoPagination";
import EventBox from "./components/EventBox";
import FilterButton from "@/app/components/FilterButton";

const EventsPage = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const { theme } = useSelector((state) => state.theme); 
  const bgPage = theme === "dark" ? "#20263C" : "#FFFFFF";
  const anchorRef = useRef(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleToggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
  };
  const handleCloseFilter = () => setIsFilterOpen(false);
  const handleSelectFilter = (value) => {
    setIsFilterOpen(false);
  };

  const defaultEvents = Array.from({ length: 15 }, (_, index) => ({
    id: index,
    title: 'رویداد سبزتازان' ,
    description: 'این رویداد برای انتخاب بهترین ماشینِ سبز رنگ برگزار شده. میتونی هم جزو برنده‌ها باشی یا انتخاب برنده سهمت باشه!',
    time: `${Math.floor(Math.random() * 30) + 1} days ${Math.floor(Math.random() * 24)} hours`,
    image: '/GreenEvent.jpg'
  }));
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        padding: isMobile ? "1rem" : "3rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5rem",
        backgroundColor: bgPage,
        transition: "background-color 0.3s"
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
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexDirection: "column",
            gap: 5
          }}
        >
          {defaultEvents.map((ev ) => (
            <EventBox
            key={ev.id}
            isMobile={isMobile}
            title={ev.title}
            description={ev.description}
            time={ev.time}
            image={ev.image}
          />
          ))}
        </Box>
        <GarajinoPagination />
    </Box>
  );
}

export default EventsPage