import React from 'react'
import "./App.css"

import Tabs from './Tabs'
const App = () => {
    //const [username, setUsername] = useState("");
    //const [deskList, setDeskList] = useState()
    // const displayInfo = () => {
    //   console.log(username)
    // }
    
    return (
      <div>
        <div className="login">
          <label>Username:</label>
          {/* <input
            type="text"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          /> */}
          <button>Login</button>
        </div>
        
      <Tabs/>

          
      </div>
    )
  }

export default App