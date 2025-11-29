import { Typography } from '@mui/material';

const PersonalInfoTitle = () => {
  return (
    <Typography
      sx={{
        position: 'absolute',
        width: {
          xs: 80,     // mobile
          md: 208     // tablet & laptop
        },
        height: {
          xs: 19,     // mobile
          md: 50      // tablet & laptop
        },
        left:'75%',
        top: '11%',
        fontFamily: "'Vazirmatn', sans-serif",
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: {
          xs: 12.1959, // mobile
          md: 32       // tablet & laptop
        },
        lineHeight: {
          xs: '19px',  // mobile
          md: '50px'   // tablet & laptop
        },
        textAlign: 'center',
        color: '#000000',
        whiteSpace: 'nowrap'
      }}
    >
      اطلاعات شخصی
    </Typography>
  );
};

export default PersonalInfoTitle;