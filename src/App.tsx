import React, { useState } from "react";
import { userDetails } from "./api/UserRepo";
import UserComp from "./components/UserComp";
import UserProfile from "./components/UserProfile";
import { userType } from "./model/Models";
import AddMission from "./components/AddUser";
import { useUsersQuery } from "./api/graphql-frontend";
import { Container } from "./App.styled";

import imageProfile from './assets/blank.png'
import img1 from './assets/300-1.jpg'
import img2 from './assets/300-2.jpg'
import img3 from './assets/300-3.jpg'
import img4 from './assets/300-4.jpg'
import img5 from './assets/300-5.jpg'
import img6 from './assets/300-6.jpg'
import img7 from './assets/300-7.jpg'
import img8 from './assets/300-8.jpg'
import img9 from './assets/300-9.jpg'
import img10 from './assets/300-10.jpg'
import img11 from './assets/300-11.jpg'
import img12 from './assets/300-12.jpg'
import img13 from './assets/300-13.jpg'
import img14 from './assets/300-14.jpg'
import img15 from './assets/300-15.jpg'

export default function App() {
  const userData: userType[] = []
  const [listOfUsers, setListOfUsers] = useState(userData)
  const { loading, error, data, refetch } = useUsersQuery();

  const [btnGetUser, setBtnGetUser] = useState(false)
  const [btnLauncData, setbtnLauncData] = useState(false)

  const imgs = [imageProfile, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15]

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
    <Container>

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
        return (<UserProfile data-testid="listUserComp" key={i} userData={cardData}
        image={imgs[Math.floor(Math.random() * imgs.length)]}/>)}
      )}
      </div>
      :
      <div data-testid="emptyDiv"></div>
      }

      </Container>
  );
}
