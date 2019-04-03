import React , {Component} from 'react';


class MovieDetails extends Component {
    constructor(props){
        super();
    }
    render(){
        return(
        <div className="container">
            <div className="row">
                <div className="col-sm-3 col-sm-6 col-sm-12">
                    <h4 className="text">{this.props.details.name}</h4>
                        <img className="img" src={this.props.details.image_url}></img>
                </div>
            </div>
        </div> 
        )
    }
}
export default MovieDetails