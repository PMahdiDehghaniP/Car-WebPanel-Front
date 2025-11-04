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
              idToken: user.id_token,
              accessToken: user.access_token,
              refreshToken: user.refresh_token,
              expiresAt: Date.now() + user.expires_in * 1000
            };
          }
          return null;
        } catch (error) {
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
      if (user) {
        return {
          ...token,
          idToken: user.idToken,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
          expiresAt: user.expiresAt
        };
      }

      if (!token.error && token.expiresAt && Date.now() > token.expiresAt) {
        try {
          const newToken = await getNewTokenWithRefreshToken(
            token.refreshToken
          );

          if (newToken?.access_token) {
            return {
              ...token,
              accessToken: newToken.access_token,
              refreshToken: newToken.refresh_token,
              expiresAt: Date.now() + newToken.expires_in * 1000
            };
          } else {
            return {
              ...token,
              accessToken: null,
              error: 'RefreshAccessTokenError'
            };
          }
        } catch (error) {
          console.error('Refresh token error:', error);
          return {
            ...token,
            accessToken: null,
            error: 'RefreshAccessTokenError'
          };
        }
      }

      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        idToken: token.idToken,
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
        expiresAt: token.expiresAt,
        error: token.error
      };
    }
  }
};
export default authOptions;
