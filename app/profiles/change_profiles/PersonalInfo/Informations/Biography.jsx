import { Box, Typography, TextareaAutosize } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
  width: '100%',
  fontFamily: "'Vazirmatn', sans-serif",
  fontStyle: 'normal',
  fontWeight: 600,
  textAlign: 'right',
  direction: 'rtl',
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
  resize: 'none',
  overflow: 'auto',
  padding: 0,
  margin: 0,
  '&::placeholder': {
    color: '#4E4E4E',
    opacity: 1
  },
  variants: [
    {
      props: { size: 'mobile' },
      style: {
        fontSize: '9.14693px',
        lineHeight: '14px'
      }
    },
    {
      props: { size: 'laptop' },
      style: {
        fontSize: '24px',
        lineHeight: '38px'
      }
    }
  ]
}));

const BiographyInput = () => {
  const [bio, setBio] = useState('');

  return (
    <>
      {/* Container Group */}
      <Box
        sx={{
          position: 'absolute',
          width: {
            xs: 172.97,
            sm: 453
          },
          height: {
            xs: 45.96,
            sm: 120.59
          },
          left: {
            xs: 23.63,
            sm: 62
          },
          top: {
            xs: 194.37,
            sm: 510
          }
        }}
      >
        {/* Biography Label */}
        <Typography
          sx={{
            position: 'absolute',
            width: {
              xs: 35,
              sm: 91
            },
            height: {
              xs: 13,
              sm: 33
            },
            left: {
              xs: 137.96,
              sm: 362
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
          بیوگرافی
        </Typography>

        {/* Textarea Container */}
        <Box
          sx={{
            position: 'absolute',
            width: {
              xs: 171.8,
              sm: 450.77
            },
            height: {
              xs: 55.26,
              sm: 145
            },
            left: 0,
            top: {
              xs: 20.11,
              sm: 52.75
            },
            background: 'rgba(183, 183, 183, 0.32)',
            borderRadius: {
              xs: '5.74578px',
              sm: '15.0759px'
            },
            padding: {
              xs: '3.53px 4.96px',
              sm: '9.25px 13px'
            }
          }}
        >
          <StyledTextarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="زندگی روزمره من و ماشینام. با من همراه شو تا ببینیم کدوم ماشین بهتره. اگه خوشت اومد دنبال کن حتما."
            sx={{
              width: '100%',
              height: '100% !important',
              minHeight: {
                xs: '48.02px',
                sm: '126px'
              },
              color: bio ? '#000000' : '#4E4E4E',
              fontSize: {
                xs: '9.14693px',
                sm: '24px'
              },
              lineHeight: {
                xs: '14px',
                sm: '38px'
              }
            }}
          />
        </Box>
      </Box>
    </>
  );
}

export default BiographyInput;