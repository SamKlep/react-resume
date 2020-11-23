import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

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
            <Form>
              <Form.Group controlId='exampleForm.ControlInput1'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='email' placeholder='name@example.com' />
                <Form.Group controlId='exampleForm.ControlInput2'></Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='name@example.com' />
              </Form.Group>

              <Form.Group controlId='exampleForm.ControlTextarea1'>
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as='textarea' rows={3} />
              </Form.Group>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact
