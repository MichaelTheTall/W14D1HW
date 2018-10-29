import React, {Component} from 'react';
import Movie from './Movie';

class MovieList extends Component {
  render() {

    const movieNodes = this.props.data.map(movie =>{
      return (
        <li><a href={movie.url}><Movie key={movie.id} name={movie.name}/></a></li>
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
