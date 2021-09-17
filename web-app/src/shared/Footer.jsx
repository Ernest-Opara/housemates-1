import React from 'react'

const Footer = () => {
  return (
    <footer id='footer' className='pt-4 my-md-5 pt-md-5 border-top'>
      <div className='row'>
        <div className='col-12 col-md'>
          <img className='mb-2' src='logo.png' alt='' />
          <small className='d-block mb-3 footer-text'>&copy; 2021</small>
        </div>
        <div className='col-6 col-md'>
          <h5>Features</h5>
          <ul className='list-unstyled text-small'>
            <li>
              <a className='footer-text' href='#'>
                Cool stuff
              </a>
            </li>
            <li>
              <a className='footer-text' href='#'>
                Random feature
              </a>
            </li>
            <li>
              <a className='footer-text' href='#'>
                Team feature
              </a>
            </li>
            <li>
              <a className='footer-text' href='#'>
                Stuff for developers
              </a>
            </li>
            <li>
              <a className='footer-text' href='#'>
                Another one
              </a>
            </li>
            <li>
              <a className='footer-text' href='#'>
                Last time
              </a>
            </li>
          </ul>
        </div>
        <div className='col-6 col-md'>
          <h5>Resources</h5>
          <ul className='list-unstyled text-small'>
            <li>
              <a className='footer-text' href='#'>
                Resource
              </a>
            </li>
            <li>
              <a className='footer-text' href='#'>
                Resource name
              </a>
            </li>
            <li>
              <a className='footer-text' href='#'>
                Another resource
              </a>
            </li>
            <li>
              <a className='footer-text' href='#'>
                Final resource
              </a>
            </li>
          </ul>
        </div>
        <div className='col-6 col-md'>
          <h5>About</h5>
          <ul className='list-unstyled text-small'>
            <li>
              <a className='footer-text' href='#'>
                Team
              </a>
            </li>
            <li>
              <a className='footer-text' href='#'>
                Locations
              </a>
            </li>
            <li>
              <a className='footer-text' href='#'>
                Privacy
              </a>
            </li>
            <li>
              <a className='footer-text' href='#'>
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
