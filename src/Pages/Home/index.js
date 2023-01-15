import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <>
      <div className='wrapper'>
        <div className='card'>
          <h3>Home and Away Restaurant Staff Sign In Portal</h3>
          <Link to='/add-staff'>
          <button>SCAN</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default index