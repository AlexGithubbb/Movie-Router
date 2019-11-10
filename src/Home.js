import React, { Component } from 'react';
import axios from 'axios';
import config from './config';
import Movie from './Movie';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

class Home extends Component {
  state = {
    movieData: []
  };
  componentDidMount() {
    axios
      .get(`${config.nowPlayingUrl}?api_key=${config.apiKey}`)
      .then(response => {
        const movieData = response.data.results;
        this.setState({ movieData });
      })
      .catch(err => console.log(err));
  }
  render() {
    const movies = this.state.movieData.map((movie, i) => {
      return (
        <Movie
          key={i}
          title={movie.title}
          image={`${config.imageUrl}${movie.poster_path}`}
          content={movie.overview}
          id={movie.id}
        />
      );
    });
    return <div className='row'>{movies}</div>;
  }
}

export default Home;
