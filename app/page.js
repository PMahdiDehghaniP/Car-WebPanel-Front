'use server';

import { Box } from '@mui/material';
import LogoCarsCard from './components/Home/LogoCarsCard';
import CarSlider from './components/CarSlider/CarSlider';
import FeatureCardsSection from './components/Home/FeatureCardsSection';

const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      height="100%"
      alignItems="center"
      gap="0.5rem"
      paddingRight="1rem"
      paddingLeft="1rem"
    >
      <LogoCarsCard />
      <CarSlider />
      <FeatureCardsSection />
    </Box>
  );
};

export default Home;
