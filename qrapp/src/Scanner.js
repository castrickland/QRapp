import React, { Component, useState} from 'react'
import QRScan from 'qrscan'



class Scanner extends Component {
  

  constructor (props) {
    super(props)
    this.state = { value: '', watching: false }
    this.onFind = this.onFind.bind(this)
  }
  
  onFind (value) {
    this.setState({ value, watching: false })
  }
  
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