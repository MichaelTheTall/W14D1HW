import React, {Component} from 'react';

class Movie extends Component {

  render() {
    return(
      <div className="movie">
        <h2>{this.props.name}</h2>
      </div>
  );
  }
}

export default Movie;
