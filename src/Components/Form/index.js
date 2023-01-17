import { useState } from 'react'
import axios from 'axios'
import './styles.css'
import { QrReader } from 'react-qr-reader';



const Form = (props) => {
  const [data, setData] = useState('')
  const [comment, setComment] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.post('http://localhost:5000/api/staff', { data, comment })
    .then(res => {
      console.log(res.data)
      window.alert('Sign In successful!')
    })
    .catch((err) => {
      console.log(err)
      window.alert('An error occurred. Try again!')
    })

    // This clears form input values after submission
    setData('')
    setComment('')
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
      />
      <label>Name</label>
        <input 
          type="text" 
          value={data}
          onChange={(e) => setData(e.target.value)}
        />

      <label>Comment</label>
        <input 
          type="text" 
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      <div className='btn-div'>
      <input className='btn' type="submit" />
      </div>
    </form>
    </>
  )
}

export default Form