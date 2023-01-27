import { useState, useEffect } from "react";
import axios from "axios";
import StaffTable from "./data";
import "./styles.css";

const Records = () => {
  const [staffMembers, setStaffMembers] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/staff")
      .then((res) => {
        setStaffMembers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!staffMembers) return null;

  const staffTable = () => {
    return staffMembers.map((data, i) => {
      return <StaffTable obj={data} key={i} />;
    });
  };
  return (
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
  );
};

export default Records;