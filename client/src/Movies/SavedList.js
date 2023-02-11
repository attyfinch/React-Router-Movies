import React from 'react';
import { Link, useHistory } from 'react-router-dom'

export default function SavedList(props) {
  const history = useHistory();

  const backHome = () => {
    history.push('/');
  }

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <button className="home-button" onClick={backHome}>Home</button>
    </div>
  );
}


// NOTE: adding a <Link></Link> tag to the home button div works as well, and that's initially how I set it
// but I'm going to deviate and use the useHistory hook to practice.
