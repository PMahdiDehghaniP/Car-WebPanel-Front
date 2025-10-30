'use server';
import { Box } from '@mui/material';
import LogoCarsCard from './components/Home/LogoCarsCard';
import CarSlider from './components/CarSlider/CarSlider';
import FeatureCardsSection from './components/Home/FeatureCardsSection';
import AchivementSection from './components/Home/Achivement';

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        minHeight: '100vh',
        alignItems: 'center',
        gap: '2rem',
        padding: '1rem',
        boxSizing: 'border-box',
        overflowX: 'hidden'
      }}
    >
      <LogoCarsCard />
      <CarSlider />
      <FeatureCardsSection />
      <AchivementSection />
    </Box>
  );
};

export default Home;
