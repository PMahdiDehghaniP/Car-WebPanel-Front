'use client';
import { Button, Grid, Typography, useTheme, Box } from '@mui/material';
import InstagramPostCard from '../PostCard';
import PostSlider from './CarSlider/PostSlider';

const FamilyCard = ({ dataAos = 'fade-right' }) => {
  const theme = useTheme();
  return (
    <Grid
      container
      sx={{
        width: '100%'
      }}
      data-aos={dataAos}
    >
      <Grid
        size={{ xs: 12, sm: 12, md: 12, lg: 6 }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '1rem',
          alignItems: 'center',
          padding: '2rem',
          backgroundColor: theme.palette?.familyCard?.swiperBackgroundColor,
          position: 'relative',
          borderBottomRightRadius: { xs: '0rem', md: '0rem', lg: '1rem' },
          borderTopRightRadius: '1rem',
          borderBottomLeft: {
            xs: '1rem',
            md: '1rem',
            lg: '0rem'
          },
          borderTopLeftRadius: {
            xs: '1rem',
            md: '1rem',
            lg: '0rem'
          }
        }}
      >
        <Box
          component="img"
          src="/crowd.png"
          alt="crowd"
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.3
          }}
        />
        <Typography
          sx={{ fontSize: '2rem', fontWeight: 700, textAlign: 'center', mb: 2 }}
        >
          برترین پست های هفته
        </Typography>
        <PostSlider />
        <Button sx={{ minWidth: '300px' }} variant="contained">
          مشاهده همه پست ها
        </Button>
      </Grid>
      <Grid
        size={{ xs: 12, sm: 12, md: 12, lg: 6 }}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'auto'
        }}
      >
        <Box
          component="img"
          src="/Family.png"
          alt="Family"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            backgroundColor: theme.palette?.familyCard?.backgroundColor,
            borderTopLeftRadius: {
              xs: '0rem',
              md: '0rem',
              lg: '1rem'
            },
            borderBottomLeftRadius: {
              xs: '1rem',
              md: '1rem',
              lg: '1rem'
            },
            borderBottomRightRadius: {
              xs: '1rem',
              md: '1rem',
              lg: '0rem'
            }
          }}
        />
      </Grid>
    </Grid>
  );
};
export default FamilyCard;
