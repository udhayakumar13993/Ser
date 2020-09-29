import React, { Component } from 'react'

export default class NewCountry extends Component {
  render() {
    return (
      <div>
        <li>{this.props.cnt}</li>
      </div>
    )
  }
}
