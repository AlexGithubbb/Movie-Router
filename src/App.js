import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import SingleMovie from './SingleMovie';

function App() {
  return (
      <Router>
        <div className="App">
        <Route exact path='/' component={Home} />
        <Route path='/movie/:movieId' component={SingleMovie} />
        </div>
      </Router>
  );
}

export default App;



// https://api.themoviedb.org/3/movie/550?api_key=4dac77c42f2dcbeb90b2a72682d71a10

// const apiKey = "4dac77c42f2dcbeb90b2a72682d71a10";
// const singleMovieUrl = "https://api.themoviedb.org/3/movie/"
// const nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing";
// const imageUrl = "http://image.tmdb.org/t/p/w300";

