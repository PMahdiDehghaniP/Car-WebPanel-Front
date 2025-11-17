'use client';
import { Suspense } from 'react';
import PasswordRecoveryPage from './components/PasswordRecoveryPage';
export default function PasswordRecoveryPageWrapper() {
  return (
    <Suspense fallback={null}>
      <PasswordRecoveryPage />
    </Suspense>
  );
}

