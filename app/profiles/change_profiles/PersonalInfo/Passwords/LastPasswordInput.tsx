import { Box, Input } from '@mui/material';
import { useState } from 'react';

const PreviousPasswordInput = () => {
  const [password, setPassword] = useState('');

  return (
    <Box
      sx={{
        position: 'absolute',
        width: {
          xs: '50%',
          sm: 450.77
        },
        height: {
          xs: 25.86,
          sm: 67.84
        },
        left: {
          xs: '25%',
          sm: 562.02
        },
        top: {
          xs: 310.19,
          sm: 920.81
        }
      }}
    >
      {/* Background Rectangle */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
          background: 'rgba(183, 183, 183, 0.32)',
          borderRadius: {
            xs: '5.74578px',
            sm: '15.0759px'
          }
        }}
      />
      
      {/* Input Field */}
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="رمز عبور قبلی خود را وارد کنید"
        type="password"
        disableUnderline
        sx={{
          position: 'absolute',
          width: {
            xs: 119,
            sm: 310
          },
          height: {
            xs: 16,
            sm: 42
          },
          left: {
            xs: 46.12,
            sm: 121
          },
          top: {
            xs: 5.34,
            sm: 14
          },
          fontFamily: "'Vazirmatn', sans-serif",
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: {
            xs: 10.3424,
            sm: 27.1367
          },
          lineHeight: {
            xs: '16px',
            sm: '42px'
          },
          textAlign: 'center',
          color: '#4E4E4E',
          '&::placeholder': {
            color: '#4E4E4E',
            opacity: 1
          }
        }}
      />
    </Box>
  );
};

export default PreviousPasswordInput;