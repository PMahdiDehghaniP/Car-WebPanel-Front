import { Box, TextField, Typography } from "@mui/material";
import { useState } from 'react';

const EmailInput = () => {
  const [email, setEmail] = useState('');

  return (
    <>
      {/* Container Group */}
      <Box
        sx={{
          position: 'absolute',
          width: '35%',
          height: {
            xs: 44.93,
            sm: 117.88
          },
          left:'6%',
          top: '28%'
        }}
      >
        {/* Email Label */}
        <Typography
          sx={{
            position: 'absolute',
            width: {
              xs: 23,
              sm: 61
            },
            height: {
              xs: 13,
              sm: 33
            },
            left: '98%',
            top: 0,
            fontFamily: "'Inter', sans-serif",
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: {
              xs: 10.3424,
              sm: 27.1367
            },
            lineHeight: {
              xs: '13px',
              sm: '33px'
            },
            color: '#000000'
          }}
        >
          ایمیل
        </Typography>

        {/* Input Container */}
        <Box
          sx={{
            position: 'absolute',
            width: {
              xs: 171.8,
              sm: 450.77
            },
            height: {
              xs: 25.86,
              sm: 67.84
            },
            left: 0,
            top: {
              xs: 19.07,
              sm: 50.04
            }
          }}
        >
          {/* Text Field */}
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="behnam.bani@gmail.com"
            type="email"
            variant="standard"
            InputProps={{
              disableUnderline: true,
              sx: {
                height: '100%',
                fontFamily: "'Inter', sans-serif",
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: {
                  xs: 10.3424,
                  sm: 27.1367
                },
                lineHeight: {
                  xs: '13px',
                  sm: '33px'
                },
                textAlign: 'left',
                direction: 'ltr',
                color: email ? '#000000' : '#4E4E4E',
                padding: {
                  xs: '0 8px',
                  sm: '0 20px'
                },
                '& .MuiInput-input': {
                  textAlign: 'left',
                  direction: 'ltr',
                  padding: 0,
                  '&::placeholder': {
                    color: '#4E4E4E',
                    opacity: 1,
                    textAlign: 'left',
                    direction: 'ltr'
                  }
                }
              }
            }}
            sx={{
              width: '100%',
              height: '100%',
              '& .MuiInputBase-root': {
                height: '100%',
                background: 'rgba(183, 183, 183, 0.32)',
                borderRadius: {
                  xs: '5.74578px',
                  sm: '15.0759px'
                },
                padding: {
                  xs: '0 8px',
                  sm: '0 20px'
                }
              }
            }}
          />
        </Box>
      </Box>
    </>
  );
}

export default EmailInput;