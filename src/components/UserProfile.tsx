import React, { useState } from "react";
import imageProfile from '../assets/blank.png'
import mailIcon from '../assets/empty-email.svg'
import maleAvetar from '../assets/009-boy-4.svg'
import femaleAvetar from '../assets/013-girl-6.svg'
import activeStatus from '../assets/activeIcon.png'
import inactiveStatus from '../assets/inactive.jpg'
import { userPosts } from "../api/UserRepo";
import { PostType, userType } from "../model/Models";
import ShowPosts from "./ShowPosts";
import closeBtn from '../assets/gen034.svg'
import { ButtonText, CardIcon, CloseBtn, Container, UserCard, UserPosts } from "./styles/UserProfile.styled";

export default function UserProfile(props: userType): JSX.Element {

    const postData: PostType[] = []
    const [listOfPosts, setListOfPosts] = useState(postData)

    const [btnPost, setBtnPost] = useState(false)
    const [loading, setLoading] = useState(false)

    const getUserPosts = async () => {
            setBtnPost(true)
            setLoading(true)
            const ourData = await userPosts(props.id)
            console.log(ourData);
            setListOfPosts(ourData?.data)
            setLoading(false)
    }
    
    return(
        <Container>

        <UserCard>
           
            <img src={imageProfile}></img>
            
            <div>
                <h3 data-testid="headlineName">{props.name}</h3>

                <CardIcon>
                    <img src={mailIcon}></img>
                    <p>{props.email}</p>
                </CardIcon>

                <CardIcon>
                    {props.gender === "male" ?
                    <img data-testid="maleIcon" src={maleAvetar}></img>
                    :
                    <img data-testid="femaleIcon" src={femaleAvetar}></img>
                    }
                    <p>{props.gender}</p>
                </CardIcon>

                <CardIcon>
                    {props.status === "active" ?
                    <img data-testid="activeIcon" src={activeStatus}></img>
                    :
                    <img data-testid="inActiveIcon" src={inactiveStatus}></img>
                    }
                    <p>{props.status}</p>
                </CardIcon>

                <div>
                    <button data-testid="btnPosts" key={props.id} onClick={getUserPosts}>
                        {loading &&  listOfPosts?.length === 0 ?
                        <ButtonText data-testid="loadingText">...Loading</ButtonText>
                        :
                        <ButtonText>Posts</ButtonText>
                        }
                    </button>
                </div>

            </div>

        </UserCard>

                {btnPost && listOfPosts[0]?.user_id === props.id ?
                <UserPosts data-testid="rootDetailsCountainer">
                    <CloseBtn data-testid="btnClose1" onClick={() => setBtnPost(false)}>
                        <img src={closeBtn}></img>
                    </CloseBtn> 
                    <div data-testid="detailsPostContainer">
                        {listOfPosts?.map((posts: PostType) => {
                            return (<ShowPosts data-testid="listPostsComp" key={posts.id} onData={posts} />);
                        }
                        )}
                    </div>
                    </UserPosts>
                :
                <></>
                }

    </Container>
    )
}