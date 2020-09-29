import React from 'react';

import './App.css';
import countries from './CountryList'
import Country from './Component/Country';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      countries:countries,
      searchValue:''
    }
  }
  editSearchValue=(e)=>{
    this.setState({
      searchValue:e.target.value
    })
  }
  dynamicSearchUpdate=()=>{
    return this.state.countries.filter(countries=>countries.toLowerCase().includes(this.state.searchValue.toLowerCase()))
  }
  render(){

    return(
      <div className='demo'>
      <input type="text" value ={this.state.searchValue} onChange={this.editSearchValue} placeholder='Search Country'/><br/>
      <Country countries={this.dynamicSearchUpdate()}/>

      </div>
      )
  }
}
export default App;
