import React from 'react'
import { Nav } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
      <Nav
        className='justify-content-center bg-dark flex-column text-center'
        activeKey='/home'
        style={{ height: '250px' }}>
        <Nav.Item>
          <Nav.Link className='logo' href='/'>
            SbK
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-1'>Email</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-2'>GitHub</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-3'>LinkedIn</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default Footer
