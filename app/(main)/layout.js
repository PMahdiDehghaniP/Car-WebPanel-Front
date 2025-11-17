'use server';
import { Box } from '@mui/material';
import Navbar from '../components/Bar/Navbar';
import Footer from '../components/Home/Footer';

const MainLayout = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        gap: '1.5rem'
      }}
    >
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};
export default MainLayout;
