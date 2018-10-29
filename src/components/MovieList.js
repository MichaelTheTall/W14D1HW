import React, {Component} from 'react';
import Movie from './Movie';

class MovieList extends Component {
  render() {

    const movieNodes = this.props.data.map(movie =>{
      return (
        <li><
        Movie
        key={movie.id}
        name={movie.name}
        /></li>
        )
    })

    return(
    <div className="movie-list">
    <ul>
    {movieNodes}
    </ul>
    </div>
  );
  }
}

export default MovieList;
