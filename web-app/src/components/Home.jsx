import React from 'react'
import Layout from '../shared/Layout'

const Home = () => {
  return (
    <Layout>
      <section id='top'>
        <div className='inner'>
          <img className='logo' src='logo.png' />
        </div>

        <div className='inner cover'>
          <h1 className='cover-heading'>Rent rooms with HouseMates.</h1>
          <p className='second-text'>
            Trusted by over 1,700,000 businesses worldwide
          </p>
        </div>

        <form className='form-inline'>
          <div className='form-group mx-sm-3 mb-2'>
            <label
              htmlFor='inputPassword2'
              className='sr-only col-form-label-lg'
            >
              Email
            </label>
            <input
              type='email'
              className='form-control'
              id='inputPassword2'
              placeholder='Email'
            />
          </div>
          <button type='submit' className='btn btn-dark'>
            Get Started
          </button>
        </form>
      </section>

      <p id='ptext'>
        Try HouseMates free for 14 days, no credit card required. By entering
        your email, you agree to receive marketing emails from HouseMates.
      </p>

      <div className='wave-container'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#008060'
            fillOpacity='1'
            d='M0,128L21.8,117.3C43.6,107,87,85,131,90.7C174.5,96,218,128,262,149.3C305.5,171,349,181,393,197.3C436.4,213,480,235,524,240C567.3,245,611,235,655,224C698.2,213,742,203,785,192C829.1,181,873,171,916,149.3C960,128,1004,96,1047,85.3C1090.9,75,1135,85,1178,122.7C1221.8,160,1265,224,1309,256C1352.7,288,1396,288,1418,288L1440,288L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z'
          ></path>
        </svg>
      </div>

      <img className='home' src='house.png' />

      <section className='white-section' id='features'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='feature-box col-lg-4'>
              <i className='icon fas fa-check-circle fa-4x'></i>
              <h3 className='feature-title'>
                Beautiful themes that are responsive.
              </h3>
              <p className='fparagraph'>
                No design skills needed. You have complete control over the look
                and feel of your website, from its layout, to content and
                colors.
              </p>
            </div>

            <div className='feature-box col-lg-4'>
              <i className='icon fas fa-bullseye fa-4x'></i>
              <h3 className='feature-title'>Pricing as low as $29/month</h3>
              <p className='fparagraph'>
                Whether you sell online, on social media, in store, or out of
                the trunk of your car, HouseMates has you covered. Start selling
                anywhere for just $29/month.
              </p>
            </div>

            <div className='feature-box col-lg-4'>
              <i className='icon fas fa-heart fa-4x'></i>
              <h3 className='feature-title'>
                Trusted by over 1,700,000 businesses worldwide
              </h3>
              <p className='fparagraph'>
                HouseMates handles everything from marketing and payments, to
                secure checkout and shipping
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className='colored-section' id='press'>
        <img className='press-logo' src='images/img1.png' alt='tc-logo' />
        <img className='press-logo' src='images/img2.png' alt='tc-logo' />
        <img className='press-logo' src='images/img3.png' alt='tc-logo' />
        <img className='press-logo' src='images/img4.png' alt='tc-logo' />
        <img className='press-logo' src='images/img5.png' alt='tc-logo' />
        <img className='press-logo' src='images/img6.png' alt='tc-logo' />
        <img className='press-logo' src='images/img7.png' alt='tc-logo' />
        <img className='press-logo' src='images/img8.png' alt='tc-logo' />
      </section>
      <hr className='bottom-ruler' />
    </Layout>
  )
}

export default Home
