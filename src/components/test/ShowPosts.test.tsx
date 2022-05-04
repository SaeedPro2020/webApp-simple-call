import { act, fireEvent, render, waitFor } from "@testing-library/react"
import axios from "axios";
import ShowComments from "../ShowComments";
import ShowPosts from "../ShowPosts";
import UserProfile from "../UserProfile";

// Mock jest and set the type
jest.mock('axios');
const mockedCommentAxios = axios as jest.Mocked<typeof axios>;

describe('ShowPosts component', () =>{

  const setBtnPosts: VoidFunction = jest.fn();
  
    const renderComponent  = () => (render(
        <ShowPosts onData={{
            id: 0,
            user_id: 0,
            title: "title",
            body: "a body"
        }} />
    ));

    const renderParentComponent  = () => (render(
      <UserProfile id={0} name={"Saeed"} email={"email@gmail.com"} gender={"male"} status={"active"} />
  ));

    it('IF btn comment click', async () =>{
        const { getByText, queryByTestId } = renderComponent();

                  fireEvent.click(getByText('Comments'));

                  await waitFor(() => {
                    const textBtn = queryByTestId('loadingText');
                    expect(textBtn).toBeTruthy();
                  });
    });

    it('IF btn close click', async () =>{
      const { getByTestId } = renderComponent();

      const { queryByTestId } = renderParentComponent();

                fireEvent.click(getByTestId('btnClose'));

                await waitFor(() => {
                  const rootElement = queryByTestId('listPostsComp');
                  expect(rootElement).toBeFalsy();
                  expect(setBtnPosts).toBeCalled()
                });
  });

  it('should render list of users', async () =>{

    const { getByText, queryByTestId } = renderComponent();

        // Provide the data object to be returned.
        mockedCommentAxios.get.mockResolvedValue({
          data: [
            {    
              id: 0,
              post_id: 0,
              name: 'Saeed',
              email: 'test@gmail.com',
              body: 'a body',
            }
          ],
        });

    fireEvent.click(getByText('Comments'));

    await waitFor(() => {
      const userList = queryByTestId('detailsContainer');
      expect(userList).toBeTruthy();
    });
  });

});