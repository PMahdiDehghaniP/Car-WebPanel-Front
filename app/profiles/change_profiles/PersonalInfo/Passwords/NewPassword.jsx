import { Typography } from '@mui/material';

const NewPasswordLabel = () => {
  return (
    <Typography
      sx={{
        position: 'absolute',
        width: 'auto',   // auto width for text content
        height: 17,
        left:'75%',
        top: {
          xs: 340,      // mobile
          sm: 1020   // laptop
        },
        fontFamily: "'Vazirmatn', sans-serif",
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: {
          xs: 11,       // mobile
          sm: 28  // laptop
        },
        lineHeight: '17px',
        color: '#000000'
      }}
    >
      رمز عبور جدید
    </Typography>
  );
};

export default NewPasswordLabel;