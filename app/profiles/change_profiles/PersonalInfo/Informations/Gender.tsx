import { Box, Typography, Menu, MenuItem } from "@mui/material";
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const GenderDropdown = () => {
  const [gender, setGender] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleGenderSelect = (selectedGender: string, label: string) => {
    setGender(selectedGender);
    handleClose();
  };

  const genderOptions = [
    { value: 'male', label: 'مرد' },
    { value: 'female', label: 'زن' },
    { value: 'prefer-not-to-say', label: 'ترجیح می‌دهم نگویم' }
  ];

  const getDisplayText = () => {
    if (!gender) return 'مرد';
    const selectedOption = genderOptions.find(opt => opt.value === gender);
    return selectedOption?.label || 'مرد';
  };

  return (
    <>
      {/* Container Group */}
      <Box
        sx={{
          position: 'absolute',
          width: {
            xs: 53.44,
            sm: 140
          },
          height: {
            xs: 38.49,
            sm: 101
          },
          left:'80%',
          top: '45%'
        }}
      >
        {/* Gender Label */}
        <Typography
          sx={{
            position: 'absolute',
            width: {
              xs: 34,
              sm: 89
            },
            height: {
              xs: 13,
              sm: 33
            },
            left: {
              xs: 19.44,
              sm: 51
            },
            top: 0,
            fontFamily: "'Vazirmatn', 'Inter', sans-serif",
            fontStyle: 'normal',
            fontWeight: 500,
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
          جنسیت
        </Typography>

        {/* Dropdown Container */}
        <Box
          sx={{
            position: 'absolute',
            width: {
              xs: 52.98,
              sm: 139
            },
            height: {
              xs: 19.06,
              sm: 50
            },
            left: 0,
            top: {
              xs: 19.44,
              sm: 51
            },
            background: 'rgba(183, 183, 183, 0.32)',
            borderRadius: {
              xs: '5.74578px',
              sm: '15.0759px'
            },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: {
              xs: '0 25px 0 8px',
              sm: '0 45px 0 16px'
            },
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            '&:hover': {
              background: 'rgba(183, 183, 183, 0.4)'
            }
          }}
          onClick={handleClick}
        >
          {/* Selected Gender Text */}
          <Typography
            sx={{
              fontFamily: "'Vazirmatn', 'Inter', sans-serif",
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
              color: gender ? '#000000' : '#4E4E4E',
              textAlign: 'right',
              direction: 'rtl',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              flex: 1
            }}
          >
            {getDisplayText()}
          </Typography>

          {/* Dropdown Arrow */}
          <ExpandMoreIcon 
            sx={{ 
              color: '#9E9E9E',
              fontSize: {
                xs: 16,
                sm: 28
              },
              marginRight: {
                xs: '-15px',
                sm: '-25px'
              }
            }} 
          />
        </Box>
      </Box>

      {/* Custom Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: {
              xs: 160,
              sm: 300
            },
            borderRadius: {
              xs: '8px',
              sm: '12px'
            },
            marginTop: '4px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
            overflow: 'hidden'
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {genderOptions.map((option) => (
          <MenuItem
            key={option.value}
            onClick={() => handleGenderSelect(option.value, option.label)}
            selected={gender === option.value}
            sx={{
              fontFamily: "'Vazirmatn', 'Inter', sans-serif",
              fontSize: {
                xs: 11,
                sm: 16
              },
              fontWeight: gender === option.value ? 500 : 400,
              padding: {
                xs: '10px 14px',
                sm: '14px 18px'
              },
              direction: 'rtl',
              textAlign: 'right',
              borderBottom: '1px solid rgba(0,0,0,0.05)',
              '&:last-child': {
                borderBottom: 'none'
              },
              '&:hover': {
                backgroundColor: 'rgba(113, 133, 231, 0.1)'
              },
              minHeight: 'auto',
              whiteSpace: 'normal',
              lineHeight: {
                xs: '1.4',
                sm: '1.5'
              }
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default GenderDropdown;