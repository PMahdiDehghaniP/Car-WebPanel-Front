import { Button } from '@mui/material';

const ChangePasswordButton = () => {
  const handleClick = () => {
    // Add your change password logic here
    console.log('Change password button clicked');
  };

  return (
    <Button
      onClick={handleClick}
      sx={{
        position: 'absolute',
        width: {
          xs: 104.57,
          sm: 274.38
        },
        height: {
          xs: 25.86,
          sm: 67.84
        },
        left: {
          xs: 24.01,
          sm: 63
        },
        top: {
          xs: '92%',
          sm: '92%'
        },
        background: '#7185E7',
        borderRadius: {
          xs: '5.74578px',
          sm: '15.0759px'
        },
        fontFamily: "'Vazirmatn', sans-serif",
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: {
          xs: 10.3424,
          sm: 27.1367
        },
        lineHeight: {
          xs: '16px',
          sm: '42px'
        },
        textAlign: 'center',
        color: '#FFFFFF',
        textTransform: 'none', // Prevent uppercase transformation
        '&:hover': {
          background: '#5a6fd8',
        },
        '&:active': {
          background: '#4a5bc0',
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        minWidth: 'auto'
      }}
    >
      تغییر رمز عبور
    </Button>
  );
};

export default ChangePasswordButton;