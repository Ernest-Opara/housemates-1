import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect fixed='top' expand='lg' bg='dark' variant='dark'>
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Navbar.Brand href='/'>
              <img src='logo.png' alt='' />
            </Navbar.Brand>
            <Nav className='me-auto'>
              <Nav.Link href='#features'>Houses</Nav.Link>
              <Nav.Link href='#pricing'>Pricing</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href='/login'>Login</Nav.Link>
              <Nav.Link href='/signup'>Sign up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
