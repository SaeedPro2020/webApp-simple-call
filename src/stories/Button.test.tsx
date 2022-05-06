import { act, fireEvent, render, waitFor } from "@testing-library/react"
import { Button } from "./Button";

describe('ShowPosts component', () =>{
    const renderComponent  = () => (render(
        <Button label={"btn"} />
    ));


    const renderComponent2  = () => (render(
        <Button label={"btn"} primary={true}/>
    ));


    it('render button', () => {

        const { queryByRole} = renderComponent();

        const btn = queryByRole('button');
        expect(btn).toBeTruthy();
    });

        it('test mode feature', () => {

        const { queryByRole} = renderComponent2();

        const btn = queryByRole('button');
        expect(btn?.getElementsByClassName('storybook-button--primary')).toBeTruthy();
    });
})