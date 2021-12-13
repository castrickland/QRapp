import React, { Component} from 'react'
import QRScan from 'qrscan'
import axios from 'axios';

var once = false;
var count = 0;
class Scanner extends Component {
  

  constructor (props) {
    super(props)
    this.state = { value: '', watching: false }
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
    
    axios.put("http://localhost:3001/deskUpdate" , {desk_occupied: 1, desk_name: deskNameToChange}).then((response) => {
      alert('update')
    })

  }
  render () {
    if (count < 5) {
      console.log(this.state.value)
      //console.log(count + "<----")
      //this.updateDeskTable(this.state.value)
    }
    
    count = count + 1
    
    
    
    return (
      <div>
        {this.state.watching
          ? (
            <QRScan onFind={this.onFind} />
          )
          : (
            <div>
              <button onClick={() => this.setState({ watching: true })}>Scan</button>
              <h4>value: {this.state.value}</h4>
              
            </div>
            
            // read div on page to get round storing the
            // this.state.value 
          )
        }
      </div>
    )
    
  }

}

export default Scanner