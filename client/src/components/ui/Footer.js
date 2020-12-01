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
          <a
            href='mailto:samklepdev@gmail.com'
            target='_blank'
            rel='noreferrer'>
            samklepdev@gmail.com
          </a>
        </Nav.Item>
        <Nav.Item>
          <a href='https://github.com/samklep' target='_blank' rel='noreferrer'>
            GitHub
          </a>
        </Nav.Item>
        <Nav.Item>
          <a
            href='https://www.linkedin.com/in/samuel-klepper-0435b5193/'
            target='_blank'
            rel='noreferrer'>
            LinkedIn
          </a>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default Footer
