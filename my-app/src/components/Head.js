import React, { Component } from 'react'

class Head extends Component {
  render() {
    return(
      <h2>{ this.props.title }</h2>
    )
  }
}

export default Head