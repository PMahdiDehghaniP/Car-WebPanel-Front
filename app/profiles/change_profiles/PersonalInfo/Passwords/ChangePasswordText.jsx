import { Typography } from '@mui/material';

const ChangePasswordTitle = () => {
  return (
    <Typography
      sx={{
        position: 'absolute',
        width: {
          xs: 176,   // if you have exact mobile width
          sm: 176    // laptop
        },
        height: {
          xs: 50,    // if you have exact mobile height
          sm: 50     // laptop
        },
        left: '75%',
        top: {
          xs: 250,   // mobile positioning
          sm: 780   // laptop
        },
        fontFamily: "'Vazirmatn', sans-serif",
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: {
          xs: 20,
          sm: 32     
        },
        lineHeight: {
          xs: '30px', // adjusted for mobile
          sm: '50px'  
        },
        textAlign: 'center',
        color: '#000000'
      }}
    >
      تغییر رمز عبور
    </Typography>
  );
};
export default ChangePasswordTitle;