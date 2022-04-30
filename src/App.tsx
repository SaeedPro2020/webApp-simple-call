import React, { useState } from "react";
import { userDetails } from "./api/UserRepo";
import "./App.css";
import UserProfile from "./components/UserProfile";
import { userType } from "./model/Models";

function App() {
  const userData: userType[] = []
  const [listOfUsers, setListOfUsers] = useState(userData)
  const [error, setError] = useState(false)

  const getListOfUsers = async () => {
      const ourData = await userDetails()
      setListOfUsers(ourData.data)
      console.log(ourData)
  }

  return (
    <div data-testid="AppCompo" className="App">

      <button onClick={() => getListOfUsers()}>Get users</button>

      {listOfUsers.map((cardData, i) =>{
        return (<UserProfile data-testid="listUserComp" key={i} id={cardData.id} name={cardData.name}
        email={cardData.email} gender ={cardData.gender}
        status={cardData.status}/>)}
      )}
      </div>
  );
}

export default App;
