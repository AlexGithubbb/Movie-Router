import React from 'react';
import { Link } from 'react-router-dom';
// import classes from  './Movies.module.css';

const Movie = (props) => {
  return (
    <div className='col s12 m4 l3'>
      <div className='card'>
        <div className='card-image'>
          <img src={props.image} alt='' />
          {/* <span ></span> */}
        </div>
        <div className='card-content black '>
          {/* <p>{props.content}</p> */}
          <span className='card-title green-text text-accent-2'>
            <strong>
            {props.title.length > 15 ? 
           `${props.title.toUpperCase().slice(0, 20)}...` : 
           props.title.toUpperCase()}
            </strong>
          </span>
        </div>
        <div className='card-action grey darken-1' style={{ padding: '2px 4px' }}>
          <Link to={`/movie/${props.id}`}>
            <button style={{width:'100%'}} className='btn waves-light waves-effect'>More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movie;
