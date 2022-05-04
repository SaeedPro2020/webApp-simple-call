import { fireEvent, render, waitFor } from "@testing-library/react"
import ShowPosts from "../ShowPosts";
import ShowComments from "../ShowComments";

describe('ShowComment component', () => {
    const renderComponent  = () => (render(
        <ShowComments onData={{
            id: 0,
            post_id: 0,
            name: "Flavio",
            email: "flavio@gmail.com",
            body: "second body"
        }} />
    ));

    const renderParentComponent  = () => (render(
        <ShowPosts onData={{
            id: 0,
            user_id: 0,
            title: "title",
            body: "a body"
        }} />
    ));

    it('IF btn close click', async () =>{
        const { getByTestId } = renderComponent();
  
        const { queryByTestId } = renderParentComponent();
  
                  fireEvent.click(getByTestId('btnClose2'));
  
                  await waitFor(() => {
                    const rootElement = queryByTestId('listCommentsComp');
                    expect(rootElement).toBeFalsy();
                  });
    });
})