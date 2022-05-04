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
            <h3 data-testid="MissionName">Mission: {props.name}</h3>
            <ul>
                {props?.payloads?.map((data,i) => {
                    return (
                    <div data-testid="Nationality" key={i}>
                    {data?.nationality != null ?
                        <p data-testid="NationalityExist">Nationality: {data.nationality}</p>
                        :
                        <p data-testid="NationalityNotExist">Nationality: Not mentioned</p>
                    }
                    </div>)
                })}
            </ul>    
        </div>
    )
}