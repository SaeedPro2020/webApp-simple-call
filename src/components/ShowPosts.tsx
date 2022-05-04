import React, { useState } from "react";
import { CommentType, PostType } from "../model/Models";
import './style/ShowStyle.css';
import { userComments } from "../api/UserRepo";
import ShowComments from "./ShowComments";
import closeBtn from '../assets/gen034.svg'

type propsParm = {
    // onClose: VoidFunction,
    onData: PostType
}

export default function ShowPosts(props: propsParm): JSX.Element {

    const CommentData: CommentType[] = []
    const [listOfComments, setListOfComments] = useState(CommentData)
    const [loading, setLoading] = useState(false)

    const [btnComment, setBtnComment] = useState(false)
    const [postId, setpostId] = useState(0)

    const getUserComments = async (postId: number) => {
        setBtnComment(true)
        setpostId(postId)
        setLoading(true)
            const ourData = await userComments(postId)
            console.log(ourData);
            
            setListOfComments(ourData?.data)
            setLoading(false)
    }

    return(
        <div data-testid="rootShowPosts" className="rootContainer">

        <h3 data-testid="headlineName" className="headlineDetails">Posts</h3>
        <ul>
                <div key={props.onData.id}>
                    <li className="postLists">
                        {"Title: " + props.onData?.title}
                    </li>
                    <li className="postLists">{"Body" + props.onData?.body}</li>

                    <button className="Buttons" onClick={() => getUserComments(props.onData.id)}>
                        {loading &&  listOfComments.length === 0 ?
                        <p data-testid="loadingText" className="btnText">...Loading</p>
                        :
                        <p data-testid="CommentText" className="btnText">Comments</p>
                        }
                    </button>
                </div>
        </ul>

        {btnComment && listOfComments[0]?.post_id === postId ?
                <div data-testid="rootDetailsCountainer" className="detailsContainer">
                    <button data-testid="btnClose" className="btnClose" onClick={() => setBtnComment(false)}>
                        <img className="ImageIcon" src={closeBtn}></img>
                    </button> 
                <div data-testid="detailsContainer">
                    {listOfComments?.map(((comments: CommentType) => {
                        return(<ShowComments data-testid="listCommentsComp" key={comments.id} onData={comments}/> )}
                    ))}
                </div>
                </div>
            :
            <></>
                }
    </div>
    )
}