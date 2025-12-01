'use client';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Tooltip,
  Typography,
  useTheme
} from '@mui/material';
import { Box } from '@mui/system';
import InfoIcon from './InfoIcon';
import {
  SpeedOutlined,
  LocalGasStationOutlined,
  CallMadeOutlined,
  BookmarkBorderOutlined
} from '@mui/icons-material';
import { perfectCentering } from '@/app/constants/Styles';
import { useRouter } from 'next/navigation';
const CarCard = ({
  imageSrc,
  imageAlt,
  carName,
  description,
  carInformation,
  price,
  onClick,
  carId
}) => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <Card
      sx={{
        maxWidth: '330px',
        maxHeight: '430px',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '0.75rem',
        position: 'relative'
      }}
    >
      <CardMedia
        component="img"
        alt={imageAlt}
        sx={{
          height: '220px',
          width: '100%',
          objectFit: 'cover',
          position: 'relative'
        }}
        image={imageSrc}
      />
      <Box
        component="button"
        onClick={onClick}
        sx={{
          ...perfectCentering,
          backgroundColor: theme.palette?.carSlider?.iconMediBgColor,
          position: 'absolute',
          top: 10,
          marginRight: '10px',
          borderRadius: '100%',
          width: '3rem',
          height: '3rem'
        }}
      >
        <BookmarkBorderOutlined
          sx={{ color: theme.palette?.carSlider?.iconMediaColor }}
        />
      </Box>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'end',
          flexGrow: 1,
          paddingRight: '1.25rem',
          paddingLeft: '1.25rem',
          gap: '0.5rem'
        }}
      >
        <Typography sx={{ fontSize: '18px', fontWeight: 500 }}>
          {carName}
        </Typography>

        <Tooltip title={description} placement="bottom-end">
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 400,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              width: '100%',
              textOverflow: 'ellipsis',
              cursor: 'pointer'
            }}
          >
            {description}
          </Typography>
        </Tooltip>
        <Divider sx={{ borderColor: '#E9E9E9', width: '100%' }} />

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%'
          }}
        >
          <InfoIcon
            icon={<SpeedOutlined fontSize="small" />}
            info={carInformation?.maxSpeed}
          />
          <InfoIcon
            icon={<LocalGasStationOutlined fontSize="small" />}
            info={carInformation?.gasType}
          />
          <InfoIcon
            icon={<LocalGasStationOutlined fontSize="small" />}
            info={carInformation?.gearboxType}
          />
        </Box>

        <Divider sx={{ borderColor: '#E9E9E9', width: '100%' }} />

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Button
            sx={{ display: 'flex', gap: '0.25rem' }}
            onClick={() => router.push(`/dashboard/car-details/${carId}`)}
          >
            <CallMadeOutlined fontSize="medium" />
            مشخصات کامل
          </Button>
          <Typography sx={{ fontSize: '20px', fontWeight: 700 }}>
            {price}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
export default CarCard;
