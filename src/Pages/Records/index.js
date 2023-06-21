import { useState, useEffect } from "react";
import axios from "axios";
import StaffTable from "./data";
import "./styles.css";


const Records = () => {
  const [staffMembers, setStaffMembers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)

  useEffect(() => {
    axios
    .get("https://portal-server-g4eg.onrender.com/api/staff")
      .then((res) => {
        setStaffMembers(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true)
        setLoading(false);
      });
  }, []);

  if (error) {
    return <div className="error">Failed to fetch data. Check your network connectivity</div>
  }

  if (loading) {
    return (
      <p className='loading'>Loading...</p>
    )
  }

  if (!staffMembers) return null;

  const staffTable = () => {
    return staffMembers.map((data, i) => {
      return <StaffTable obj={data} key={i} />;
    });
  };
  
  return (
    <>
    
    <nav>
      <button>Archive</button>
    </nav>

    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Comment</td>
          <td>Time</td>
          <td>Date</td>
        </tr>
      </thead>
      <tbody>{staffTable()}</tbody>
    </table>
    </>
  );
};

export default Records;