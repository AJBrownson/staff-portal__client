import { useState } from 'react'
import axios from 'axios'
import './styles.css'



const Form = () => {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.post('http://localhost:5000/api/staff', { name, comment })
    .then(res => {
      console.log(res.data)
      window.alert('Sign In successful!')
    })
    .catch((err) => {
      console.log(err)
      window.alert('An error occurred. Try again!')
    })

    // This clears form input values after submission
    setName('')
    setComment('')
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
      <label>Name</label>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
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