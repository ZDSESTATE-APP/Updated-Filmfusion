import React from "react";
import '../styles/MovieCarousel.css';

function MovieCarousel({ movies }) {
  if (!movies || movies.length === 0) {
    return <div>No Movies matched the criteria</div>;
  }

  return (
    <div className="movie-carousel">
      {movies.map((movie) => (
        <div className="movie-box" key={movie.imdbID}>
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="movie-poster"
          />
          <div className="movie-info">
            <h3 className="movie-title">{movie.Title}</h3>
            <p className="movie-year">({movie.Year})</p>
            <p className="movie-type">{movie.Type}</p>
            <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" rel="noopener noreferrer" className="imdb-link">View on IMDb</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieCarousel;