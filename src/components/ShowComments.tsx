import React from "react";
import { CommentType } from "../model/Models"
import { Container } from "./styles/ShowStyle.styled";

type propsParm = {
    onData: CommentType
}


export default function ShowComments(props: propsParm): JSX.Element {

    return(
        <Container>
    <h3 data-testid="headlineName">Comments</h3>
    <ul>
            <div>
                <li>
                    {"Name: " + props.onData?.name}
                </li>
                <li>{"Body" + props.onData?.body}</li>
            </div>
    </ul>
</Container>
    )
}