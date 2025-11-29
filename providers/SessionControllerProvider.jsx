'use client';
import { CircularProgress, Box } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const SessionControllerProvider = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== 'loading') {
      if (session?.error === 'RefreshAccessTokenError') {
        document.cookie = 'authjs.session-token=; path=/; max-age=0';
        signOut({ redirect: false }).then(() => router.push('/login'));
      }
    }
  }, [session, status, router]);

  if (status === 'loading') {
    return (
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <CircularProgress size={64} />
      </Box>
    );
  }

  return <>{children}</>;
};

export default SessionControllerProvider;
