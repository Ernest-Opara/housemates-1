import React, { useState } from 'react'
import Layout from '../shared/Layout'
import { login } from '../axios'

const Login = () => {
  const [error, setError] = useState('')
  const [value, setValue] = useState({ email: '', password: '' })

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

  const handleLogin = async () => {
    const email = value.email
    const password = value.password

    const user = await login({
      email,
      password
    })

    if (user.error) {
      setError(user.error.data)
    }
  }

  return (
    <Layout>
      <div className='login '>
        <form>
          <div className='cont d-flex flex-column justify-content-center'>
            <div className='form sign-in'>
              {error ? (
                <div className='text-danger'>{error}</div>
              ) : (
                <h2 className='text-secondary'>Welcome back</h2>
              )}

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
                  onChange={handleChange}
                  name='password'
                  value={value.password}
                  autoComplete='off'
                />
              </label>
              <a href="/signup" className='forgot-pass'>Sign up</a>

              <button type='button' onClick={handleLogin} className='submit'>
                Sign In
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

export default Login
