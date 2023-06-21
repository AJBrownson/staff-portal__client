import { useState, useEffect } from "react";
import axios from 'axios'
import  './styles.css'
// import Search from "../../Components/Search";


const Archive = () => {
  const [archive, setArchive] = useState([]);

  useEffect(() => {
    async function retrieveArchive() {
      try {
        const { data } = await axios.get("https://portal-server-g4eg.onrender.com/api/archive")
        setArchive(data.data.archive);
      } catch (error) {
        console.error('Error retrieving archived records:', error);
      }
    }
    retrieveArchive();
  }, []);

  const searchArchive = async (e) => {
    const searchValue = e.target.value;
    try {
      const { data } = await axios.get(`https://portal-server-g4eg.onrender.com/api/archive?search=${searchValue}`);
      setArchive(data.data.archive);
    } catch (error) {
      console.error('Error searching archive:', error)
    }
  }

  return (
    <div>
      <h1>Archive</h1>
      {/* <Search onSearch={handleSearch} /> */}

      {searchArchive.length > 0 && (
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
            {searchArchive.map((result, index) => (
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