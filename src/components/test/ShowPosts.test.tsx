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
  const setBtnComments: VoidFunction = jest.fn();
  
    const renderComponent  = () => (render(
        <ShowPosts onClose={setBtnPosts} onData={{
            id: 0,
            user_id: 0,
            title: "title",
            body: "a body"
        }} />
    ));

    const renderParentComponent  = () => (render(
      <UserProfile id={0} name={"Saeed"} email={"email@gmail.com"} gender={"male"} status={"active"} />
  ));

  const renderChildomponent  = () => (render(
    <ShowComments onClose={setBtnComments} onData={{
      id: 0,
      post_id: 12,
      name: "Jon",
      email: "Jon@gmail.com",
      body: "one body"
    }} />
));

    it('render h3', () => {

        const { queryByTestId } = renderComponent();

        const h3 = queryByTestId("headlineName");
        expect(h3).toBeTruthy();
    });

    it('IF btn comment click', async () =>{
        const { getByText, queryByTestId } = renderComponent();

                  fireEvent.click(getByText('Comments'));

                  await waitFor(() => {
                    const textBtn = queryByTestId('loadingText');
                    expect(textBtn).toBeTruthy();
                  });
    });
// 
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

    it('IF btn Comments clicked and have data', async () =>{
        const { getByText, queryByTestId } = renderComponent();

        act(async () => {
                // Provide the data object to be returned
                mockedCommentAxios.get.mockResolvedValue({
                    data: [
                      {    
                        id: 0,
                        post_id: 12,
                        name: 'Jon',
                        email: 'Jon@gmail.com',
                        body: 'one body'
                      }
                    ],
                  });

                  fireEvent.click(getByText('Comments'));

                  waitFor(() => {
                    const listOfComments = queryByTestId('listCommentsComp');
                    const divContainer = queryByTestId("detailsContainer")
                    expect(listOfComments).toBeTruthy();
                    expect(divContainer).toBeTruthy();
                    expect(listOfComments).toBeCalledTimes(1);
                  });

                })
                
    });

});