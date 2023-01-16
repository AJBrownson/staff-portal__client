import { useState } from 'react'
import axios from 'axios'
import './styles.css'



const Form = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.post('http://localhost:5000/api/staff', { username, password })
    .then(res => {
      console.log(res.data)
      window.alert('Sign In successful!')
    })
    .catch((err) => {
      console.log(err)
      window.alert('An error occurred. Try again!')
    })

    // This clears form input values after submission
    setUsername('')
    setPassword('')
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
      <label>Name</label>
        <input 
          type="text" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

      <label>Comment</label>
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      <div className='btn-div'>
      <input className='btn' type="submit" />
      </div>
    </form>
    </>
  )
}

export default Form