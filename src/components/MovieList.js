import React, {Component} from 'react';
import Movie from './Movie';

class MovieList extends Component {
  render() {
    return(
    <div className="movie-list">
    <Movie />
    </div>
  );
  }
}

export default MovieList;
