import React , {Component} from 'react';


class Search extends Component {
    constructor(props){
        super();
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <input type="text" placeholder="Search" 
                    className="col-md-4 form-control"
                    onChange={(e)=>{this.props.searchText(e.target.value)}} />
                     <button onClick={()=>{this.props.search("Hey clicked!!")}} className="btn btn-primary">Search</button>
                </div>
            </div>
        )
    }
}
export default Search