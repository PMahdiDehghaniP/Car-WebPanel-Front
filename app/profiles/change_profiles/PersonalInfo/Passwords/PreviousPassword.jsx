import { Typography } from '@mui/material';

const PreviousPasswordLabel = () => {
  return (
    <Typography
      sx={{
        position: 'absolute',
        width: {
          xs: 56,     // small mobile
          md: 146     // tablet & laptop
        },
        height: {
          xs: 17,     // small mobile
          md: 44      // tablet & laptop
        },
        left: '77%',
        top: {
          xs: 310,    // mobile
          md: 850     // laptop
        },
        fontFamily: "'Vazirmatn', sans-serif",
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: {
          xs: 10.6714, // mobile
          md: 28       // laptop
        },
        lineHeight: {
          xs: '17px',  // mobile
          md: '44px'   // laptop
        },
        color: '#000000',
        whiteSpace: 'nowrap'
      }}
    >
      رمز عبور قبلی
    </Typography>
  );
};

export default PreviousPasswordLabel;