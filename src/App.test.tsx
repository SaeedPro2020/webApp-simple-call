import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import axios from 'axios';
import { ApolloProvider } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import { GraphQLError } from 'graphql/error/GraphQLError';
import { client } from './api/Apolorepo';

// Mock jest and set the type
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('App', () =>{
  const renderComponent  = () => (render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  ));

  it('should render list of users', async () =>{

    const { getByText, queryByTestId } = renderComponent();

        // Provide the data object to be returned
        mockedAxios.get.mockResolvedValue({
          data: [
            {    
              id: 0,
              name: 'Saeed',
              email: 'saeed@gmail.com',
              gender: 'male',
              status: 'active',
            }
          ],
        });

    fireEvent.click(getByText('Get users'));

    await waitFor(() => {
      const userList = queryByTestId('headlineName');
      expect(userList).toBeTruthy();
    });
  });

  it('should render missions part', async () =>{

    const { getByText, queryByTestId } = renderComponent();

    fireEvent.click(getByText('Get Missions'));

    await waitFor(() => {
      const userList = queryByTestId('missionsRoot');
      expect(userList).toBeTruthy();
    });
  });

  // it('should render missionComponents', async () => {
  //   const missionMock = {
  //     request: {
  //       query: EXCHANGE_USER,
  //       variables: { nationality: 'missions' },
  //     },
  //     result: {
  //       data: { missions: [{ 
  //         name: 'Thaicom', 
  //         website: 'http://www.thaicom.net/en/satellites/overview',
  //         __typename:'Mission',
  //         manufacturers:['Orbital ATK', 'something'],
  //         payloads: [{manufacturer: 'Orbital ATK', nationality: 'Thailand', orbit: 'GTO', __typename:'Payload'}] 
  //     }] },
  //     },
  //   };
  
  //   const component = () => (render(
  //     <MockedProvider mocks={[missionMock]} addTypename={false}>
  //       <App />
  //     </MockedProvider>,
  //   ));

  //   const { getByText, queryByTestId } = component();

  //   fireEvent.click(getByText('Get Missions'))
  //   await new Promise(resolve => setTimeout(resolve, 0)); // highlight-line
  
  //   const missionList = queryByTestId('missionComponents');
  //   expect(missionList).toBeTruthy();
    
  // });

  // it('should render missionComponents', async () => {
  //   const missionMock = {
  //     request: {
  //       query: EXCHANGE_USER
  //     },
  //     result: {
  //       errors: [new GraphQLError('Error!')],
  //     },
  //   }
  
  //   const component = () => (render(
  //     <MockedProvider mocks={[missionMock]} addTypename={false}>
  //       <App />
  //     </MockedProvider>,
  //   ));

  //   const { getByText, queryByTestId } = component();

  //   fireEvent.click(getByText('Get Missions'))
  //   await new Promise(resolve => setTimeout(resolve, 0)); // highlight-line
  
  //   const error = queryByTestId('error');
  //   expect(error).toBeTruthy();
    
  // });
})
