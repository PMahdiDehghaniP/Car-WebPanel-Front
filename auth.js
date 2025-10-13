import NextAuth from 'next-auth';
import authOptions from './lib/auth/authConfig';

export const { handlers, auth, signOut, signIn } = NextAuth(authOptions);
