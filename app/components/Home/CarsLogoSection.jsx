import { Box } from '@mui/system';
import CarLogoCard from './CarLogoCard';
import { perfectCentering } from '@/app/constants/Styles';

const CarsLogoSection = ({ logoData }) => {
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
      {logoData?.slice(0, 6)?.map((car, index) => (
        <CarLogoCard key={index} carName={car.name} logoSrc={car.logoUrl} />
      ))}
    </Box>
  );
};
export default CarsLogoSection;
