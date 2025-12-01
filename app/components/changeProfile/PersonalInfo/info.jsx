import { Box, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';

const DesktopPersonalInfo = styled(Box)({
  position: 'absolute',
  width: '1123px',
  height: '1382px',
  left: '678px',
  top: '399px',
  background: '#FFFFFF',
  boxShadow: '0px 3.01519px 6.03038px rgba(0, 0, 0, 0.19)',
  borderRadius: '30.1519px'
});

const PersonalContainer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return <DesktopPersonalInfo></DesktopPersonalInfo>;
};
export default PersonalContainer;
