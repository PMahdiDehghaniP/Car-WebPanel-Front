'use client';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const SessionControllerProvider = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;
    const controlSession = async () => {
      if (session?.error === 'RefreshAccessTokenError') {
        document.cookie = 'authjs.session-token=; path=/; max-age=0';
        await signOut({ redirect: false });
        router.push('/login');
      }
    };
    controlSession();
  }, [session, status]);
  return <>{children}</>;
};

export default SessionControllerProvider;
