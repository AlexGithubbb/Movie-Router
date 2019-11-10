import React, { Component } from 'react';
import config from './config';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from './component/Spinner';

class SingleMovie extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    axios
      .get(`${config.singleMovieUrl}/${movieId}?api_key=${config.apiKey}`)
      .then(res => {
        const data = res.data;
        this.setState({ data });
      })
      .catch(err => console.log(err));
  }
  render() {
    console.log(this.state.data);
    const movie = this.state.data;
    return (
      <div>
        {movie ? (
          <div
            className='lime-text text-darken-2 mt3'
            style={{ marginTop: '30px' }}
          >
            <div className='container' style={{ width: '40%' }}>
              <img src={`${config.imageUrl}${movie.poster_path}`} alt='movie' />
              <div>Title : {movie.title.toUpperCase()}</div>
              <div>
                Original Title: {movie.original_title}{' '}
                <span>(ID:{movie.id})</span>{' '}
              </div>
              <h5>
                <strong>
                  <i className='material-icons'>thumb_up</i> :{' '}
                  {movie.vote_average}
                </strong>
              </h5>
              <div>Status: {movie.status}</div>
              <p>Movie Overview:{movie.overview} </p>
              <Link to='/'>
                <button
                  style={{ marginTop: '20px' }}
                  className='btn lime darken-2 section black-text'
                >
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}

export default SingleMovie;
