import { Box, TextField, Typography } from "@mui/material";
import { useState } from 'react';

const LastNameInput = () => {
  const [lastName, setLastName] = useState('');

  return (
    <>
      {/* Container Group */}
      <Box
        sx={{
          position: 'absolute',
          width: '35%',
          height: {
            xs: 44.86,
            sm: 117.7
          },
          left: '6%',
          top:'18%'
        }}
      >
        {/* Last Name Label */}
        <Typography
          sx={{
            position: 'absolute',
            width: {
              xs: 50,
              sm: 131
            },
            height: {
              xs: 13,
              sm: 33
            },
            left: {
              xs: 121.95,
              sm: 319.98
            },
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
          نام خانوادگی
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
              xs: 19,
              sm: 49.86
            }
          }}
        >
          {/* Text Field */}
          <TextField
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="بانی"
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
                textAlign: 'right',
                color: lastName ? '#000000' : '#4E4E4E',
                padding: {
                  xs: '0 8px',
                  sm: '0 20px'
                },
                '& .MuiInput-input': {
                  textAlign: 'right',
                  padding: 0,
                  '&::placeholder': {
                    color: '#4E4E4E',
                    opacity: 1
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

export default LastNameInput;