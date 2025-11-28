import React from 'react'
import { Box, Typography } from '@mui/material';
import AboutUsHeader from './components/AboutUsHeader';
import WhoAreWeCard from './components/WhoAreWeCard';
const AboutUsPage = () => {
  return (
    <Box>
        <AboutUsHeader/>
        <WhoAreWeCard />
    </Box>
  )
}

export default AboutUsPage