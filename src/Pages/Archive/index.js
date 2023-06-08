import { useState } from "react";
import axios from 'axios'
import  './styles.css'
import Search from "../../Components/Search";


const Archive = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchItem) => {
    try {
      const response = await axios.get('http://localhost:5000/api/archive', {
        params: { searchItem }
      })
      setSearchResults(response.data)
    } catch (error) {
      console.error('Error occurred during search', error)
    }
  }
  return (
    <div>
      <h1>Archive</h1>
      <Search onSearch={handleSearch} />

      {searchResults.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Comment</th>
              <th>Time</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((result, index) =>(
              <tr key={index}>
                <td>{result.name}</td>
                <td>{result.comment}</td>
                <td>{result.time}</td>
                <td>{result.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Archive;
