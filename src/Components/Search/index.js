import { useState } from "react";
import './styles.css'


const Search = ({onSearch}) => {
  const [searchItem, setSearchItem] = useState('')

  const handleSearch = () => {
    onSearch(searchItem);
  }
  return (
    <div className='container'>
      <input
       className='search-input' 
       type="text" value={searchItem} 
       onChange={(e) => setSearchItem(e.target.value)} 
       placeholder='Search' 
      />
      <button className='search-button' onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;