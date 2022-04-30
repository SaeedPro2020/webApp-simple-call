import { act, fireEvent, render, waitFor } from "@testing-library/react"
import axios from "axios";
import ShowPosts from "../ShowPosts";
import ShowComments from "../ShowComments";

describe('ShowComment component', () => {
    const renderComponent  = () => (render(
        <ShowComments onClose={() => {}} onData={{
            id: 0,
            post_id: 0,
            name: "Flavio",
            email: "flavio@gmail.com",
            body: "second body"
        }} />
    ));

    const renderParentComponent  = () => (render(
        <ShowPosts onClose={() => {}} onData={{
            id: 0,
            user_id: 0,
            title: "title",
            body: "a body"
        }} />
    ));

    it('render h3', () => {

        const { queryByTestId } = renderComponent();

        const h3 = queryByTestId("headlineName");
        expect(h3).toBeTruthy();
    });

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