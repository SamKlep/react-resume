import React from 'react'
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Info = () => {
  return (
    <div>
      <Container className='info-container'>
        <Row className='justify-content-lg-center mb-5'>
          <Col lg={8}>
            <h1>Ultra Demolition</h1>
            <p className='lead'>
              Anyone that has ever been in the position of needing demolition or
              excavation services knows the kind of work that goes in to it.
              Therefore, you would not want to do much guessing when it comes to
              reliability and safety.
            </p>
            <p className='lead'>
              Ultra Demolition is a local demolition company that can handle all
              the hard-work for you. They take pride in their work and have a
              certified staff.
            </p>
          </Col>
        </Row>
        <hr />
        <Row className='mt-5 mb-5 align-items-center '>
          <Col className='stack-container'>
            <h1 className='mt-5'>Tech Stack</h1>
            <p className='lead'>
              {' '}
              This was a simple brochure website built with React, HTML, CSS,
              and React-Bootstrap. Since the client had primarily a lot of
              images, I centered the content based around that. Using
              react-photo-gallery and react-lightbox, I was able able to create
              a lightbox slideshow.
            </p>
          </Col>
          <Col>
            <ListGroup className='skills-list text-center mx-auto'>
              <ListGroup.Item className='bg-light'>HTML</ListGroup.Item>
              <ListGroup.Item>CSS</ListGroup.Item>
              <ListGroup.Item className='bg-light'>React</ListGroup.Item>
              <ListGroup.Item>React-Bootstrap</ListGroup.Item>
              <ListGroup.Item className='bg-light'>Git</ListGroup.Item>
              <ListGroup.Item>Heroku</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Link to='/'>
          <Button className='mb-5'>Go Back</Button>
        </Link>
      </Container>
    </div>
  )
}

export default Info
