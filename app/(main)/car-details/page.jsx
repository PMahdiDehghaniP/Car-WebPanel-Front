import { Box } from '@mui/material';
import GallarySlider from './components/GallarySlider';
import CarInformation from './components/CarInformation';
import MoneyCostSection from './components/MoneyCostSection';
import RatingDistribution from './components/RatingDistribution';

const CarDetailsPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
      }}
    >
      <GallarySlider />
      <CarInformation />
      <MoneyCostSection />
      <RatingDistribution />
    </Box>
  );
};
export default CarDetailsPage;
