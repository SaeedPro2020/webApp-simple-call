import React from "react";
import { missionPayload } from "../model/Models"

type propsParm = {
    name: string
    payloads: missionPayload[]
}

export default function ShowComments(props: propsParm): JSX.Element {
    // console.log(props.payloads)
    return(
        <div>
            <h3>Mission: {props.name}</h3>
            <ul>
                {props?.payloads?.map((data,i) => {
                    return (<div key={i}>{data?.nationality != null ?
                    <p>Nationality: {data.nationality}</p>
                    :
                    <p>Nationality: Not mentioned</p>
                    }</div>)
                })}
            </ul>    
        </div>
    )
}