import { Achivements } from '@/app/constants/Home/Achivements';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const AchivementSection = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '3rem'
      }}
      data-aos="flip-right"
    >
      <Typography sx={{ fontSize: '4rem', fontWeight: 700 }}>
        دستاوردها
      </Typography>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '4rem',
          flexWrap: 'wrap'
        }}
      >
        {Achivements.map((achivement) => (
          <Box
            component="img"
            src={achivement.src}
            key={achivement.id}
            width={achivement.width}
            height={achivement.height}
          />
        ))}
      </Box>
    </Box>
  );
};
export default AchivementSection;
