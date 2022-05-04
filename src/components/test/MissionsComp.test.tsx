import { render } from "@testing-library/react"
import MissionsComp from "../MissionsComp";

describe('MissionsComp component', () => {
    const renderComponent  = () => (render(
        <MissionsComp name={"A mission name"} payloads={[
            {
            orbit: 'a orbit',
            nationality: 'Italian',
            manufacturer: 'Fiat',
            __typename: 'paloads',
            }
        ]} />
    ));

    const render2Component  = () => (render(
        <MissionsComp name={"second mission name"} payloads={[
            {
                orbit: 'a orbit',
                nationality: null,
                manufacturer: 'Fiat',
                __typename: 'paloads',
                }
        ]} />
    ));

    it('IF we had a name and payload props', () =>{
        const { queryByTestId } = renderComponent();

        const h3Name = queryByTestId('MissionName');
        const divContaioner = queryByTestId('Nationality');
        const pTag1Nationality = queryByTestId('NationalityExist');
        const pTag2Nationality = queryByTestId('NationalityNotExist');


        expect(h3Name).toBeTruthy();
        expect(divContaioner).toBeTruthy();
        expect(pTag1Nationality).toBeTruthy();
        expect(pTag2Nationality).toBeFalsy();

    })

    it('IF payload be null', () =>{
        const { queryByTestId } = render2Component();

        const pTag2Nationality = queryByTestId('NationalityNotExist');
        expect(pTag2Nationality).toBeTruthy();

    })
})