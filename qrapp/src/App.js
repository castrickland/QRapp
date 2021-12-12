import React, { useState } from 'react'
import "./App.css"
import axios from 'axios'
import Tabs from './Tabs'
const App = () => {
    const [username, setUsername] = useState("");
    const displayInfo = () => {
      console.log(username)
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
          <button onClick = {displayInfo}>Login</button>
        </div>
        
      <Tabs/>

          
      </div>
    )
  }

export default App