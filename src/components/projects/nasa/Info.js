import React from 'react'
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Info = () => {
  return (
    <div>
      <Container>
        <Row className='justify-content-lg-center mb-5'>
          <Col>
            <h1>NASA Image of the Day</h1>
            <p className='lead'>
              Right in your very own galactic backyard, there exists a plethora
              of mysteries and wonders happening at this very moment! From
              exploding supernovas to pulsating binary stars— there’s a whole
              other world just waiting to be discovered.
            </p>
            <p>
              Pack your curiosity and make sure all oxygen levels are full. Come
              and witness the marvel of space first-hand with NASA’s Image of
              the Day API. Observe today’s wonders or a day that has passed,
              just type in the date in question and observe the cosmic
              spectacles just waiting to be discovered.
            </p>
          </Col>
        </Row>
        <hr />
        <Row className='mt-5 mb-5 justify-content-lg-center'>
          <Col>
            <h1 className=''>Tech Stack</h1>
            <p className='lead'>
              {' '}
              This project was meant to be a practice of React and its workflow
              in regards to making third-party API calls and how to display the
              data. Naturally my innate curiosity for Astronomy provoked the
              creation of this project, but it also fell in line with my drive
              to create useful products for the real-world.
            </p>
          </Col>
          <Col>
            <ListGroup className='text-center'>
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
