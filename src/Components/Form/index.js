import { useState } from 'react'
import axios from 'axios'
import './styles.css'
import { QrReader } from 'react-qr-reader';



const Form = (props) => {
  const getDate = new Date()
  const displayTime = getDate.toLocaleTimeString()
  const displayDate = getDate.toDateString()

  const [data, setData] = useState('')
  const [comment, setComment] = useState('')
  const [time, setTime] = useState(displayTime)
  const [date, setDate] = useState(displayDate)


  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.post('https://portal-server-g4eg.onrender.com/api/staff', { data, comment, date, time })
    .then(res => {
      window.alert('Sign In successful!')
    })
    .catch((err) => {
      window.alert('An error occurred. Try again!')
    })

    // This clears form input values after submission
    setData('')
    setComment('')
    setTime(displayTime)
    setDate(displayDate)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
        constraints={{ facingMode: 'environment' }}
      />
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
      <div className='btn-div'>
      <input className='btn' type="submit" />
      </div>
    </form>
    </>
  )
}

export default Form