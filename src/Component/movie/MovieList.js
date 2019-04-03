import React, { Component } from 'react';
import MovieDetails from './MovieDetails';

class MovieList extends Component {
    constructor(props) {
        super();
        this.state = { movies :
            [
                { "id": 1, "name": "Bahu bali 2", "year": 2017, "image_url": "https://images-na.ssl-images-amazon.com/images/I/71q6iQTY-VL._SX466_.jpg", "production_house": "ABC Movies", "rating": 5, "type": "epic", "language": "Telugu", "date": "2017-09-30T18:30:00.000Z" }, 
                { "id": 2, "name": "Captain Marvel", "year": 2019, "image_url": "https://contentserver.com.au/assets/667514_captain_marvel_v8.jpg", "production_house": "Australia X", "rating": 4, "type": "fiction", "language": "English", "date": "2019-01-31T18:30:00.000Z" }, 
                { "id": 3, "name": "Yajamana", "year": 2019, "image_url": "https://www.filmibeat.com/img/220x100x275/popcorn/movie_posters/yajamana-20190221123742-16906.jpg", "production_house": "BCA Movies", "rating": 10, "type": "family", "language": "Kannada", "date": "2019-09-30T18:30:00.000Z" }, 
                { "id": 4, "name": "Rathavara", "year": 2018, "image_url": "https://m.media-amazon.com/images/M/MV5BNGY4MTE2ZWItNGZiOS00MGJjLWFjYzQtNTc0NTdjYmQ2YTIwXkEyXkFqcGdeQXVyNTE0NDY5Njc@._V1_.jpg", "production_house": "BCA Movies", "rating": 8, "type": "family", "language": "Kannada", "date": "2018-09-30T18:30:00.000Z" }, 
                { "id": 5, "name": "Rajakumara", "year": 2018, "image_url": "https://www.filmibeat.com/img/220x80x275/popcorn/movie_posters/rajakumara-20150424095934-14408.jpg", "production_house": "BCA Movies", "rating": 10, "type": "family", "language": "Kannada", "date": "2018-09-30T18:30:00.000Z" }, 
                { "id": 6, "name": "Ranna", "year": 2017, "image_url": "https://i.pinimg.com/originals/22/86/f9/2286f9424c6bd1fa5d359f1c845c0ab6.jpg", "production_house": "BCA Movies", "rating": 10, "type": "family", "language": "Kannada", "date": "2018-09-30T18:30:00.000Z" }, 
                { "id": 7, "name": "Hebbuli", "year": 2018, "image_url": "https://m.media-amazon.com/images/M/MV5BYTg2ZjgyY2UtZWYzZS00M2UzLTlmYjItYjhkZTM5NDVlNTgyXkEyXkFqcGdeQXVyMzU0ODc1MTQ@._V1_.jpg", "production_house": "ABC Movies", "rating": 10, "type": "epic", "language": "Kannada", "date": "2018-09-30T18:30:00.000Z" }, 
                { "id": 8, "name": "The Villain", "year": 2019, "image_url": "http://kannada.ireels.in/wp-content/uploads/2018/10/The-villain-new-teaser-300x400.jpg", "production_house": "ABC Movies", "rating": 5, "type": "epic", "language": "Kannada", "date": "2019-09-30T18:30:00.000Z" }, 
                { "id": 9, "name": "Rambo 2", "year": 2019, "image_url": "https://www.filmibeat.com/img/220x275/popcorn/movie_posters/raambo-2-20180323121308-16753.jpg", "production_house": "ABC Movies", "rating": 5, "type": "epic", "language": "Kannada", "date": "2019-09-30T18:30:00.000Z" }
            ]}
    }
    render() {
        let listOfMoviesDisplayed='';
        if(this.props.search ==''){
            listOfMoviesDisplayed = this.state.movies.map((movie, index)=>{
                return <MovieDetails key = {index} details = {movie} />
            })
        }
        else{
           let filterMovies = this.state.movies.filter((movie, index)=>{
            let lc = movie.name.toLowerCase();
            let filter = this.props.search.toLowerCase();
                return lc.includes(filter);
            });
            listOfMoviesDisplayed = filterMovies.map((movie, index)=>{
                return <MovieDetails key = {index} details = {movie} />
            })
        }
        return (
            <div className="container">
            <div className="row">
                {listOfMoviesDisplayed}
                </div>
            </div>
        )
    }
}
export default MovieList