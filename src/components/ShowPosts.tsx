import React, { useState } from "react";
import { CommentType, PostType } from "../model/Models";
import closeBtn from '../assets/gen034.svg'
import './style/ShowStyle.css';
import { userComments } from "../api/UserRepo";
import ShowComments from "./ShowComments";

type propsParm = {
    onClose: VoidFunction,
    onData: PostType
}

export default function ShowPosts(props: propsParm): JSX.Element {

    const CommentData: CommentType[] = []
    const [listOfComments, setListOfComments] = useState(CommentData)
    const [loading, setLoading] = useState(false)

    const [btnComment, setBtnComment] = useState(false)
    const [postId, setpostId] = useState(0)

    const closeComponent = () => {
        props.onClose()
    }

    const getUserComments = async (postId: number) => {
        setBtnComment(true)
        setpostId(postId)
        setLoading(true)
            const ourData = await userComments(postId)
            setListOfComments(ourData?.data)
            setLoading(false)
    }

    return(
        <div data-testid="rootShowPosts" className="rootContainer">
        <button data-testid="btnClose" className="btnClose" onClick={closeComponent}>
            <img className="ImageIcon" src={closeBtn}></img>
        </button>

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
                        <p className="btnText">Comments</p>
                        }
                    </button>
                </div>
        </ul>

        {btnComment && listOfComments[0]?.post_id === postId ?
                <div data-testid="detailsContainer" className="detailsContainer">
                    {listOfComments?.map(((comments: CommentType) => {
                        return(<ShowComments data-testid="listCommentsComp" key={comments.id} onClose={() => setBtnComment(false)}
                                    onData={comments}/> )}
                    ))}
                </div>
            :
            <></>
                }
    </div>
    )
}