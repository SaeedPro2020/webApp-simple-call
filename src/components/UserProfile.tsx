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
import closeBtn from '../assets/gen034.svg'

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
                    <img data-testid="maleIcon" className="ImageIcon" src={maleAvetar}></img>
                    :
                    <img data-testid="femaleIcon" className="ImageIcon" src={femaleAvetar}></img>
                    }
                    <p className="OtherDetails">{props.gender}</p>
                </div>

                <div className="IconText">
                    {props.status === "active" ?
                    <img data-testid="activeIcon" className="ImageIcon" src={activeStatus}></img>
                    :
                    <img data-testid="inActiveIcon" className="ImageIcon" src={inactiveStatus}></img>
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
                <div data-testid="rootDetailsCountainer" className="detailsContainer">
                    <button data-testid="btnClose" className="btnClose" onClick={() => setBtnPost(false)}>
                        <img className="ImageIcon" src={closeBtn}></img>
                    </button> 
                    <div data-testid="detailsPostContainer">
                        {listOfPosts?.map((posts: PostType) => {
                            return (<ShowPosts data-testid="listPostsComp" key={posts.id} onData={posts} />);
                        }
                        )}
                    </div>
                    </div>
                :
                <></>
                }

    </div>
    )
}