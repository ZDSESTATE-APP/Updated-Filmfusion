import React, { useState } from 'react';
import '../styles/SearchBar.css'
import PropTypes from 'prop-types';

function Searchbar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    } else {
      console.error('onSearch is not defined');
    }
  };

  return (
    <div className="searchbar-div">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search for movies or series..."
          className='input-field'
        />
        <button className='search-btn' type="submit">Search</button>
      </form>
    </div>
  );
}


Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default Searchbar;
