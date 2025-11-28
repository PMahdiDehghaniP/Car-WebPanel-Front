import React from 'react'
import { Box, Typography } from '@mui/material';
import AboutUsHeader from './components/AboutUsHeader';
import WhoAreWeCard from './components/WhoAreWeCard';
import MissionsCard from './components/MissionCard';
const AboutUsPage = () => {
  return (
    <Box>
        <AboutUsHeader/>
        <WhoAreWeCard />
        <MissionsCard />
    </Box>
  )
}

export default AboutUsPage