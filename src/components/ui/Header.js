import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <div>
      <Navbar bg='warning' variant='dark'></Navbar>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Navbar.Brand className='logo' href='/'>
          SbK
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'></Nav>
          <Nav>
            <Link
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              <Nav.Link className='nav-item'>About</Nav.Link>
            </Link>
            <Link
              to='services'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              <Nav.Link className='nav-item'>Services</Nav.Link>
            </Link>
            <Link
              to='resume'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              <Nav.Link className='nav-item'>Resume</Nav.Link>
            </Link>
            <Link
              to='portfolio'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              <Nav.Link className='nav-item'>Portfolio</Nav.Link>
            </Link>
            <Link
              to='contact'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              <Nav.Link className='nav-item'>Contact</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
