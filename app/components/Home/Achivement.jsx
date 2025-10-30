import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const AchivementSection = () => {
  const Achivements = [
    {
      id: 'Note',
      src: '/AchivementNotes.png',
      width: '120px',
      height: '120px'
    },
    { id: 'Fire', src: '/FireAchivement.png', width: '150px', height: '150px' },
    {
      id: 'Champion',
      src: '/championAchivement.png',
      width: '193pxpx',
      height: '193pxpx'
    },
    { id: 'Trophy', src: '/Trophy.png', width: '150px', height: '150px' },
    { id: 'Timer', src: '/TimerAchivement.png', width: '120', height: '120px' }
  ];
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '3rem'
      }}
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
