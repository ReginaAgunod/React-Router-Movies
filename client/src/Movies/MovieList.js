import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <div key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <MovieDetails key={movie.id} movie={movie} />
          </Link>
        </div>
      ))}
    </div>
  );
};

function MovieDetails(props) {
  const movie = props.movie;
  const { title, director, metascore } = movie;
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </Link>
    </div>
  );
}

export default MovieList;
