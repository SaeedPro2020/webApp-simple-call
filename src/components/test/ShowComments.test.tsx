import { render } from "@testing-library/react"
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

    it('IF component render', async () =>{
        const { getByTestId } = renderComponent();
  
                    const rootElement = getByTestId('headlineName');
                    expect(rootElement).toBeTruthy();
    });
})