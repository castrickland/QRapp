import React, { Component, useState} from 'react'
import QRScan from 'qrscan'
import axios from 'axios';

var once = false;

class Scanner extends Component {
  

  constructor (props) {
    super(props)
    this.state = { 
      value: '', 
      watching: false,
      deskNameReturn: ''
    }
    this.onFind = this.onFind.bind(this)
  }
  
  onFind (value) {
    this.setState({ value, watching: false })
    if (!once){
      this.updateDeskTable(value)
      once = true
    }
    

  }
  updateDeskTable(deskNameToChange) {
    let done1 = true;
    let usernameToAdd = document.getElementById("userNameInput").value;
    //console.log(usernameToAdd)
    axios.put("http://localhost:3001/deskUpdate2" , {desk_occupied: 0, username: usernameToAdd}).then((response) => {
      
      axios.put("http://localhost:3001/deskUpdate" , {desk_occupied: 1, username: usernameToAdd, desk_name: deskNameToChange}).then((response) => {
        
      
      })
    })
      
    
    
    
    // axios.put("http://localhost:3001/deskUpdate" , {desk_occupied: 1, username: usernameToAdd, desk_name: deskNameToChange}).then((response) => {
    // alert('update')
      
    // })
    
    
    

  }
  // deskNameAlterer(usernameToAlter) {
    
    
  // }
  
  render () {
    return (
      <div>
        {this.state.watching
          ? (
            <QRScan onFind={this.onFind} />
          )
          : (
            <div>
              <button onClick={() => this.setState({ watching: true })}>Scan</button>
              {/*onClick={() => { func1(); func2();}}>Test Link</a> */}
              <h4>value: {this.state.value}</h4>
              
            </div>
            
            // read div on page to get round storing the
            // this.state.value 
          )
        }
        <label>
          Username:
          <input id="userNameInput" type="text" />
        </label>
      </div>
      
    )
    
  }

}

export default Scanner