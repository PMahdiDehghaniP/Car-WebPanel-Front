'use client';
import { Box, CircularProgress } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { perfectCentering } from '../constants/Styles';

const AuthProvider = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === 'loading') {
    return (
      <Box sx={{ width: '100vw', height: '100vh', ...perfectCentering }}>
        <CircularProgress size={64} />
      </Box>
    );
  }
  if (status === 'authenticated') {
    return router.push('/');
  } else {
    return children;
  }
};
export default AuthProvider;
