import CarLogos from '@/app/constants/homePageCarLogos';
import { Box } from '@mui/system';
import CarLogoCard from './CarLogoCard';
import { perfectCentering } from '@/app/constants/Styles';

const CarsLogoSection = () => {
  return (
    <Box
      sx={{
        ...perfectCentering,
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '75%',
        gap: '0.5rem'
      }}
    >
      {CarLogos.map((car, index) => (
        <CarLogoCard key={index} carName={car.name} logoSrc={car.logoSrc} />
      ))}
    </Box>
  );
};
export default CarsLogoSection;
