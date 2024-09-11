import React, { useState, useEffect } from 'react';
import Searchbar from '../components/Searchbar';
import MovieCarousel from '../components/MovieCarousel';
import axios from 'axios';

const API_KEY = '75965813';

function Homepage() {
  const [defaultMovies, setDefaultMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);

  useEffect(() => {
    const fetchDefaultMovies = async () => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?s=horror&apikey=${API_KEY}`);
        const data = response.data;
        if (data.Search) {
          setDefaultMovies(data.Search.slice(0, 10));
        } else {
          setDefaultMovies([]);
        }
      } catch (error) {
        console.error('There was an error when fetching default movies:', error);
      }
    };

    fetchDefaultMovies();
  }, []);

  const handleSearch = async (query) => {
    setIsSearchActive(true);
    try {
      const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
      const data = response.data;
      if (data.Search) {
        setSearchResults(data.Search);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
      <h1 style={{color:"white"}}>Search Movies</h1>
      <Searchbar onSearch={handleSearch} />
      <MovieCarousel movies={isSearchActive ? searchResults : defaultMovies} />
    </div>
  );
}

export default Homepage;