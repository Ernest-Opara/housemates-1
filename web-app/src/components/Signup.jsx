import React from 'react'
import Layout from '../shared/Layout'

const Signup = () => {

  const handleSignUp = () =>{

  }
  return <Layout>{
    <div className='login '>
        <form>
          <div className='cont d-flex flex-column justify-content-center'>
            <div className='form sign-in'>
             
                <h2 className='text-secondary'>SIGN UP</h2>
              

              <label>
                <span>First Name</span>
                <input
                  type='text'
                  name='firstName'
                  autoComplete='off'
                />
              </label>

              <label>
                <span>Last Name</span>
                <input
                  type='text'
                  name='lName'
                  autoComplete='off'
                />
              </label>

              <label>
                <span>Email</span>
                <input
                  type='email'
                  name='email'
                  autoComplete='off'
                />
              </label>
              <label>
                <span>Password</span>
                <input
                  type='password'
                  name='password'
                  autoComplete='off'
                />
              </label>
              <button type='button' className='submit'>
                Sign Up
              </button>
            </div>
            <div className='sub-cont'>
              <div className='img'></div>
            </div>
          </div>
        </form>
      </div>
  }</Layout>
}

export default Signup
