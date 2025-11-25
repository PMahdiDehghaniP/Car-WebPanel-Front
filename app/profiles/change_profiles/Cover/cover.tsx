import { Box, Typography, Button } from '@mui/material';

const CoverSection = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: { xs: '100%', sm: '100vw' },
        maxWidth: { xs: 468, sm: 1921 },
        height: { xs: 178, sm: 290 },
        left: 0,
        top: { xs: 96, sm: 97 },
        overflow: 'hidden'
      }}
    >
      {/* Cover Photo */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
          backgroundColor: '#f0f0f0', // Fallback color
          backgroundImage: 'url(/profiles/cover_photo.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '5px'
        }}
      />
      
      {/* Change Cover Button */}
      <Button
        sx={{
          position: 'absolute',
          width: { xs: 119.09, sm: 189.53 },
          height: { xs: 36.04, sm: 49.23 },
          left: { xs: '72%', sm: '87%' },
          top: { xs: 224, sm: 292 },
          minWidth: 'auto',
          padding: 0,
          backgroundColor: '#7185E7',
          border: { 
            xs: '0.806688px solid rgba(118, 101, 101, 0.4)',
            sm: '1.10191px solid rgba(118, 101, 101, 0.4)'
          },
          borderRadius: { 
            xs: '8.06688px', 
            sm: '11.0191px' 
          },
          '&:hover': {
            backgroundColor: '#5a6fd8',
          },
          // Responsive positioning adjustments
          '@media (max-width: 600px)': {
            left: '72%',
            transform: 'translateX(-50%)'
          },
          '@media (min-width: 601px) and (max-width: 1200px)': {
            left: '85%'
          }
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Vazirmatn', sans-serif",
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: { xs: '14.5204px', sm: '19.8345px' },
            lineHeight: { xs: '23px', sm: '31px' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#FFFFFF',
            width: { xs: '101.78px', sm: '161.98px' },
            height: { xs: '16.13px', sm: '22.04px' }
          }}
        >
          تغییر عکس کاور
        </Typography>
      </Button>
    </Box>
  );
};

export default CoverSection;