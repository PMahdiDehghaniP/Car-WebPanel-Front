import { Box, TextField, Typography } from "@mui/material";
import { useState } from 'react';

const NameInput = () => {
  const [name, setName] = useState('');

  return (
    <>
      {/* Container Group */}
      <Box
        sx={{
          position: 'absolute',
          width:'35%',
          height: {
            xs: 44.91,
            sm: 117.84
          },
          left:'52%',
          top: '16%'
        }}
      >
        {/* Name Label */}
        <Typography
          sx={{
            position: 'relative',
            width: {
              xs: 11,
              sm: 29
            },
            height: {
              xs: 13,
              sm: 33
            },
            left: {
              xs: 161.22,
              sm: 423
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
          نام
        </Typography>

        {/* Input Container */}
        <Box
          sx={{
            position: 'absolute',
            width:'100%',
            height: {
              xs: 25.86,
              sm: 67.84
            },
            left:'20%',
            top: {
              xs: 19.06,
              sm: 50
            }
          }}
        >
          {/* Text Field */}
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="بهنام"
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
                color: name ? '#000000' : '#4E4E4E',
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

export default NameInput;