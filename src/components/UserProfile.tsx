import React from "react";
import './UserProfile.css'
import imageProfile from '../assets/blank.png'
import mailIcon from '../assets/empty-email.svg'
import maleAvetar from '../assets/009-boy-4.svg'
import femaleAvetar from '../assets/013-girl-6.svg'
import activeStatus from '../assets/activeIcon.png'
import inactiveStatus from '../assets/inactive.jpg'
import arrowIcon from '../assets/arrow.png'

export type userType = {
    id: number;
    name: string;
    email: string;
    gender: string;
    status: string;
}

export default function UserProfile(props: userType): JSX.Element {

    const printLog = () => {
        console.log("BTN clicked")
    }
    
    return(
        <div className="UserProfile">
           
            <img className="ImageProfile" src={imageProfile}></img>
            
            <div className="textDetails">
                <h3 className="UserName">{props.name}</h3>

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
                    <img className="ImageIcon" src={activeStatus}></img>
                    :
                    <img className="ImageIcon" src={inactiveStatus}></img>
                    }
                    <p className="OtherDetails">{props.status}</p>
                </div>
            </div>

            <div className="btnsContainer">
                <button className="Buttons" onClick={printLog}>
                    <p className="btnText">Posts</p>
                    <img className="ImageBtn" src={arrowIcon}></img>
                </button>

                <button className="Buttons" onClick={printLog}>
                    <p className="btnText">Comments</p>
                    <img className="ImageBtn" src={arrowIcon}></img>
                </button>
            </div>

        </div>
    )
}