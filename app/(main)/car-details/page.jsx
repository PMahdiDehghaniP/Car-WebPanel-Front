import { Box, Divider } from '@mui/material';
import GallarySlider from './components/GallarySlider';
import CarInformation from './components/CarInformation';
import MoneyCostSection from './components/MoneyCostSection';
import RatingDistribution from './components/RatingDistribution';
import CommentSection from './components/CommentSection';
import SubmitCommentSection from './components/SubmitCommentSection';

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
      <CommentSection />
      <Divider
        sx={{
          backgroundColor: 'c4c4c4',
          height: '2px',
          width: '100%',
          my: 10
        }}
      />
      <SubmitCommentSection />
    </Box>
  );
};
export default CarDetailsPage;
