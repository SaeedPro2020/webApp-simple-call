import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import axios from 'axios';
import { ApolloProvider, gql } from '@apollo/client';
import { client } from './api/Apolorepo';
import { customRendere } from './customRenderer';

export const EXCHANGE_USER = gql`
query Users {
  users {
    id
    name
    rocket
  }
}`;

const waitForData = () => new Promise(resolve => setTimeout(resolve, 1)); // highlight-line

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

    fireEvent.click(getByText('Get Users Apollo'));

    await waitFor(() => {
      const userList = queryByTestId('missionsRoot');
      expect(userList).toBeTruthy();
    });
  });

  it('should render userComponents', async () => {
    const userMock = {
      request: {
        query: EXCHANGE_USER,
        variables: {},
      },
      result: {
        data: {
          users: [
            {
              name: " nice",
              rocket: "ok",
              timestamp: "2022-05-05T14:56:39.148105+00:00",
              id: "4b795e64-0512-4ea5-bba1-8f9d66cb1875",
              twitter: "good"
            }
          ]
          }
    }
  };

    const { getByText, queryByTestId } = customRendere(<App/>, [userMock]);

    fireEvent.click(getByText('Get Users Apollo'))
    await waitForData();
  
    await waitFor(() => {
    const missionList = queryByTestId('UserName');
    expect(missionList).toBeTruthy();
    })
    
  });

  it('should render error', async () => {
    const userMock = {
      request: {
        query: EXCHANGE_USER,
        variables: {},
      },
      error: new Error('An error occurred'),
  };

    const { getByText, queryByTestId } = customRendere(<App/>, [userMock]);

    fireEvent.click(getByText('Get Users Apollo'))
    await waitForData();
  
    await waitFor(() => {
    const textError = queryByTestId('error');
    expect(textError).toBeTruthy();
    })
    
  });

})
