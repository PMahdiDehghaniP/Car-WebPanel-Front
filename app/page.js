import { Box, Typography } from '@mui/material';
import CarLogos from './constants/homePageCarLogos';
import CarLogoCard from './components/CarLogoCard';
import { perfectCentering } from './constants/Styles';

const Home = () => {
  return (
    <Box
      sx={{
        ...perfectCentering,
        width: '100vw',
        flexDirection: 'column'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '70%'
        }}
      >
        <Typography sx={{ fontSize: '2.5rem' }}>برند های معتبر</Typography>
        <Typography sx={{ fontSize: '1rem' }}>نشان دادن همه برند ها</Typography>
      </Box>
      <Box
        sx={{
          ...perfectCentering,
          gap: '1rem',
          flexWrap: 'nowrap',
          width: '70%',
        }}
      >
        {CarLogos.map((car, index) => (
          <CarLogoCard key={index} carName={car.name} logoSrc={car.logoSrc} />
        ))}
      </Box>
    </Box>
  );
};

export default Home;
