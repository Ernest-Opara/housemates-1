import React from 'react'
import Header from './Header'
import Footer from './Footer'

//This is how to use a component in react, visit this link to see how to use react-bootstrap components https://react-bootstrap.github.io/components/alerts
import { Container } from 'react-bootstrap'

const Layout = (props) => {
  return (
    <>
      <Header />
       {/* eslint-disable-next-line react/prop-types */}
      <Container className='mt-3'>{props.children}</Container>
      <Footer />
    </>
  )
}
export default Layout
