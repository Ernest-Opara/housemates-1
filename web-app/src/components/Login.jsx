import React from 'react'
import Layout from '../shared/Layout'

const Login = () => {
  const handleLogin = () => {}
  return (
    <Layout>
      <div className='login '>
        <form>
          <div className='cont d-flex flex-column justify-content-center'>
            <div className='form sign-in'>
              <h2>Welcome back,</h2>
              <label>
                <span>Email</span>
                <input type='email' autoComplete='off' />
              </label>
              <label>
                <span>Password</span>
                <input type='password' autoComplete='off' />
              </label>
              <p className='forgot-pass'>Forgot password?</p>
              <button type='button' onClick={handleLogin} className='submit'>
                Sign In
              </button>
              <p className=' signup d-flex justify-content-center'>OR</p>
              <p className='signup d-flex justify-content-center'>
                {' '}
                <a
                  href='/signup'
                  className=' btn btn-primary mx-auto'
                  style={{ width: 'max-content' }}
                >
                  {' '}
                  Sign up
                </a>
              </p>

              <button>
                Connect with <span>facebook</span>
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
