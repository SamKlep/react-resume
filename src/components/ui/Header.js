import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Header = () => {
  return (
    <div>
      <Navbar bg='warning' variant='dark'></Navbar>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Navbar.Brand className='logo' href='#home'>
          SbK
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'></Nav>
          <Nav>
            <Nav.Link href='#features'>About</Nav.Link>
            <Nav.Link href='#pricing'>Services</Nav.Link>
            <Nav.Link href='#features'>Resume</Nav.Link>

            <NavDropdown title='Portfolio' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>
                Crypto Zone
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Find A House
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>
                Contact Keeper
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.1'>
                Nasa Image of the Day
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Serial Killers & Unsolved Mysteries
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>
                Space X Launch Data
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#pricing'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
