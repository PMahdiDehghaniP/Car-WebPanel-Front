import {
  AttachMoney,
  BarChart,
  Build,
  CreditCard,
  LocalGasStation,
  Security
} from '@mui/icons-material';
import { Grid, Box, Typography } from '@mui/material';
import CarTaxItem from './CarTaxItem';

const MoneyCostSection = () => {
  const carTaxMockData = [
    {
      title: 'سوخت/انرژی',
      amount: '1450 دلار در سال',
      icon: <LocalGasStation sx={{ fontSize: { md: '48px', xs: '36px' } }} />
    },
    {
      title: 'بیمه',
      amount: '1250 دلار در سال',
      icon: <Security sx={{ fontSize: { md: '48px', xs: '36px' } }} />
    },
    {
      title: 'سرویس و تعمیرات',
      amount: '950 دلار در سال',
      icon: <Build sx={{ fontSize: { md: '48px', xs: '36px' } }} />
    },
    {
      title: 'استهلاک',
      amount: '5200 دلار در سال',
      icon: <BarChart sx={{ fontSize: { md: '48px', xs: '36px' } }} />
    },
    {
      title: 'مالیات و عوارض',
      amount: '500 دلار در سال',
      icon: <AttachMoney sx={{ fontSize: { md: '48px', xs: '36px' } }} />
    },
    {
      title: 'اقساط یا لیزینگ',
      amount: '600 دلار در سال',
      icon: <CreditCard sx={{ fontSize: { md: '48px', xs: '36px' } }} />
    }
  ];
  return (
    <Grid
      container
      sx={{
        position: 'relative',
        width: '100%',
        height: {
          xs: '290px',
          lg: '460px'
        },
        overflow: 'hidden',
        padding: '1.5rem'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          backgroundImage: "url('/moneyRain.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.3
        }}
      />

      <Grid
        size={{ xs: 4 }}
        sx={{
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start'
        }}
      >
        {carTaxMockData.slice(0, 3).map((item, idx) => (
          <CarTaxItem key={idx} {...item} />
        ))}
      </Grid>
      <Grid
        size={{ xs: 4 }}
        sx={{
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start'
        }}
      >
        {carTaxMockData.slice(3, 6).map((item, idx) => (
          <CarTaxItem key={idx} {...item} />
        ))}
      </Grid>
      <Grid
        size={{ xs: 4 }}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: {
            xs: 'center',
            md: 'space-between'
          },
          zIndex: 999
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography
            sx={{ fontWeight: 700, fontSize: { xs: '1rem', md: '2.25rem' } }}
          >
            در مجموع :
          </Typography>
          <Typography
            sx={{ fontWeight: 700, fontSize: { xs: '0.5rem', md: '1.25rem' } }}
          >
            5454545 دلار در هر سال
          </Typography>
        </Box>
        <Box zIndex={999} component="img" src="/money.png" />
      </Grid>
    </Grid>
  );
};

export default MoneyCostSection;
