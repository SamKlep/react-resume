import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Form from '../contact/Form'

const Contact = () => {
  return (
    <div className='mt-5'>
      <Container>
        <Row className='justify-content-lg-center mb-5'>
          <Col className='text-center' lg={6}>
            <h1>Contact</h1>
            <h3>Let's get in touch.</h3>
          </Col>
        </Row>
        <Row className='justify-content-lg-center mb-5'>
          <Col lg={6}>
            <Form />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact
