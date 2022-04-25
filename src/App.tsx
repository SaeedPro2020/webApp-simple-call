import React, { useEffect, useState } from "react";
import { userDetails } from "./api/UserRepo";
import "./App.css";
import UserProfile from "./components/UserProfile";
import {userType} from './components/UserProfile'

function App() {
  const userData: userType[] = []
  const [listOfUsers, setListOfUsers] = useState(userData)

  const getListOfUsers = async () => {
    try{
      const ourData = await userDetails()
      setListOfUsers(ourData.data)
    } catch (error){
      console.log(error)
    }
  }

  useEffect(() => {
    getListOfUsers()
  },[!listOfUsers])

  return (
    <div className="App">
      {listOfUsers.map((cardData, i) =>(
        <UserProfile key={i} id={cardData.id} name={cardData.name}
        email={cardData.email} gender ={cardData.gender}
        status={cardData.status}/>
      ))}
    </div>
  );
}

export default App;
