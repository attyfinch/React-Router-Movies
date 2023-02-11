import React from 'react';
import { Link } from 'react-router-dom'

export default function MovieList({ movies }) {

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link to={`/movies/${movie.id}`}><MovieDetails key={movie.id} movie={movie} id={movie.id} /></Link>
      ))}
    </div>
  );
}


function MovieDetails(props) {
  const { title, director, metascore, id } = props.movie;

  return (
    <div className="movie-card">
       <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
