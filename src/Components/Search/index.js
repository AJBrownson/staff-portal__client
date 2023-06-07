import React from "react";
import './styles.css'


const Search = () => {
  return (
    <div className='container'>
      <input className='search-input' type="text" placeholder='Search' />
      <button className='search-button'>Search</button>
    </div>
  );
};

export default Search;
