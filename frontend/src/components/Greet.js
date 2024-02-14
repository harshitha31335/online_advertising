import React, { Component } from 'react'

class Greet extends Component {
  render() {
    return (
      <div><h1>Welcome To Class Component {this.props.name} with Id {this.props.id}</h1></div>
    )
  }
}

export default Greet