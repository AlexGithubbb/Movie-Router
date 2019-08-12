import React, { Component } from 'react';
import axios from 'axios';
import config from './config';
import Movies from './Movies';
// import { BrowserRouter as Router, Route } from 'react-router-dom';


class Home extends Component {
  state = {
    movieLsit: []
  };
  componentDidMount() {
    axios
      .get(`${config.nowPlayingUrl}?api_key=${config.apiKey}`)
      .then(response => {
        const movieData = response.data.results;
        this.setState({ movieLsit: movieData });
      })
      .catch(err => console.log(err));
  }
  render() {
    const movies = this.state.movieLsit.map((movie, i) => {
      return (
        <Movies
          key={i}
          title={movie.title}
          image={`${config.imageUrl}${movie.poster_path}`}
          content={movie.overview}
          id={movie.id}
        />
      );
    });
    return (
      <div className='row'>
          {movies}
        </div>

    );
  }
}

export default Home;
