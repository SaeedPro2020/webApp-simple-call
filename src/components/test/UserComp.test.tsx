import { ApolloProvider, gql } from '@apollo/client';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { client } from '../../api/Apolorepo';
import UserComp from '../UserComp';


export const UPDATE_NAME = gql`
mutation Update_users($where: users_bool_exp!, $set: users_set_input) {
    update_users(where: $where, _set: $set) {
      returning {
        id
        name
      }
    }
  }`;

  const waitForData = () => new Promise(resolve => setTimeout(resolve, 0)); // highlight-line


  describe('User Component, edit name', () =>{
    jest.clearAllMocks();

    const renderComponent  = () => (render(
        <ApolloProvider client={client}>
            <UserComp name={'Saeed'} id={"4b795e64-0512-4ea5-bba1-8f9d66cb1875"} />
        </ApolloProvider>
      ));

      it('Check button edit', async () => {
        const { getByText, queryByTestId  } = renderComponent();

        fireEvent.click(getByText('Edit'))
        await waitFor(() => {
            const formEditName = queryByTestId('formEditName');
            expect(formEditName).toBeTruthy();
            })

      })

      it('Test update operation for a user name', async () => {

          const { getByText, getByTestId, queryByTestId  } = renderComponent();
          fireEvent.click(getByText('Edit'))

          await waitFor(async () => {
            const firstInput = getByTestId("nameInput")
            fireEvent.change(firstInput, { target: { value: 'Sara' } })
            fireEvent.click(getByText('Confirm'))
            await waitForData();

                waitFor(() => {
                    expect(getByText('User Name: Sara')).toBeInTheDocument()
                    const Editname = queryByTestId('formEditName');
                    expect(Editname).toBeFalsy();
                })

            })

      })


      it('Test update operation', async () => {

          const { getByText, getByTestId, queryByTestId  } = renderComponent();
          fireEvent.click(getByText('Edit'))

          await waitFor(async () => {
            fireEvent.click(getByText('Confirm'))

               await waitFor(() => {
                    const Editname = queryByTestId('formEditName');
                    expect(Editname).toBeFalsy();
                })

            })

      })


      it('Test Close button', async () => {
        const { getByText, queryByTestId, getByTestId  } = renderComponent();

        fireEvent.click(getByText('Edit'));
    
        await waitFor(async () => {
          fireEvent.click(getByTestId('btnClose3'));
          await waitFor (() => {
            const PostList = queryByTestId('formEditName');
            expect(PostList).toBeFalsy();
          })
        });

    })

    })