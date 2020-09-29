import React, { Component } from 'react'

export default class Country extends Component {
  render() {
    return (
      <div>
      {this.props.countries.map((country)=>(
               
        <li>{country}</li> 
         ))}
      </div>
    )
  }
}
