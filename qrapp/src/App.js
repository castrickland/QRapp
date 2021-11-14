import React, { Component } from 'react'
import QRScan from 'qrscan'

class App extends Component {
  
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
        <h1>QRScan Demo</h1>
        {this.state.watching
          ? (
            <QRScan onFind={this.onFind} />
          )
          : (
            <div>
              <button onClick={() => this.setState({ watching: true })}>Scan</button>
              <h4>value: {this.state.value}</h4>
            </div>
          )
        }
      </div>
    )
  }
}
export default App