import React, { useEffect, useState } from "react";
import { EXCHANGE_MISSIONS } from "./api/Apolorepo";
import { userDetails } from "./api/UserRepo";
import "./App.css";
import { useQuery } from "@apollo/client";
import MissionsComp from "./components/MissionsComp";
import UserProfile from "./components/UserProfile";
import { missionsType, userType } from "./model/Models";

export default function App() {
  const userData: userType[] = []
  const [listOfUsers, setListOfUsers] = useState(userData)
  const { loading, error, data, refetch } = useQuery<missionsType>(EXCHANGE_MISSIONS);

  const [btnGetUser, setBtnGetUser] = useState(false)
  const [btnLanucData, setBtnLanucData] = useState(false)

  const getListOfUsers = async () => {
      setBtnGetUser(true)
      setBtnLanucData(false)
      const ourData = await userDetails()
      setListOfUsers(ourData.data)
  }

  const getMissionsData = async () => {
    setBtnGetUser(false)
    setBtnLanucData(true)
    refetch()
}

  return (
    <div data-testid="AppCompo" className="App">

      <button disabled={btnGetUser} onClick={() => getListOfUsers()}>Get users</button>
      <button disabled={btnLanucData} onClick={() => getMissionsData()}>Get Missions</button>

      {!btnGetUser && btnLanucData ?
      <div>
        {loading && !error && !data ?
        <h1>Loading...</h1>
        :
        !loading && error && !data ?
        <h1>Error :(</h1>
        : 
        <div>
        {data?.missions.map((mission, i) => {
           return (<MissionsComp key={i} name={mission.name} payloads={mission.payloads}/>)
        })} 
        </div>
        }
      </div>
      :
      btnGetUser && !btnLanucData ?
      <div>
      {listOfUsers.map((cardData, i) => {
        return (<UserProfile data-testid="listUserComp" key={i} id={cardData.id} name={cardData.name}
        email={cardData.email} gender ={cardData.gender}
        status={cardData.status}/>)}
      )}
      </div>
      :
      <></>
      }

      </div>
  );
}
