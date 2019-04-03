import React, { Component } from 'react';
import './dataDetails.css';

class DataDetails extends Component {
    constructor(props){
      super();
    }
    render(){
        return(
            <div className="container">
            <div className="row">
            <div className="col-sm-4">
                <img className="img-responsive" src={this.props.details.thumbnailImage} />
                <h6>{this.props.details.name}</h6>
                <button className="btn btn-primary" onClick={()=>{this.props.add("Hey clicked!!")}}>Add to cart</button>&nbsp;&nbsp;
                <button className="btn btn-primary" onClick={()=>{this.props.remove("Hey removed!!")}}>Remove from cart</button>
                </div>
                </div>
            </div>
        )
    }
}
export default DataDetails