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

  // export const ADD_MISSIONS = gql`
  // mutation AddMission($name: String!, $website: String!, $manufacturers: String!, $orbit: String!,
  //   $nationality: String!, $manufacturer: String!) {
  //   addMission(name: $name, website: $website, manufacturers: $manufacturers,
  //     payloads: {
  //       $orbit
  //       $nationality
  //       $manufacturer
  //     }) {
  //     id
  //     name
  //     website
  //     manufacturers
  //     payloads
  //   }
  // }`;
