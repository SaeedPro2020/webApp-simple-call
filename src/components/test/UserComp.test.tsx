import { render } from "@testing-library/react"
import MissionsComp from "../UserComp";

describe('MissionsComp component', () => {
    const renderComponent  = () => (render(
        <MissionsComp name={"A user name"} id={"158fff53-2a76-47c9-8fad-80ee707fb73e"} />
    ));

    it('IF we had a name and payload props', () =>{
        const { queryByTestId } = renderComponent();

        const h3Name = queryByTestId('UserName');


        expect(h3Name).toBeTruthy();

    })
})