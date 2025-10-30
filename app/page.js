'use server';
import { Box } from '@mui/material';
import LogoCarsCard from './components/Home/LogoCarsCard';
import CarSlider from './components/CarSlider/CarSlider';
import FeatureCardsSection from './components/Home/FeatureCardsSection';
import AchivementSection from './components/Home/Achivement';
import Footer from './components/Home/Footer';

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
        boxSizing: 'border-box',
        overflowX: 'hidden'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          minHeight: '100%',
          alignItems: 'center',
          gap: '2rem',
          paddingX: { md: '3rem', sm: '2rem', xs: '1rem' },
          overflowX: 'hidden'
        }}
      >
        <LogoCarsCard />
        <CarSlider />
        <FeatureCardsSection />
        <AchivementSection />
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
