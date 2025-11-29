import { Box, Input, Typography, LinearProgress } from '@mui/material';
import { useState } from 'react';

const NewPasswordInput = () => {
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    message: '',
    color: 'grey'
  });

  const checkPasswordStrength = (password: string) => {
    if (password.length === 0) {
      return { score: 0, message: '', color: 'grey' };
    }

    let score = 0;
    const messages = [];

    // Check length
    if (password.length >= 8) {
      score += 1;
    } else {
      messages.push('حداقل ۸ کاراکتر');
    }

    // Check for numbers
    if (/\d/.test(password)) {
      score += 1;
    } else {
      messages.push('شامل اعداد');
    }

    // Check for English letters
    if (/[a-zA-Z]/.test(password)) {
      score += 1;
    } else {
      messages.push('شامل حروف انگلیسی');
    }

    // Check for special characters
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      score += 1;
    }

    // Determine strength level
    let message = '';
    let color = '';

    if (score === 0) {
      message = 'رمز عبور را وارد کنید';
      color = 'grey';
    } else if (score <= 2) {
      message = `ضعیف${messages.length ? `: ${messages.join('، ')}` : ''}`;
      color = 'error';
    } else if (score === 3) {
      message = 'متوسط';
      color = 'warning';
    } else {
      message = 'قوی';
      color = 'success';
    }

    return { score: (score / 4) * 100, message, color };
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordStrength(checkPasswordStrength(newPassword));
  };

  const getStrengthColor = () => {
    switch (passwordStrength.color) {
      case 'error': return '#f44336';
      case 'warning': return '#ff9800';
      case 'success': return '#4caf50';
      default: return '#9e9e9e';
    }
  };

  return (
    <>
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
            xs: 344.19,
            sm: 1070
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
          onChange={handlePasswordChange}
          placeholder="رمز عبور جدید خود را وارد کنید"
          type="password"
          disableUnderline
          sx={{
            position: 'relative',
            width: {
              xs: '70%',
              sm: 310
            },
            height: {
              xs: 16,
              sm: 42
            },
            left: {
              xs: '15%',
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

      {/* Password Strength Indicator */}
      {password && (
        <Box
          sx={{
            position: 'absolute',
            width: {
              xs: '50%',
              sm: 450.77
            },
            left: {
              xs: '25%',
              sm: 562.02
            },
            top: {
              xs: 380,
              sm: 1160
            },
            display: 'flex',
            flexDirection: 'column',
            gap: 1
          }}
        >
          {/* Strength Bar */}
          <LinearProgress
            variant="determinate"
            value={passwordStrength.score}
            sx={{
              height: 8,
              borderRadius: 4,
              backgroundColor: '#e0e0e0',
              '& .MuiLinearProgress-bar': {
                backgroundColor: getStrengthColor(),
                borderRadius: 4
              }
            }}
          />
          
          {/* Strength Message */}
          <Typography
            sx={{
              fontFamily: "'Vazirmatn', sans-serif",
              fontSize: {
                xs: 10,
                sm: 14
              },
              textAlign: 'center',
              color: getStrengthColor(),
              fontWeight: 500
            }}
          >
            {passwordStrength.message}
          </Typography>

          {/* Requirements List */}
          {passwordStrength.score < 100 && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 0.5
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Vazirmatn', sans-serif",
                  fontSize: {
                    xs: 8,
                    sm: 12
                  },
                  color: '#666',
                  textAlign: 'center'
                }}
              >
                الزمات:
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Vazirmatn', sans-serif",
                  fontSize: {
                    xs: 8,
                    sm: 12
                  },
                  color: password.length >= 8 ? '#4caf50' : '#f44336',
                  textAlign: 'center'
                }}
              >
                ✓ حداقل ۸ کاراکتر
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Vazirmatn', sans-serif",
                  fontSize: {
                    xs: 8,
                    sm: 12
                  },
                  color: /\d/.test(password) ? '#4caf50' : '#f44336',
                  textAlign: 'center'
                }}
              >
                ✓ شامل اعداد
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Vazirmatn', sans-serif",
                  fontSize: {
                    xs: 8,
                    sm: 12
                  },
                  color: /[a-zA-Z]/.test(password) ? '#4caf50' : '#f44336',
                  textAlign: 'center'
                }}
              >
                ✓ شامل حروف انگلیسی
              </Typography>
            </Box>
          )}
        </Box>
      )}
    </>
  );
};

export default NewPasswordInput;