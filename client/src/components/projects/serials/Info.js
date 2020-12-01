import React from 'react'
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Info = () => {
  return (
    <div>
      <Container>
        <Row className='justify-content-lg-center mb-5'>
          <Col>
            <h1>Serial Killers & Unsolved Mysteries</h1>
            <p className='lead'>
              There are more than 222,000 unsolved murders since 1980 and over
              2,000 current active serial killers as of July 2020. This type of
              phenomenon cannot be ignored. Here you will find the organized
              information in regards to Serial Killers and Unsolved Mysteries.
            </p>
            <p>
              Browse the top 20 serial killers of all time, get to the bottom of
              the psychological intentions of the killer; then when you’ve had
              enough gruesome details— switch over to the top unsolved mysteries
              of the world! There’s enough content to make you walk swiftly
              through the dark.
            </p>
          </Col>
        </Row>
        <hr />
        <Row className='mt-5 mb-5 align-items-center'>
          <Col className='justify-content-lg-center'>
            <h1>Tech Stack</h1>
            <p className='lead'>
              {' '}
              This project was meant to be a full-stack exercise in organizing
              content and layout experimentation. I used Node, Express, and
              Mongo for the backend and data persistence; React, CSS & Bootstrap
              on the frontend.
            </p>
          </Col>
          <Col className=' text-center'>
            <ListGroup className='mx-auto skills-list'>
              <ListGroup.Item className='bg-light'>Node</ListGroup.Item>
              <ListGroup.Item>Express</ListGroup.Item>
              <ListGroup.Item className='bg-light'>React</ListGroup.Item>
              <ListGroup.Item>Mongo</ListGroup.Item>
              <ListGroup.Item className='bg-light'>CSS</ListGroup.Item>
              <ListGroup.Item className='bg-light'>Bootstrap</ListGroup.Item>
              <ListGroup.Item className='bg-light'>Git</ListGroup.Item>
              <ListGroup.Item className='bg-light'>Heroku</ListGroup.Item>
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
