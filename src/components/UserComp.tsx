import React from "react";

type propsParm = {
    name: string | null | undefined
}

export default function UserComp(props: propsParm): JSX.Element {
    // console.log(props.payloads)
    return(
        <div>
            <h3 data-testid="UserName">User Name: {props.name}</h3>   
        </div>
    )
}