'use client';

import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useMemo, useEffect, useRef } from 'react';

const ApolloClientProvider = ({ children }) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const tokenRef = useRef(session?.accessToken || '');

  useEffect(() => {
    if (session?.accessToken) {
      tokenRef.current = session?.accessToken || '';
    }
  }, [session?.accessToken, status]);

  const client = useMemo(() => {
    const httpLink = new HttpLink({
      uri: `${process.env.NEXT_PUBLIC_GRAPHQL_BHN}`
    });

    const authLink = setContext((_, { headers }) => ({
      headers: {
        ...headers,
        Authorization: tokenRef.current ? `Bearer ${tokenRef.current}` : ''
      }
    }));

    const errorLink = onError(({ _, networkError }) => {
      if (networkError) {
        const responseStatus = networkError.response?.status;
        if (networkError.message === 'Failed to fetch') {
          // user is offline
          return;
        }
        // error handling will implement here

        // we will redirect user to login page
        if (responseStatus === 401) {
          signOut({ redirect: false }).then(() => router.push('/login'));
        }
      }
    });

    const cache = new InMemoryCache();

    const link = ApolloLink.from([authLink, errorLink, httpLink]);

    return new ApolloClient({ link, cache });
  }, []);

  if (status !== 'authenticated') return null;

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
