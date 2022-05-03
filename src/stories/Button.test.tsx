import { act, fireEvent, render, waitFor } from "@testing-library/react"
import { Button } from "./Button";

describe('ShowPosts component', () =>{
    const renderComponent  = () => (render(
        <Button label={"btn"} />
    ));

    it('render button', () => {

        const { queryByRole} = renderComponent();

        const btn = queryByRole('button');
        expect(btn).toBeTruthy();
    });
})