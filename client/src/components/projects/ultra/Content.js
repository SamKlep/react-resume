import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Content = () => {
  return (
    <div>
      <Container className='info-container '>
        <Row className='justify-content-lg-center mb-5'>
          <Col className='text-center' lg={6}>
            <a
              href='https://github.com/SamKlep/ultra-demo'
              target='_blank'
              rel='noreferrer'>
              <Button className='m-3'>
                <i className='fab fa-github-square'></i> GitHub
              </Button>
            </a>
            <a
              href='https://ultra-demo.herokuapp.com/'
              target='_blank'
              rel='noreferrer'>
              <Button className='m-3'>
                <i className='fas fa-link'></i> Link
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Content
