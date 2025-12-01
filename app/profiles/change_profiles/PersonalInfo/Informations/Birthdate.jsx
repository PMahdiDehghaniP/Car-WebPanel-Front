import { Box, Typography, TextField, Dialog, IconButton } from "@mui/material";
import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';
import { faIR } from '@mui/x-date-pickers/locales';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CloseIcon from '@mui/icons-material/Close';

const BirthdateInput = () => {
  const [birthdate, setBirthdate] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formatDisplayDate = (date) => {
    if (!date) return '1375/01/01';
    
    // For display purposes - you might want to use a proper Jalali date library
    const year = date.getFullYear() - 621;
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}/${month}/${day}`;
  };

  return (
    <LocalizationProvider 
      dateAdapter={AdapterDateFnsJalali}
      localeText={faIR.components.MuiLocalizationProvider.defaultProps.localeText}
    >
      {/* Container Group */}
      <Box
        sx={{
          position: 'absolute',
          width: {
            xs: 98.86,
            sm: 250
          },
          height: {
            xs: 39.37,
            sm: 101
          },
          left: '55%',
          top: '45%'
        }}
      >
        {/* Birthdate Label */}
        <Typography
          sx={{
            position: 'absolute',
            width: {
              xs: 39,
              sm: 102
            },
            height: {
              xs: 13,
              sm: 33
            },
            left: {
              xs: 59.84,
              sm: 148
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
          تاریخ تولد
        </Typography>

        {/* Date Picker Container */}
        <Box
          sx={{
            position: 'absolute',
            width: {
              xs: 95.66,
              sm: 251
            },
            height: {
              xs: 19.06,
              sm: 50
            },
            left: {
              xs: 3.05,
              sm: 0
            },
            top: {
              xs: 19.37,
              sm: 51
            },
            background: 'rgba(183, 183, 183, 0.32)',
            borderRadius: {
              xs: '4.1636px',
              sm: '10.9246px'
            },
            border: '1px solid rgba(183, 183, 183, 0.5)',
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
              background: 'rgba(183, 183, 183, 0.4)',
              borderColor: 'rgba(183, 183, 183, 0.7)'
            }
          }}
          onClick={handleOpen}
        >
          {/* Date Display */}
          <Typography
            sx={{
              fontFamily: "'Vazirmatn', sans-serif",
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: {
                xs: 9.14693,
                sm: 24
              },
              lineHeight: {
                xs: '14px',
                sm: '38px'
              },
              textAlign: 'center',
              color: birthdate ? '#000000' : '#4E4E4E',
              flex: 1
            }}
          >
            {formatDisplayDate(birthdate)}
          </Typography>

          {/* Calendar Icon */}
          <CalendarTodayIcon 
            sx={{ 
              color: '#9E9E9E',
              fontSize: {
                xs: 14,
                sm: 24
              }
            }} 
          />
        </Box>
      </Box>

      {/* Beautiful Calendar Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '16px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
            overflow: 'hidden',
            fontFamily: "'Vazirmatn', sans-serif"
          }
        }}
      >
        {/* Dialog Header */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #7185E7 0%, #5a6fd8 100%)',
            color: 'white',
            padding: {
              xs: '16px 20px',
              sm: '20px 24px'
            },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Vazirmatn', sans-serif",
              fontSize: {
                xs: 16,
                sm: 20
              },
              fontWeight: 600
            }}
          >
            انتخاب تاریخ تولد
          </Typography>
          <IconButton onClick={handleClose} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Calendar Content */}
        <Box sx={{ padding: { xs: 2, sm: 3 } }}>
          <DatePicker
            value={birthdate}
            onChange={(newValue) => {
              setBirthdate(newValue);
              handleClose();
            }}
            openTo="year"
            views={['year', 'month', 'day']}
            slotProps={{
              layout: {
                sx: {
                  '& .MuiDateCalendar-root': {
                    width: '100%',
                    height: 'auto',
                    fontFamily: "'Vazirmatn', sans-serif"
                  },
                  '& .MuiPickersCalendarHeader-root': {
                    direction: 'rtl'
                  },
                  '& .MuiPickersCalendarHeader-label': {
                    fontFamily: "'Vazirmatn', sans-serif",
                    fontSize: { xs: 14, sm: 16 },
                    fontWeight: 600
                  },
                  '& .MuiDayCalendar-weekDayLabel': {
                    fontFamily: "'Vazirmatn', sans-serif",
                    fontSize: { xs: 12, sm: 14 },
                    color: '#7185E7',
                    fontWeight: 600
                  },
                  '& .MuiPickersDay-root': {
                    fontFamily: "'Vazirmatn', sans-serif",
                    fontSize: { xs: 12, sm: 14 },
                    '&.Mui-selected': {
                      background: 'linear-gradient(135deg, #7185E7 0%, #5a6fd8 100%)',
                      color: 'white',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #5a6fd8 0%, #4a5bc0 100%)'
                      }
                    },
                    '&:hover': {
                      background: 'rgba(113, 133, 231, 0.1)'
                    }
                  },
                  '& .MuiPickersYear-yearButton': {
                    fontFamily: "'Vazirmatn', sans-serif",
                    '&.Mui-selected': {
                      background: 'linear-gradient(135deg, #7185E7 0%, #5a6fd8 100%)',
                      color: 'white'
                    }
                  },
                  '& .MuiPickersMonth-monthButton': {
                    fontFamily: "'Vazirmatn', sans-serif",
                    '&.Mui-selected': {
                      background: 'linear-gradient(135deg, #7185E7 0%, #5a6fd8 100%)',
                      color: 'white'
                    }
                  }
                }
              }
            }}
            sx={{
              width: '100%',
              '& .MuiOutlinedInput-root': {
                display: 'none'
              }
            }}
          />
        </Box>
      </Dialog>
    </LocalizationProvider>
  );
}

export default BirthdateInput;