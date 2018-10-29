import React, { Component } from 'react';
import MovieBox from './containers/MovieBox';

class App extends Component {
  render() {
    return (
      <div className="movie-box">
        <MovieBox />
      </div>
    );
  }
}

export default App;
