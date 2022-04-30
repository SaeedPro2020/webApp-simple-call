import React, { useState } from "react";
import './style/UserProfile.css'
import imageProfile from '../assets/blank.png'
import mailIcon from '../assets/empty-email.svg'
import maleAvetar from '../assets/009-boy-4.svg'
import femaleAvetar from '../assets/013-girl-6.svg'
import activeStatus from '../assets/activeIcon.png'
import inactiveStatus from '../assets/inactive.jpg'
import { userPosts } from "../api/UserRepo";
import { PostType, userType } from "../model/Models";
import ShowPosts from "./ShowPosts";

export default function UserProfile(props: userType): JSX.Element {

    const postData: PostType[] = []
    const [listOfPosts, setListOfPosts] = useState(postData)

    const [btnPost, setBtnPost] = useState(false)
    const [loading, setLoading] = useState(false)

    const getUserPosts = async () => {
            setBtnPost(true)
            setLoading(true)
            const ourData = await userPosts(props.id)
            setListOfPosts(ourData?.data)
            setLoading(false)
    }
    
    return(
        <div className="rootElement">

        <div className="UserProfile">
           
            <img className="ImageProfile" src={imageProfile}></img>
            
            <div className="textDetails">
                <h3 data-testid="headlineName" className="UserName">{props.name}</h3>

                <div className="IconText">
                    <img className="ImageIcon" src={mailIcon}></img>
                    <p className="OtherDetails">{props.email}</p>
                </div>

                <div className="IconText">
                    {props.gender === "male" ?
                    <img className="ImageIcon" src={maleAvetar}></img>
                    :
                    <img className="ImageIcon" src={femaleAvetar}></img>
                    }
                    <p className="OtherDetails">{props.gender}</p>
                </div>

                <div className="IconText">
                    {props.status === "active" ?
                    <img data-testid="imageActive" className="ImageIcon" src={activeStatus}></img>
                    :
                    <img data-testid="imageInActive" className="ImageIcon" src={inactiveStatus}></img>
                    }
                    <p className="OtherDetails">{props.status}</p>
                </div>

                <div className="btnsContainer">
                    <button data-testid="btnPosts" key={props.id} className="Buttons" onClick={getUserPosts}>
                        {loading &&  listOfPosts?.length === 0 ?
                        <p data-testid="loadingText" className="btnText">...Loading</p>
                        :
                        <p className="btnText">Posts</p>
                        }
                    </button>
                </div>

            </div>

        </div>

                {btnPost && listOfPosts[0]?.user_id === props.id ?
                <div className="detailsContainer">
                    {listOfPosts?.map((posts: PostType) => {
                         return (<ShowPosts data-testid="listPostsComp" key={posts.id} onClose={() => setBtnPost(false)}
                                    onData={posts}/>)}
                    )}
                </div>
            :
            <></>
                }

    </div>
    )
}