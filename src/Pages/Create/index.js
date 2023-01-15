import React from 'react'
import Form from '../../Components/Form'
import './styles.css'
import { Link } from 'react-router-dom'


const index = () => {
  return (
    <>
    {/* <Link to ='/get-staff'>
        <button>View Records</button>
      </Link> */}
    <div className='outer-wrapper'>
      <div className='inner-wrapper'>
        <Form />
      </div>
      </div>
    </>
  )
}

export default index