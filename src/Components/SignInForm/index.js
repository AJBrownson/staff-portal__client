import { useState } from "react";
import axios from "axios";
import "./styles.css";
import { QrReader } from "react-qr-reader";
import Swal from 'sweetalert2'

const SignInForm = (props) => {
  const getDate = new Date();
  const displayTime = getDate.toLocaleTimeString();
  const displayDate = getDate.toDateString();

  const [data, setData] = useState("");
  const [comment, setComment] = useState("");
  const [time, setTime] = useState(displayTime);
  const [date, setDate] = useState(displayDate);

  // const [loading, setLoading] = useState(true)
  

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://portal-server-g4eg.onrender.com/api/staff", {
        data,
        comment,
        date,
        time,
      })
      .then((res) => {
        // setLoading(false)

        // popup modal for successful form submission
        Swal.fire({
          icon: 'success',
          title: 'Sign in successful!',
          showConfirmButton: false,
          timer: 2000
        })
      })
      .catch((err) => {
        // setLoading(false)

        // popup modal for unsuccessful form submission
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'An error occurred. Try again',
          showConfirmButton: false,
          timer: 2000
        })
      });

    // This clears form input values after submission
    setData("");
    setComment("");
    setTime(displayTime);
    setDate(displayDate);
  };

  // if (loading) {
  //   return <p>Loading...</p> Add sweet alert loading modal
  // }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="scan">
          <div className="inner">
            <QrReader
              onResult={(result, error) => {
                if (!!result) {
                  setData(result?.text);
                }

                if (!!error) {
                  console.info(error);
                }
              }}
              style={{ width: "100%" }}
              constraints={{ facingMode: "environment" }}
            />
          </div>
        </div>
       
        <label>Name</label>
        <input
          type="text"
          value={data}
          readOnly={true}
          onChange={(e) => setData(e.target.value)}
        />

        <label>Comment</label>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <input
          type="hidden"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <input
          type="hidden"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <div className="btn-div">
          <input className="btn" type="submit" />
        </div>
      </form>
    </>
  );
};

export default SignInForm;
