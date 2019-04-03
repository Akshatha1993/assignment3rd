import React , {Component} from 'react';
import './Header.css';
import DataDetails from './Component/assignment/dataDetails';


class Header extends Component {
    constructor(props){
        super();
    }
    render(){
        return(
            <div className="header">
                <div className="container">
                    <a href="" className="text">Cart
                    </a>
                </div>
            </div>
        )
    }
}
export default Header