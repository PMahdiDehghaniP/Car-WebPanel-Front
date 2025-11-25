import { Box, TextField, Typography } from "@mui/material";
import { useState } from 'react';

const TitleInput = () => {
  const [title, setTitle] = useState('');

  return (
    <>
      {/* Container Group */}
      <Box
        sx={{
          position: 'absolute',
          width:'35%',
          height: {
            xs: 44.44,
            sm: 116.59
          },
          left:'53%',
          top: '35%'
        }}
      >
        {/* Title Label */}
        <Typography
          sx={{
            position: 'relative',
            width: {
              xs: 24,
              sm: 61
            },
            height: {
              xs: 13,
              sm: 33
            },
            left: '85%',
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
          عنوان
        </Typography>

        {/* Input Container */}
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: {
              xs: 25.86,
              sm: 67.84
            },
            top: {
              xs: 18.58,
              sm: 48.75
            },
            left:'18%'
          }}
        >
          {/* Text Field */}
          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="اینفلوئنسر حوزه ماشین"
            variant="standard"
            InputProps={{
              disableUnderline: true,
              sx: {
                height: '100%',
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
                textAlign: 'right',
                color: title ? '#000000' : '#4E4E4E',
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

export default TitleInput;