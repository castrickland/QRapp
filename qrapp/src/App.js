import React, {Component} from 'react'
import "./App.css"
import axios from 'axios'

import Tabs from './Tabs'

class App extends Component {
  constructor (props) {
    super(props)
    this.logout = this.logout.bind(this)
  }
   
  logout() {
    let usernameToLogout = document.getElementById("logoutInput").value;
    axios.put("http://localhost:3001/deskUpdate2" , {desk_occupied: 0, username: usernameToLogout}).then((response) => {
      alert("logged out")
    })
  }
  render () {
    return (
      <div>
        <div className="logout">
            
          <label>
          Username:
          <input id="logoutInput" type="text" />
        </label>
          <button onClick={this.logout}>Logout</button>
        </div>
          
      <Tabs/>
  
            
      </div>
    )
  }
}

export default App