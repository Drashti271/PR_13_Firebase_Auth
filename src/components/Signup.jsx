import React, { useState } from 'react'
import { auth } from '../firebase/config.js'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  const [user, setUser] = useState({})
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = user

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/signin')
      })
      .catch((error) => {
        console.log(error.message)
      })
    setUser({});
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className='card px-4 py-5'>
            <h2 className='text-center'>Sign Up</h2>

            <input type="email" name='email' placeholder='Email'
              onChange={handleChange} className="form-control mb-3" />

            <input type="password" name='password' placeholder='Password'
              onChange={handleChange} className="form-control mb-3" />

            <button className='btn btn-primary'>Sign Up</button>

            <p className='mt-3'>
              Already have an account? <Link to="/signin">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup