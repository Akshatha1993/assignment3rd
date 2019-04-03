import React, { Component } from 'react';
import Label from './Label';
import Textbox from './Textbox';
import './App.css';
import Product from './Product';
  import Search from './Search';
import MovieList from './Component/movie/MovieList';

class App extends Component {
constructor(props){
  super();
  this.state={
    counter:0,
    searchQuery:''
  };
  this.handleSearchClick = this.handleSearchClick.bind(this);
  this.handleChange = this.handleChange.bind(this);
}
handleSearchClick(data){
  console.log(data);
  let currentState = this.state;
  currentState.counter++;
  this.setState(currentState);
}
handleChange(data){
  console.log(data);
  let currentState = this.state;
  currentState.searchQuery = data;
  this.setState(currentState);
}
render(){ 
  return(
    <div className="container">
    <div className="row">
    <div className="col">
    <Search search={this.handleSearchClick}
    searchText = {this.handleChange} />
    <label className="badge">{this.state.counter}</label>
    <DetaList search = {this.state.searchQuery} />
    <Product />
    </div>
    </div>
    </div>
  )   

}
}
export default App;
