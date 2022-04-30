import React from "react";
import { CommentType } from "../model/Models"
import closeBtn from '../assets/gen034.svg'
import './style/ShowStyle.css';

type propsParm = {
    onClose: VoidFunction,
    onData: CommentType
}


export default function ShowComments(props: propsParm): JSX.Element {

    const closeComponent = () => {
        props.onClose()
    }

    return(
        <div className="rootContainer">
        <button data-testid="btnClose2" className="btnClose" onClick={closeComponent}>
            <img className="ImageIcon" src={closeBtn}></img>
        </button>
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