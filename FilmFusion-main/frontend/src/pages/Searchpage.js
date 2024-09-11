import React, { useState } from 'react';
import Searchbar from '../components/Searchbar.js'

function SearchPage() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = '75965813'; 

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();
      if (data.Response === "True") {
        setResults(data.Search); 

      } else {
        setResults([]);
        setError(data.Error); 
      }
    } catch (err) { 
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* <h1>Search Movies</h1>
      <Searchbar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>} */}
      <ul>
        {results.map((movie) => (
          <li key={movie.imdbID}>
            <h2>{movie.Title} ({movie.Year}) </h2>
            <img src={movie.Poster} alt={movie.Title} />
           
          </li>
        ))}
      </ul>
      {/* <p>{movie.Plot}</p> */}
    </div>
  );
}

export default SearchPage;