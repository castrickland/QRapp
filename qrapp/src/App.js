import React, { useState } from 'react'
import "./App.css"
import Axios from 'axios'
import Tabs from './Tabs'
const App = () => {
    const [username, setUsername] = useState("");
    //const [deskList, setDeskList] = useState()
    // const displayInfo = () => {
    //   console.log(username)
    // }
    const getDeskData = () => {
      Axios.get("http://localhost:3001/deskData").then((response) => {
          console.log(response);
      })
    }
    return (
      <div>
        <div className="login">
          <label>Username:</label>
          <input
            type="text"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <button onClick = {getDeskData}>Login</button>
        </div>
        
      <Tabs/>

          
      </div>
    )
  }

export default App