import NextAuth from 'next-auth';
import authOptions from './lib/auth/authConfig';

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);
