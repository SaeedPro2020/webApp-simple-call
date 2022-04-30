import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import axios from 'axios';

// Mock jest and set the type
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('App', () =>{
  const renderComponent  = () => (render(<App />));

  it('should render some componets', async () =>{

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
})
