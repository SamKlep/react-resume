import React from 'react'
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Info = () => {
  return (
    <div>
      <Container>
        <Row className='justify-content-lg-center mb-5'>
          <Col>
            <h1>SpaceX Launch Data</h1>
            <p className='lead'>
              SpaceX is a name everyone is probably familiar with now. They have
              been launching rockets into space throughout the last decade and
              do not seem to be slowing down any time soon. SpaceX founder and
              CEO, Elon Musk, has his eggs in many baskets and has
              revolutionized many tech industry standards already with companies
              such as Tesla, Neuralink and the Boring Company.
            </p>
            <p>
              Have a moment to sift through the publicly available data of
              SpaceX launches. See which ones have succeeded and which ones did
              not. Observe dates and stats to paint a bigger picture of the
              entire launch history.
            </p>
          </Col>
        </Row>
        <hr />
        <Row className='mt-5 mb-5 align-items-center'>
          <Col>
            <h1>Tech Stack</h1>
            <p className='lead'>
              {' '}
              This project was meant to be an exercise in implementing Node,
              GraphQL, Express, React, a third party API and deployment to
              Heroku. Inspired by my love for Science, technology, math and
              progress.
            </p>
          </Col>
          <Col>
            <ListGroup className='mx-auto skills-list text-center'>
              <ListGroup.Item className='bg-light'>Node</ListGroup.Item>
              <ListGroup.Item>GraphQL</ListGroup.Item>
              <ListGroup.Item className='bg-light'>React</ListGroup.Item>
              <ListGroup.Item>Express</ListGroup.Item>
              <ListGroup.Item className='bg-light'>CSS</ListGroup.Item>
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
