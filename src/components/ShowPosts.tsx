import React, { useState } from "react";
import { CommentType, PostType } from "../model/Models";
import { userComments } from "../api/UserRepo";
import ShowComments from "./ShowComments";
import closeBtn from '../assets/gen034.svg'
import { ButtonText, CloseBtn, Container } from "./styles/ShowStyle.styled";

type propsParm = {
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
// 
    return(
        <Container data-testid="rootShowPosts">

        <h3 data-testid="headlineName">Posts</h3>
        <ul>
                <div key={props.onData.id}>
                    <li>
                        {"Title: " + props.onData?.title}
                    </li>
                    <li className="postLists">{"Body" + props.onData?.body}</li>

                    <button onClick={() => getUserComments(props.onData.id)}>
                        {loading &&  listOfComments.length === 0 ?
                        <ButtonText data-testid="loadingText">...Loading</ButtonText>
                        :
                        <ButtonText data-testid="CommentText">Comments</ButtonText>
                        }
                    </button>
                </div>
        </ul>

        {btnComment && listOfComments[0]?.post_id === postId ?
                <div data-testid="rootDetailsCountainer" className="detailsContainer">
                    <CloseBtn data-testid="btnClose" onClick={() => setBtnComment(false)}>
                        <img src={closeBtn}></img>
                    </CloseBtn> 
                <div data-testid="detailsContainer">
                    {listOfComments?.map(((comments: CommentType) => {
                        return(<ShowComments data-testid="listCommentsComp" key={comments.id} onData={comments}/> )}
                    ))}
                </div>
                </div>
            :
            <></>
                }
    </Container>
    )
}