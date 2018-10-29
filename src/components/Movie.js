import React, {Component} from 'react';

class Movie extends Component {

  render() {
    return(
      <div className="movie">
        {this.props.name}
      </div>
  );
  }
}

export default Movie;
