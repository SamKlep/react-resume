import React from 'react'
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Info = () => {
  return (
    <div>
      <Container>
        <Row className='justify-content-lg-center mb-5'>
          <Col>
            <h1>Contact Keeper</h1>
            <p className='lead'>
              Everyone knows the benefits of having all of your contacts in one
              convenient place, now you can do it in a more modern way. Say
              hello to Contact Keeper, the modern, simple approach to having
              your contacts organized and online.
            </p>
            <p>
              Secure, sleek and still growing— Contact Keeper can handle the job
              of keeping your data safe and stored online for your needs.
              Register, create an account and start creating contacts. Search
              and filter for a specific contact, label and organize them into
              personal or professional categories.
            </p>
          </Col>
        </Row>
        <hr />
        <Row className='mt-5 mb-5'>
          <Col>
            <h1 className='mt-5'>Tech Stack</h1>
            <p className='lead'>
              {' '}
              This was a simple exercise in state management across multiple
              components using React. Implementation of JWT & BcryptJS for
              authentication, Express and Mongo for the backend, React and React
              Context API for front-end UI.
            </p>
          </Col>
          <Col>
            <ListGroup className='skills-list text-center mx-auto'>
              <ListGroup.Item className='bg-light'>Node</ListGroup.Item>
              <ListGroup.Item>Express</ListGroup.Item>
              <ListGroup.Item className='bg-light'>React</ListGroup.Item>
              <ListGroup.Item>CSS</ListGroup.Item>
              <ListGroup.Item className='bg-light'>Mongo</ListGroup.Item>
              <ListGroup.Item>Bootstrap</ListGroup.Item>
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
