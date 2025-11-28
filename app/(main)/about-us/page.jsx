import React from 'react'
import { Box, Typography } from '@mui/material';
import AboutUsHeader from './components/AboutUsHeader';
import WhoAreWeCard from './components/WhoAreWeCard';
import MissionsCard from './components/MissionCard';
import WhatWeOfferCard from './components/WhatWeOfferCard';
import TeamCard from './components/TeamCard';
const AboutUsPage = () => {
  return (
    <Box 
        sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12
        }}
    >
        <AboutUsHeader/>
        <WhoAreWeCard />
        <MissionsCard />
        <WhatWeOfferCard />
        <TeamCard />
    </Box>
  )
}
export default AboutUsPage