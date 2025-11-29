'use client';
import { Box, Button, Typography, useTheme } from '@mui/material';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import StraightenIcon from '@mui/icons-material/Straighten';
import SpeedIcon from '@mui/icons-material/Speed';
import ScaleIcon from '@mui/icons-material/Scale';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import ShieldIcon from '@mui/icons-material/Shield';
import StarIcon from '@mui/icons-material/Star';
import ColorLensIcon from '@mui/icons-material/ColorLens';

const CarInformation = ({ carInfoData }) => {
  const theme = useTheme();

  const mockData = [
    {
      label: 'نوع سوخت:',
      value: `${carInfoData?.fuelType}`,
      icon: <LocalGasStationIcon />
    },
    {
      label: 'مصرف ترکیبی:',
      value: `${carInfoData?.combinedFuelConsumption} در  هر  100 کیلومتر `,
      icon: <SpeedIcon />
    },
    {
      label: 'وزن خالص:',
      value: `${carInfoData?.curbWeightKg} کیلوگرم`,
      icon: <ScaleIcon />
    },
    {
      label: 'ابعاد (طول × عرض × ارتفاع):',
      value: `${carInfoData?.dimensionsMm} میلی متر`,
      icon: <StraightenIcon />
    },
    {
      label: 'فاصله بین دو محور:',
      value: `${carInfoData?.wheelbaseMm}  میلی متر `,
      icon: <DirectionsCarIcon />
    },
    {
      label: 'حجم صندوق:',
      value: `${carInfoData?.trunkVolumeL}  لیتر `,
      icon: <ScaleIcon />
    },
    {
      label: 'ظرفیت سرنشین:',
      value: `${carInfoData?.seatingCapacity} نفر `,
      icon: <GroupsIcon />
    },
    {
      label: 'سیستم مالتی‌مدیا:',
      value: 'نمایشگر لمسی ۱۱.۹ اینچی MBUX + نمایشگر دیجیتال ۱۳.۳ اینچی',
      icon: <SettingsIcon />
    },
    {
      label: 'سیستم‌های ایمنی و کمکی:',
      value: 'ترمز خودکار اضطراری، نگهدارنده بین خطوط، هشدار نقطه کور',
      icon: <ShieldIcon />
    },
    { label: 'ایمنی:', value: '۵ ستاره Euro NCAP', icon: <StarIcon /> },
    {
      label: 'رنگ:',
      value: 'مشکی متالیک (Obsidian Black Metallic)',
      icon: <ColorLensIcon />
    }
  ];

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        paddingX: '52px',
        paddingY: '56px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          width: '100%',
          gap: '1.5rem',
          mb: 2
        }}
      >
        <Typography sx={{ fontWeight: 700, fontSize: '2rem' }}>
          اطلاعات تکمیلی
        </Typography>
        <Button
          sx={{
            fontSize: '2rem',
            height: '60px',
            backgroundColor: '#D8D8D8',
            color: '#000000',
            borderColor: '#D8D8D8',
            '&hover': { backgroundColor: '#D8D8D8' }
          }}
          variant="outlined"
          size="medium"
        >
          مقایسه
        </Button>
      </Box>

      {mockData.map((data, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor:
              index % 2 === 1
                ? theme.palette.colors.colorGrayRow
                : 'transparent',
            width: '100%',
            padding: '12px 16px',
            gap: '0.5rem',
            borderRadius: '4px'
          }}
        >
          {data.icon}
          <Typography sx={{ fontWeight: 500 }}>{data.label}</Typography>
          <Typography sx={{ fontWeight: 400 }}>{data.value}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default CarInformation;
