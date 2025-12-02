'use client' ;

import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import EventBox from '../../components/EventBox';
import { useSelector } from 'react-redux';
import EventPostCard from '../../components/EventPostCard';

export default function Page({ params }) {
  const isMobile = useMediaQuery("(max-width:900px)");
  const { theme } = useSelector((state) => state.theme || { theme: 'light' });
  const { id } = params;
  const sample = {
    image: '/GreenEvent.jpg',
    caption: 'ماشین بن تن باشه',
    likes: 233,
    avatars: ['/avatar1.jpg']
  };

  return (
    <Box>
      <EventBox
        isMobile={isMobile}
        isParticularPage={true}
      />
      <EventPostCard initialPost={sample}/>
    </Box>
  );
}
