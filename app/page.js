'use server';

import { Box } from '@mui/material';
import LogoCarsCard from './components/Home/LogoCarsCard';
import CarSlider from './components/CarSlider/CarSlider';

const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100vw"
      height="100vh"
      alignItems="center"
      gap="0.5rem"
      paddingRight="1rem"
      paddingLeft="1rem"
    >
      <LogoCarsCard />
      <CarSlider />
    </Box>
  );
};

export default Home;
