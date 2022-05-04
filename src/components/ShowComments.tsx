import React from "react";
import { CommentType } from "../model/Models"
import './style/ShowStyle.css';

type propsParm = {
    onData: CommentType
}


export default function ShowComments(props: propsParm): JSX.Element {

    return(
        <div className="rootContainer">
    <h3 data-testid="headlineName" className="headlineDetails">Comments</h3>
    <ul>
            <div>
                <li className="postLists">
                    {"Name: " + props.onData?.name}
                </li>
                <li className="postLists">{"Body" + props.onData?.body}</li>
            </div>
    </ul>
</div>
    )
}