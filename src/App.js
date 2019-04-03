import React, { Component } from 'react';
import DataList from './Component/assignment/dataList';
import Search from './Search';
import Header from './Header';

class App extends Component {
constructor(props){
  super();
  this.state={
    counter:0,
    searchQuery:'',
  };
  this.handleClick = this.handleClick.bind(this);
  this.handleChange = this.handleChange.bind(this);
}
handleClick(data){
  console.log(data);
  let currentCounter = this.state;
  currentCounter.counter++;
  this.setState(currentCounter);
}

handleChange(data){
  console.log(data);
  let currentCounter = this.state;
  currentCounter.searchQuery = data;
  this.setState(currentCounter);
}

render(){ 
  return(
    <div>
    <Header cart = {this.state.counter} />
    <div className="container-fluid">
    <div className="row">
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
    <Search search={this.handleClick}
    searchText = {this.handleChange} />
    <DataList search = {this.state.searchQuery}/>
    </div>
    </div>
    </div>
    </div>
  )   

}
}
export default App;
