import React from 'react'
import { Box, Typography } from '@mui/material';
import AboutUsHeader from './components/AboutUsHeader';
import WhoAreWeCard from './components/WhoAreWeCard';
import MissionsCard from './components/MissionCard';
import WhatWeOfferCard from './components/WhatWeOfferCard';
const AboutUsPage = () => {
  return (
    <Box>
        <AboutUsHeader/>
        <WhoAreWeCard />
        <MissionsCard />
        <WhatWeOfferCard />
    </Box>
  )
}

export default AboutUsPage