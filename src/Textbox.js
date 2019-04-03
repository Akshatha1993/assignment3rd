import React, {Component} from 'react'

export default class Textbox extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <input type="text" placeholder={this.props.placeholder}></input>
        )
    }
}