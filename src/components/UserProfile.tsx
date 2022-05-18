import React, { useState } from "react";
import mailIcon from '../assets/empty-email.svg'
import maleAvetar from '../assets/009-boy-4.svg'
import femaleAvetar from '../assets/013-girl-6.svg'
import activeStatus from '../assets/activeIcon.png'
import inactiveStatus from '../assets/inactive.jpg'
import { userPosts } from "../api/UserRepo";
import { PostType, userType } from "../model/Models";
import ShowPosts from "./ShowPosts";
import closeBtn from '../assets/gen034.svg'
import { CardIcon, Container, UserCard, UserPosts, ButtonText } from "./styles/UserProfile.styled";
import { CloseBtn } from "./styles/ShowStyle.styled";


type propsParm = {
    userData: userType
    image: string
}

export default function UserProfile(props: propsParm): JSX.Element {

    const postData: PostType[] = []
    const [listOfPosts, setListOfPosts] = useState(postData)

    const [btnPost, setBtnPost] = useState(false)
    const [loading, setLoading] = useState(false)

    const getUserPosts = async () => {
            setBtnPost(true)
            setLoading(true)
            const ourData = await userPosts(props.userData.id)
            setListOfPosts(ourData?.data)
            console.log("LIST OF POSTS", ourData?.data);
            setLoading(false)
    }

    // If we are going to separate users list with their post ==> we have to move this part outside
    // of Container in parent component (App.tsx) ==> Also, data related to this posts should be passed
    // to App.tsx. Next, set a postion (marginTop) for post to be in front of user name.
    
    return(
    <Container>

        <UserCard marginLeft='15%' marginTop='0' border='none' borderRadius='0' width='15%' bg='white'
        hoverColor='#8f99f6' activeColor='white' transform="0px" borderWidth='none'>
           
            <img src={props.image}></img>
            
            <div>
                <h3 data-testid="headlineName">{props.userData.name}</h3>

                <CardIcon>
                    <img src={mailIcon}></img>
                    <p>{props.userData.email}</p>
                </CardIcon>

                <CardIcon>
                    {props.userData.gender === "male" ?
                    <img data-testid="maleIcon" src={maleAvetar}></img>
                    :
                    <img data-testid="femaleIcon" src={femaleAvetar}></img>
                    }
                    <p>{props.userData.gender}</p>
                </CardIcon>

                <CardIcon>
                    {props.userData.status === "active" ?
                    <img data-testid="activeIcon" src={activeStatus}></img>
                    :
                    <img data-testid="inActiveIcon" src={inactiveStatus}></img>
                    }
                    <p>{props.userData.status}</p>
                </CardIcon>

                <div>
                    <button data-testid="btnPosts" key={props.userData.id} onClick={getUserPosts}>
                        {loading &&  listOfPosts?.length === 0 ?
                        <ButtonText data-testid="loadingText">...Loading</ButtonText>
                        :
                        <ButtonText>Posts</ButtonText>
                        }
                    </button>
                </div>

            </div>

        </UserCard>

                {btnPost && listOfPosts[0]?.user_id === props.userData.id ?
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