import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const publicApolloClient = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_BHN
  }),
  cache: new InMemoryCache()
});
