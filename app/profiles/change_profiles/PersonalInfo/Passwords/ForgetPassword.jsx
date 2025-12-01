import { Link } from '@mui/material';

const ForgotPasswordLink = () => {
  return (
    <Link
      href="/forgot-password"
      underline="always"
      sx={{
        position: 'absolute',
        width: {
          xs: 126,
          sm: 330
        },
        height: {
          xs: 16,
          sm: 42
        },
        left:'55%',
        top: '94%',
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
        color: '#7185E7',
        textDecoration: 'underline',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
          color: '#5a6fd8'
        }
      }}
    >
      رمز عبور خود را فراموش کردید؟
    </Link>
  );
};

export default ForgotPasswordLink;