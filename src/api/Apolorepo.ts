import {
    ApolloClient,
    InMemoryCache,
    gql
  } from "@apollo/client";


  export const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/',
    cache: new InMemoryCache()
  });
  
  export const EXCHANGE_MISSIONS = gql`
  query Missions {
    missions {
      name
      website
      manufacturers
      payloads {
        orbit
        nationality
        manufacturer
      }
    }
  }`;
