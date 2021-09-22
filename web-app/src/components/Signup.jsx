import React, { useState } from 'react'
import Layout from '../shared/Layout'
import { signup } from '../axios'

const Signup = () => {
  const [error, setError] = useState('')
  const [value, setValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setValue((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  const handleSignup = async () => {
    const firstName = value.firstName
    const lastName = value.lastName
    const email = value.email
    const password = value.password

    const user = await signup({
      firstName,
      lastName,
      email,
      password
    })

    console.log(user)

    if (user.error) {
      setError(user.error.data)
    }
  }

  return (
    <Layout>
      <div className='login'>
        <form>
          <div className='cont d-flex flex-column justify-content-center'>
            <div className='form sign-in'>

              {error ? (
                <div className='text-danger'>{error}</div>
              ) : (
                <h2 className='text-secondary'>Sign up</h2>
              )}

              <label>
                <span>First Name</span>
                <input
                  type='text'
                  name='firstName'
                  value={value.firstName}
                  onChange={handleChange}
                  autoComplete='off'
                />
              </label>

              <label>
                <span>Last Name</span>
                <input
                  type='text'
                  name='lastName'
                  value={value.lastName}
                  onChange={handleChange}
                  autoComplete='off'
                />
              </label>

              <label>
                <span>Email</span>
                <input
                  type='email'
                  name='email'
                  value={value.email}
                  onChange={handleChange}
                  autoComplete='off'
                />
              </label>
              <label>
                <span>Password</span>
                <input
                  type='password'
                  name='password'
                  value={value.password}
                  onChange={handleChange}
                  autoComplete='off'
                />
              </label>
              <button type='button' onClick={handleSignup} className='submit'>
                Sign Up
              </button>
            </div>
            <div className='sub-cont'>
              <div className='img'></div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Signup
