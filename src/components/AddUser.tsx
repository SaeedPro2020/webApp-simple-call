import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useMutationMutation, Users_Insert_Input, useUsersQuery } from "../api/graphql-frontend";

export default function AddMission(): JSX.Element {

    const [name, setName] = useState("")
    const [rocket, setRocket] = useState("")
    const [insert_users, { data, loading, error }] = useMutationMutation();
    const { refetch } = useUsersQuery();
    

    const submitNewMission = async () => {

        const userId = uuidv4().toString();
        const dateObj = new Date();
        const month = dateObj.getUTCMonth() + 1; //months from 1-12
        const day = dateObj.getUTCDate();
        const year = dateObj.getFullYear();
        const timeStamp = year.toString() + "-" + month.toString() + "-" + day.toString()
        // console.log("Submit Name: ", name, " Rocket: ", rocket, " id: " + userId, " timestamp: " + timeStamp);

        const ourObject: Users_Insert_Input = {id: userId, name: name, rocket: rocket, timestamp: timeStamp, twitter: "twitter"}
        
            await insert_users({ variables: {objects:[ourObject]}})
            refetch()
    }

    return(
        
        <div style={{marginTop: 50, display: 'flex', flexDirection:'column', alignItems:'center'}}>
            
            <button style={{marginLeft: 100, marginBottom:20, width:150}} onClick={submitNewMission}>Add User</button>

                <input 
                data-testid="nameInput"
                type="text" 
                style={{width: 250, marginLeft: 80}}
                id="Name"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}/>

                <input 
                data-testid="nameRocket"
                type="text" 
                style={{width: 250, marginLeft: 80}}
                id="Rocket"
                placeholder="Rocket"
                value={rocket}
                onChange={e => setRocket(e.target.value)}/>

                {loading && !error && !data ?
                    <h1 data-testid="operationLoading">Loading...</h1>
                :
                !loading && error && !data ?
                    <h1 data-testid="error2">Error Add User</h1>
                :
                !loading && !error && data ?
                <h1 data-testid="dataSent">Data sent successfully!</h1>
                :
                <></>
                }

        </div>
    )}