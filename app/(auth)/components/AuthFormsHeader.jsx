import { Box, Typography } from '@mui/material';

const AuthFormsHeader = ({ title, headerIcon }) => (
  <Box
    sx={{
      position: 'relative',
      width: { xs: '80%', md: '50%' },
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <Typography sx={{ fontSize: '2rem', textAlign: 'center' }}>
      {title}
    </Typography>

    {headerIcon}
  </Box>
);
export default AuthFormsHeader;
