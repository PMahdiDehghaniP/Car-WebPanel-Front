'use client';
import { Box, Button, Typography } from '@mui/material';

const CarBoxSection = ({carData}) => {
  const stageSize = { xs: 250, md: 550, lg: 600 };
  const lineWidth = 2;

  const features = [
    {
      text: `حداکثر سرعت: ${carData?.topSpeedKmh} کیلومتر بر ساعت (محدودشده الکترونیکی)`,
      rotate: 25,
      side: 'left',
      top: '-10%'
    },
    { text: `شتاب صفر تا صد: ${carData?.acceleration0100} ثانیه`, rotate: 10, side: 'left', top: '25%' },
    {
      text: `گشتاور: ${carData?.trunkVolumeL} نیوتن‌متر بین ۲۰۰۰ تا ۳۲۰۰ دور در دقیقه`,
      rotate: -10,
      side: 'left',
      top: '60%'
    },
    {
      text: ' مدل : Mercedes-Benz C300 AMG Line ',
      rotate: -25,
      side: 'right',
      top: '-10%'
    },
    {
      text: 'موتور : ۲.۰ لیتری توربوشارژ چهارسیلندر (M254)',
      rotate: -10,
      side: 'right',
      top: '25%'
    },
    {
      text: `قدرت: ${carData?.powerHp} اسب‌بخار در ۵۸۰۰ دور در دقیقه`,
      rotate: 15,
      side: 'right',
      top: '60%'
    }
  ];

  return (
    <Box
      sx={{
        width: '100%',
        height: '600px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background:
          'linear-gradient(180deg, #20263C 0%, #424965 51.44%, #20263C 100%)',
        gap: '5rem',
        padding: '0.5rem'
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '2rem',
          alignItems: 'center'
        }}
      >
        <Button
          sx={{ fontSize: { xs: '12px', md: '1.5rem' } }}
          variant="contained"
        >
          افزودن به گاراژ
        </Button>
        <Typography
          sx={{
            fontSize: { xs: '1rem', md: '2rem' },
            fontWeight: 700,
            color: '#FFFFFF'
          }}
        >
          Mercedes Benz AMG 2022
        </Typography>
        <Box
          component="img"
          src="/mercedesLogo.png"
          sx={{
            width: { xs: 50, md: 100, lg: 200 },
            height: { xs: 50, md: 100, lg: 200 }
          }}
        />
      </Box>

      <Box
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: stageSize,
          aspectRatio: '16/9'
        }}
      >
        <Box
          component="img"
          src="/Car3dStage.png"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            position: 'absolute',
            bottom: 0,
            left: 0
          }}
        />

        <Box
          component="img"
          src="/BenzAMg.png"
          sx={{
            position: 'absolute',
            bottom: '3%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            maxWidth: '600px',
            zIndex: 2,
            objectFit: 'contain'
          }}
        />

        {features.map((item, i) => (
          <Box key={i}>
            <Box
              sx={{
                position: 'absolute',
                left: item.side === 'left' ? '-150px' : 'auto',
                right: item.side === 'right' ? '-150px' : 'auto',
                top: item.top,
                width: '300px',
                height: `${lineWidth}px`,
                backgroundColor: '#fff',
                transform: `rotate(${item.rotate}deg)`,
                transformOrigin:
                  item.side === 'left' ? 'left center' : 'right center'
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                left: item.side === 'left' ? '-30vw' : 'auto',
                right: item.side === 'right' ? '-30vw' : 'auto',
                top: item.top,
                transform: 'translateY(-50%)',
                color: '#fff',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                textAlign: 'center',
                fontSize: '1rem',
                whiteSpace: 'pre-wrap',
                maxWidth: '400px'
              }}
            >
              {item.text}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CarBoxSection;
