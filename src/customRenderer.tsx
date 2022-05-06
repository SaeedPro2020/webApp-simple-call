import * as React from "react"
import { render } from "@testing-library/react"
import { MockedProvider, MockedResponse } from "@apollo/client/testing"


export const customRendere = (
    node: JSX.Element | null,
    mocks?: MockedResponse[],
) => {
    return{
        ...render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <div>
                   <div>{node}</div>
                </div>
            </MockedProvider>
        )
    }
}