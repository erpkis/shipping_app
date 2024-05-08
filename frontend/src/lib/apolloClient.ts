import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  ssrMode: typeof window === 'undefined', // Ustaw tryb SSR na true, jeśli jesteśmy po stronie serwera
  link: new HttpLink({
    uri: 'http://localhost:3000/graphql', // Wpisz adres URL twojego endpointa GraphQL
  }),
  cache: new InMemoryCache(),
});

export default client;
