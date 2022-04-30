import { act, fireEvent, render, waitFor } from "@testing-library/react"
import axios from "axios";
import UserProfile from '../UserProfile';

// Mock jest and set the type
jest.mock('axios');
const mockedPostAxios = axios as jest.Mocked<typeof axios>;

// 
describe('UserProfile', () =>{

    const renderComponent  = () => (render(
        <UserProfile id={0} name={"Saeed"} email={"email@gmail.com"} gender={"male"} status={"active"} />
    ));

    it('render h3', () => {

        const { queryByTestId } = renderComponent();

        const h3 = queryByTestId("headlineName");
        expect(h3).toBeTruthy();
    });

    it('render status Icon', () => {

        const { queryByTestId } = renderComponent();
        const imgIconActive = queryByTestId("imageActive");
        expect(imgIconActive).toBeTruthy();
    });

    it('IF btn post click', async () =>{
        const { getByText, queryByTestId } = renderComponent();

                  fireEvent.click(getByText('Posts'));

                  await waitFor(() => {
                    const textBtn = queryByTestId('loadingText');
                    expect(textBtn).toBeTruthy();
                  });
    });

    it('btn clicked and have data', async () =>{
        const { getByText, queryByTestId } = renderComponent();

        act(async () => {
                // Provide the data object to be returned
                mockedPostAxios.get.mockResolvedValue({
                    data: [
                      {    
                        id: 0,
                        user_id: 54,
                        title: 'title',
                        body: 'body',
                      }
                    ],
                  });

                  fireEvent.click(getByText('Posts'));

                  await waitFor(() => {
                    const textBtn = queryByTestId('listPostsComp');
                    expect(textBtn).toBeTruthy();
                  });
                })
    });

})