import { Box, Input, Typography } from "@mui/material";
import { useState } from 'react';

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+98');

  const formatPhoneNumber = (value) => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, '');
    
    // Limit to 10 digits and format as 0912 123 4567
    if (digits.length <= 4) {
      return digits;
    } else if (digits.length <= 7) {
      return `${digits.slice(0, 3)} ${digits.slice(3)}`;
    } else {
      return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 10)}`;
    }
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    const formattedValue = formatPhoneNumber(value);
    setPhoneNumber(formattedValue);
  };

  const handleCountryCodeChange = (e) => {
    let value = e.target.value;
    
    // Ensure it starts with +
    if (!value.startsWith('+')) {
      value = '+' + value.replace(/[^0-9]/g, '');
    }
    
    // Remove any extra + signs and non-digit characters after the first +
    value = value.replace(/^\+/, '').replace(/[^0-9]/g, '');
    value = '+' + value;
    
    // Limit to 4 characters total (1 + 3 digits)
    if (value.length <= 4) {
      setCountryCode(value);
    }
  };

  return (
    <>
      {/* Container Group */}
      <Box
        sx={{
          position: 'absolute',
          width:'40%',
          height: {
            xs: 44.93,  // mobile
            sm: 117.88  // laptop
          },
          left:'53%',
          top: '26%'
        }}
      >
        {/* Phone Number Label */}
        <Typography
          sx={{
            position: 'absolute',
            width: {
              xs: 50,    // mobile
              sm: 132    // laptop
            },
            height: {
              xs: 13,    // mobile
              sm: 33     // laptop
            },
            left:'73%',
            top: {
              xs: 0,     // mobile
              sm: 0      // laptop
            },
            fontFamily: "'Inter', sans-serif",
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: {
              xs: 10.3424, // mobile
              sm: 27.1367  // laptop
            },
            lineHeight: {
              xs: '13px',  // mobile
              sm: '33px'   // laptop
            },
            color: '#000000'
          }}
        >
          شماره همراه
        </Typography>

        {/* Country Code Input */}
        <Box
          sx={{
            position: 'absolute',
            width: {
              xs: 26.43, // mobile
              sm: 69.35  // laptop
            },
            height: {
              xs: 25.86, // mobile
              sm: 67.84  // laptop
            },
            left: {
              xs: 0,     // mobile
              sm: 0      // laptop
            },
            top: {
              xs: 19.07, // mobile (161.61 - 142.54)
              sm: 50.04  // laptop (424.04 - 374)
            }
          }}
        >
          {/* Background Rectangle */}
          <Box
            sx={{
              position: 'absolute',
              width: {
                xs: 28.15, // mobile
                sm: 73.87  // laptop
              },
              height: {
                xs: 25.86, // mobile
                sm: 67.84  // laptop
              },
              left: 0,
              top: 0,
              background: 'rgba(183, 183, 183, 0.32)',
              borderRadius: {
                xs: '5.74578px', // mobile
                sm: '15.0759px'  // laptop
              }
            }}
          />
          
          {/* Country Code Input */}
          <Input
            value={countryCode}
            onChange={handleCountryCodeChange}
            placeholder="+98"
            inputProps={{
              maxLength: 4, // + plus 3 digits
              inputMode: 'numeric'
            }}
            disableUnderline
            sx={{
              position: 'absolute',
              width: {
                xs: 20,    // mobile
                sm: 52     // laptop
              },
              height: {
                xs: 13,    // mobile
                sm: 33     // laptop
              },
              left: {
                xs: 4.6,   // mobile
                sm: 12.06  // laptop
              },
              top: {
                xs: 6.89,  // mobile
                sm: 18.09  // laptop
              },
              fontFamily: "'Inter', sans-serif",
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: {
                xs: 10.3424, // mobile
                sm: 27.1367  // laptop
              },
              lineHeight: {
                xs: '13px',  // mobile
                sm: '33px'   // laptop
              },
              textAlign: 'center',
              color: countryCode === '+98' ? '#4E4E4E' : '#000000',
              '&::placeholder': {
                color: '#4E4E4E',
                opacity: 1
              }
            }}
          />
        </Box>

        {/* Phone Number Input */}
        <Box
          sx={{
            position: 'absolute',
            width: {
              xs: 139.05, // mobile
              sm: 364.84  // laptop
            },
            height: {
              xs: 25.86,  // mobile
              sm: 67.84   // laptop
            },
            left: {
              xs: 32.75,  // mobile (246.95 - 214.2)
              sm: 85.93   // laptop (647.95 - 562.02)
            },
            top: {
              xs: 19.07,  // mobile (161.61 - 142.54)
              sm: 50.04   // laptop (424.04 - 374)
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
                xs: '5.74578px', // mobile
                sm: '15.0759px'  // laptop
              }
            }}
          />
          
          {/* Phone Number Input */}
          <Input
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="0912 123 4567"
            inputProps={{
              maxLength: 12, // 4 + space + 3 + space + 4 = 12 characters
              inputMode: 'numeric',
              pattern: '[0-9\\s]*'
            }}
            disableUnderline
            sx={{
              position: 'absolute',
              width: {
                xs: 91.85, // mobile
                sm: 241    // laptop
              },
              height: {
                xs: 13,    // mobile
                sm: 33     // laptop
              },
              left: {
                xs: 12.6,  // mobile
                sm: 33.05  // laptop
              },
              top: {
                xs: 6.85,  // mobile
                sm: 17.96  // laptop
              },
              fontFamily: "'Inter', sans-serif",
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: {
                xs: 10.3424, // mobile
                sm: 27.1367  // laptop
              },
              lineHeight: {
                xs: '13px',  // mobile
                sm: '33px'   // laptop
              },
              textAlign: 'left',
              direction: 'ltr',
              color: phoneNumber ? '#000000' : '#4E4E4E',
              '&::placeholder': {
                color: '#4E4E4E',
                opacity: 1,
                textAlign: 'left',
                direction: 'ltr'
              }
            }}
          />
        </Box>
      </Box>
    </>
  );
}

export default PhoneNumberInput;