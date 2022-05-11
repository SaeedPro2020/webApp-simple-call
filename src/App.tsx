import React, { useState } from "react";
import { userDetails } from "./api/UserRepo";
import "./App.css";
import UserComp from "./components/UserComp";
import UserProfile from "./components/UserProfile";
import { userType } from "./model/Models";
import AddMission from "./components/AddUser";
import { useUsersQuery } from "./api/graphql-frontend";
// 
export default function App() {
  const userData: userType[] = []
  const [listOfUsers, setListOfUsers] = useState(userData)
  const { loading, error, data, refetch } = useUsersQuery();

  const [btnGetUser, setBtnGetUser] = useState(false)
  const [btnLauncData, setbtnLauncData] = useState(false)

  const getListOfUsers = async () => {
      setBtnGetUser(true)
      setbtnLauncData(false)
      const ourData = await userDetails()
      setListOfUsers(ourData.data)
      console.log(ourData)
  }

  const getMissionsData = async () => {
    setBtnGetUser(false)
    setbtnLauncData(true)
    refetch()
    console.log(data)
}

  return (
    <div data-testid="AppCompo" className="App">

      <button disabled={btnGetUser} onClick={() => getListOfUsers()}>Get users</button>
      <button disabled={btnLauncData} onClick={() => getMissionsData()}>Get Users Apollo</button>

      {!btnGetUser && btnLauncData ?
      <div data-testid="missionsRoot">
        {loading && !error && !data ?
        <h1>Loading...</h1>
        :
        !loading && error && !data ?
        <h1 data-testid="error">Error :(</h1>
        : 
        <div>
          <AddMission />
        {data?.users.map((user, i) => {
           return (<UserComp data-testid="missionComponents" key={i} name={user.name} id={user.id}/>)
        })} 
        </div>
        }
      </div>
      :
      btnGetUser && !btnLauncData ?
      <div>
      {listOfUsers.map((cardData, i) => {
        return (<UserProfile data-testid="listUserComp" key={i} id={cardData.id} name={cardData.name}
        email={cardData.email} gender ={cardData.gender}
        status={cardData.status}/>)}
      )}
      </div>
      :
      <div data-testid="emptyDiv"></div>
      }

      </div>
  );
}
