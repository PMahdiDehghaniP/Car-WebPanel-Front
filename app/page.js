'use server';
import { Box } from '@mui/material';
import LogoCarsCard from './components/Home/LogoCarsCard';
import CarSlider from './components/CarSlider/CarSlider';
import FeatureCardsSection from './components/Home/FeatureCardsSection';
import AchivementSection from './components/Home/Achivement';
import Footer from './components/Home/Footer';
import HomePageHeader from './components/Home/HomePageHeader';

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        minHeight: '100vh',
        alignItems: 'center',
        boxSizing: 'border-box',
        overflowX: 'hidden',
        position: 'relative'
      }}
    >
      <HomePageHeader />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
          gap: '2rem',
          paddingX: { md: '3rem', sm: '2rem', xs: '1rem' },
          marginTop: '-5rem',
          zIndex: 900,
          overflow: 'hidden'
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
