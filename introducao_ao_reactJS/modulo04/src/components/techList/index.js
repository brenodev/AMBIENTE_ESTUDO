import React, { Component } from 'react'

class TechList extends Component {
  state = {
    techs: [
      'Node.JS',
      'React.JS',
      'React Native',
      'Javascript'
    ]
  }

  render () {
    console.log(this.state)
    return (
      <ul>
        <li>Node.JS</li>
        <li>React.JS</li>
        <li>React Native</li>
        <li>Javascript</li>
      </ul>
    )
  }
}
export default TechList
