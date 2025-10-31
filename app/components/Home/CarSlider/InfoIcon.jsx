import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const InfoIcon = ({ icon, info }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    {icon}
    <Typography sx={{ fontSize: '14px', fontWeight: 400 }}>{info}</Typography>
  </Box>
);
export default InfoIcon;
