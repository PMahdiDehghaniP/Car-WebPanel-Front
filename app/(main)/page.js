'use client';

import { ApolloProvider } from '@apollo/client';
import { publicApolloClient } from '@/providers/PublicClientProvider';
import HomeContent from './HomeContent';

const Home = () => {
  return (
    <ApolloProvider client={publicApolloClient}>
      <HomeContent />
    </ApolloProvider>
  );
};

export default Home;
