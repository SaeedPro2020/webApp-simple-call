import { act, fireEvent, render, waitFor } from "@testing-library/react"
import axios from "axios";
import UserProfile from '../UserProfile';

// Mock jest and set the type
jest.mock('axios');
const mockedPostAxios = axios as jest.Mocked<typeof axios>;

// 
describe('UserProfile', () =>{

    const renderComponent  = () => (render(
        <UserProfile id={12} name={"Saeed"} email={"email@gmail.com"} gender={"male"} status={"active"} />
    ));

    const render2Component  = () => (render(
        <UserProfile id={12} name={"Francesca"} email={"Francesca@gmail.com"} gender={"female"} status={"inactive"} />
    ));

    it('IF btn post click', async () =>{
        const { getByText, queryByTestId } = renderComponent();

                  fireEvent.click(getByText('Posts'));

                  await waitFor(() => {
                    const textBtn = queryByTestId('loadingText');
                    expect(textBtn).toBeTruthy();
                  });
    });

    it('should render list of posts', async () =>{

        const { getByText, queryByTestId } = renderComponent();
    
            // Provide the data object to be returned
            mockedPostAxios.get.mockResolvedValue({
              data: [
                {    
                    id: 0,
                    user_id: 12,
                    title: "title",
                    body: "a body",
                }
              ],
            });
    
        fireEvent.click(getByText('Posts'));
    
        await waitFor(() => {
          const PostList = queryByTestId('detailsPostContainer');
          expect(PostList).toBeTruthy();
        });
      });

      it('test icons for coditional rendering', () => {
        const { queryByTestId } = renderComponent();

        const imageIcon1 = queryByTestId('maleIcon');
        const imageIcon2 = queryByTestId('femaleIcon');
        const imageIcon3 = queryByTestId('activeIcon');
        const imageIcon4 = queryByTestId('inActiveIcon');

        expect(imageIcon1).toBeTruthy();
        expect(imageIcon2).toBeFalsy();

        expect(imageIcon3).toBeTruthy();
        expect(imageIcon4).toBeFalsy();
      });

      it('test icons for coditional rendering', () => {
        const { queryByTestId } = render2Component();

        const imageIcon1 = queryByTestId('maleIcon');
        const imageIcon2 = queryByTestId('femaleIcon');
        const imageIcon3 = queryByTestId('activeIcon');
        const imageIcon4 = queryByTestId('inActiveIcon');

        expect(imageIcon1).toBeFalsy();
        expect(imageIcon2).toBeTruthy();

        expect(imageIcon3).toBeFalsy();
        expect(imageIcon4).toBeTruthy();
      });

})