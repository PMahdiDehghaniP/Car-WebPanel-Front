import axios from 'axios';
import Credentials from 'next-auth/providers/credentials';
import getNewTokenWithRefreshToken from './refreshTokenHandler';

export const authOptions = {
  providers: [
    Credentials({
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'password', type: 'password' }
      },
      authorize: async (credentials) => {
        try {
          const response = await axios.post(process.env.NEXT_PUBLIC_LOGIN_URL, {
            email: credentials?.email,
            password: credentials?.password
          });

          const user = response.data;
          if (user && user.access_token) {
            return {
              accessToken: user.access_token,
              refreshToken: user.refresh_token,
              idToken: user.id_token,
              expiresAt: Date.now() + user.expires_in * 1000
            };
          }
          return null;
        } catch (error) {
          console.error('Login error:', error);
          return null;
        }
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (token.expiresAt && Date.now() > token.expiresAt) {
        const newToken = await getNewTokenWithRefreshToken(token.refreshToken);
        if (newToken) {
          return {
            ...token,
            accessToken: newToken.access,
            refreshToken: newToken.refresh,
            expiresAt: Date.now() + 5000 * 1000
          };
        } else {
          return {
            ...token,
            accessToken: null,
            error: 'RefreshAccessTokenError'
          };
        }
      }
      if (user) {
        return {
          ...token,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
          expiresAt: user.expiresAt
        };
      }

      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
        expiresAt: token.expiresAt,
        error: token.error
      };
    }
  }
};
export default authOptions;

