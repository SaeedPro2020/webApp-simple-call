import { ApolloProvider, gql } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import { fireEvent, getByTestId, render, waitFor } from '@testing-library/react';
import React from 'react';
import { client } from '../../api/Apolorepo';
import { Users_Insert_Input } from '../../api/graphql-frontend';
import App from '../../App';
import { customRendere } from '../../customRenderer';
import AddUser from '../AddUser';


export const EXCHANGE_USER = gql`
mutation Mutation($objects: [users_insert_input!]!) {
    insert_users(objects: $objects) {
      affected_rows
      returning {
        id
        name
        rocket
        timestamp
        twitter
      }
    }
  }`;

  const waitForData = () => new Promise(resolve => setTimeout(resolve, 1)); // highlight-line


  describe('App', () =>{
    jest.clearAllMocks();

    const renderComponent  = () => (render(
        <ApolloProvider client={client}>
            <AddUser />
        </ApolloProvider>
      ));

    it('check inputs in AddUser', async () => {

        const { getByTestId } = renderComponent();

        const firstInput = getByTestId("nameInput")
        const secondInput = getByTestId("nameRocket")

        fireEvent.change(firstInput, { target: { value: 'a name' } })
        expect(firstInput).toHaveDisplayValue('a name');

        fireEvent.change(secondInput, { target: { value: 'rocket name' } })
        expect(secondInput).toHaveDisplayValue('rocket name');
        
      });

      it('should test the mutation operation', async () => {

        const { getByText, queryByTestId } = renderComponent();

        fireEvent.click(getByText('Add User'))
        await waitForData();
        
        await waitFor(() => {
            const textSuccess = queryByTestId('dataSent');
            expect(textSuccess).toBeTruthy();
            })

        // const ourObject: Users_Insert_Input = {id: "4b795e64-0512-4ea5-bba1-8f9d66cb1875", 
        // name: "nice", rocket: "ok", timestamp: "2022-05-05T14:56:39.148105+00:00", twitter: "good"}
        
        // const userMock = {
        //     request: {
        //       query: EXCHANGE_USER,
        //       variables: {objects:[ourObject]},
        //     },
        //     result: {
        //       data: {
        //         users: [
        //           {
        //             id: "4b795e64-0512-4ea5-bba1-8f9d66cb1875",
        //             name: "nice",
        //             rocket: "ok",
        //             timestamp: "2022-05-05T14:56:39.148105+00:00",
        //             twitter: "good"
        //           }
        //         ]
        //         }
        //   }
        // };

        // const { getByText, queryByTestId } = customRendere(<AddUser/>, [userMock]);

      })


      
      it('should test the refetch after mutation operation', async () => {

        const ourObject: Users_Insert_Input = {id: "4b795e64-0512-4ea5-bba1-8f9d66cb1875", 
        name: "nice", rocket: "ok", timestamp: "2022-05-05T14:56:39.148105+00:00", twitter: "good"}

        const userMock2 = {
            request: {
              query: EXCHANGE_USER,
              variables: {objects:[ourObject]},
            },
            error: new Error('An error occurred'),
        };

        // const { getByTestId, getByText } = customRendere(<AddUser/>, [userMock2]);

        const renderComponent2  = () => (render(
            <MockedProvider mocks={[userMock2]} addTypename={false}>
                <AddUser />
            </MockedProvider>
          ));

          const { getByTestId, getByText } = renderComponent2()

        fireEvent.click(getByText('Add User'))
        await waitForData();
        
        await waitFor(async () => {
                const textName = getByTestId('error2');
                expect(textName).toBeTruthy();
            })

      })

  })
