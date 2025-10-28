import { Box, Button, Grid, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const ExplanationCard = ({
  gifSrc = '',
  features = [],
  backgroundStyles = {},
  buttonStyles = {},
  buttonText,
  title,
  description,
  bgImageSrc
}) => {
  return (
    <Grid
      container
      sx={{
        width: '100%',
        borderRadius: '1rem',
        ...backgroundStyles,
        overflow: 'hidden',
        height: 'auto'
      }}
    >
      <Grid
        item
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
          src={gifSrc}
          alt="explanation gif"
          sx={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            borderTopRightRadius: '1rem',
            borderTopLeftRadius: {
              xs: '1rem',
              md: '1rem',
              lg: '0rem'
            },
            borderBottomRightRadius: {
              xs: '0rem',
              md: '0rem',
              lg: '1rem'
            }
          }}
        />
      </Grid>

      <Grid
        item
        size={{ xs: 12, sm: 12, md: 12, lg: 6 }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'start',
          padding: '1rem',
          position: 'relative'
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Typography sx={{ fontSize: '40px', fontWeight: 700 }}>
            {title}
          </Typography>
          <Typography sx={{ fontSize: '15px', fontWeight: 400 }}>
            {description}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            mt: 2
          }}
        >
          {features.map((text, index) => (
            <Typography
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '15px',
                fontWeight: 400
              }}
            >
              <CheckCircle sx={{ fontSize: 25, color: '#FFFFFF' }} />
              {text}
            </Typography>
          ))}
        </Box>

        <Box
          component="img"
          src={bgImageSrc}
          alt="lambo"
          sx={{
            width: '600px',
            opacity: 0.2,
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        />
        <Button
          sx={{ alignSelf: 'center', width: '247px', ...buttonStyles }}
          variant="contained"
        >
          {buttonText}
        </Button>
      </Grid>
    </Grid>
  );
};

export default ExplanationCard;
