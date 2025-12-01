'use client';

import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import AboutUsHeader from './components/AboutUsHeader';
import WhoAreWeCard from './components/WhoAreWeCard';
import MissionsCard from './components/MissionCard';
import WhatWeOfferCard from './components/WhatWeOfferCard';
import TeamCard from './components/TeamCard';

const AboutUsPage = ({ isMobile: isMobileProp }) => {
  const mq = useMediaQuery('(max-width:900px)');
  const isMobile = typeof isMobileProp === 'boolean' ? isMobileProp : mq;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: isMobile ? 6 : 12
      }}
    >
      <AboutUsHeader isMobile={isMobile} />
      <WhoAreWeCard isMobile={isMobile} />
      <MissionsCard isMobile={isMobile} />
      <WhatWeOfferCard isMobile={isMobile} />
      <TeamCard isMobile={isMobile} />
    </Box>
  );
};

export default AboutUsPage;
