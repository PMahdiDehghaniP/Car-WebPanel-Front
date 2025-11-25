import { Box, Input, Typography, Fade, Zoom } from "@mui/material";
import { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

interface CheckPasswordProps {
  newPassword: string;
}

const CheckPassword = ({ newPassword }: CheckPasswordProps) => {
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setIsTouched(true);
    
    if (value && value !== newPassword) {
      setError('رمز عبور با رمز عبور جدید مطابقت ندارد');
    } else {
      setError('');
    }
  };

  const handleBlur = () => {
    setIsTouched(true);
    if (confirmPassword && confirmPassword !== newPassword) {
      setError('رمز عبور با رمز عبور جدید مطابقت ندارد');
    }
  };

  const isMatch = Boolean(confirmPassword && !error && newPassword === confirmPassword);
  const showError = Boolean(isTouched && error);

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
            sm: 63
          },
          top: {
            xs: 344,
            sm: 1070
          }
        }}
      >
        {/* Background Rectangle with enhanced styling */}
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            background: showError ? 'rgba(244, 67, 54, 0.08)' : 
                       isMatch ? 'rgba(76, 175, 80, 0.08)' : 'rgba(183, 183, 183, 0.15)',
            border: showError ? '2px solid #f44336' : 
                    isMatch ? '2px solid #4caf50' : '1px solid rgba(183, 183, 183, 0.5)',
            borderRadius: {
              xs: '8px',
              sm: '15.0759px'
            },
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: showError ? '0 2px 8px rgba(244, 67, 54, 0.15)' :
                        isMatch ? '0 2px 8px rgba(76, 175, 80, 0.15)' : 'none',
            '&:hover': {
              borderColor: showError ? '#f44336' : 
                          isMatch ? '#4caf50' : 'rgba(183, 183, 183, 0.8)',
              background: showError ? 'rgba(244, 67, 54, 0.05)' : 
                         isMatch ? 'rgba(76, 175, 80, 0.05)' : 'rgba(183, 183, 183, 0.2)'
            }
          }}
        />
        
        {/* Input Field with enhanced styling */}
        <Input
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          onBlur={handleBlur}
          placeholder="تکرار رمز عبور جدید"
          type="password"
          disableUnderline
          sx={{
            position: 'absolute',
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
            color: showError ? '#f44336' : isMatch ? '#4caf50' : '#4E4E4E',
            transition: 'all 0.3s ease',
            '&::placeholder': {
              color: showError ? '#f44336' : isMatch ? '#4caf50' : '#4E4E4E',
              opacity: 0.7,
              transition: 'all 0.3s ease'
            },
            '&:focus': {
              color: showError ? '#f44336' : isMatch ? '#4caf50' : '#2E2E2E',
            }
          }}
        />

        {/* Status Icon */}
        {(showError || isMatch) && (
          <Fade in={true} timeout={500}>
            <Box
              sx={{
                position: 'absolute',
                right: {
                  xs: 8,
                  sm: 20
                },
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              {showError ? (
                <ErrorIcon 
                  sx={{ 
                    color: '#f44336',
                    fontSize: {
                      xs: 16,
                      sm: 24
                    }
                  }} 
                />
              ) : isMatch ? (
                <CheckCircleIcon 
                  sx={{ 
                    color: '#4caf50',
                    fontSize: {
                      xs: 16,
                      sm: 24
                    }
                  }} 
                />
              ) : null}
            </Box>
          </Fade>
        )}
      </Box>

      {/* Enhanced Error Message */}
      <Fade in={showError} timeout={300}>
        <Box
          sx={{
            position: 'absolute',
            width: {
              xs: '50%',
              sm: 450.77
            },
            left: {
              xs: '25%',
              sm: 63
            },
            top: {
              xs: 375,
              sm: 1145
            },
            display: showError ? 'flex' : 'none',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            background: 'rgba(244, 67, 54, 0.05)',
            border: '1px solid rgba(244, 67, 54, 0.2)',
            borderRadius: {
              xs: '6px',
              sm: '10px'
            },
            padding: {
              xs: '4px 8px',
              sm: '8px 16px'
            }
          }}
        >
          <ErrorIcon 
            sx={{ 
              color: '#f44336',
              fontSize: {
                xs: 14,
                sm: 18
              }
            }} 
          />
          <Typography
            sx={{
              fontFamily: "'Vazirmatn', sans-serif",
              fontSize: {
                xs: 10,
                sm: 14
              },
              color: '#f44336',
              textAlign: 'center',
              fontWeight: 500
            }}
          >
            {error}
          </Typography>
        </Box>
      </Fade>

      {/* Enhanced Success Message */}
      <Zoom in={isMatch} timeout={400}>
        <Box
          sx={{
            position: 'absolute',
            width: {
              xs: '50%',
              sm: 450.77
            },
            left: {
              xs: '25%',
              sm: 63
            },
            top: {
              xs: 375,
              sm: 1145
            },
            display: isMatch ? 'flex' : 'none',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            background: 'rgba(76, 175, 80, 0.05)',
            border: '1px solid rgba(76, 175, 80, 0.2)',
            borderRadius: {
              xs: '6px',
              sm: '10px'
            },
            padding: {
              xs: '4px 8px',
              sm: '8px 16px'
            }
          }}
        >
          <CheckCircleIcon 
            sx={{ 
              color: '#4caf50',
              fontSize: {
                xs: 14,
                sm: 18
              }
            }} 
          />
          <Typography
            sx={{
              fontFamily: "'Vazirmatn', sans-serif",
              fontSize: {
                xs: 10,
                sm: 14
              },
              color: '#4caf50',
              textAlign: 'center',
              fontWeight: 500
            }}
          >
            ✓ رمز عبور مطابقت دارد
          </Typography>
        </Box>
      </Zoom>
    </>
  );
}

export default CheckPassword;