import React from 'react'
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Info = () => {
  return (
    <div>
      <Container>
        <Row className='justify-content-lg-center mb-5'>
          <Col lg={6}>
            <h1>FH Realty</h1>
            <p className='lead'>
              Anyone that has ever searched for a new house or apartment knows
              how painful the entire process can be. The time spent researching
              and sifting through data can be dreadful in itself. If you have
              ever been on the selling end of the deal, you know that can be a
              whole other world of concern. Here at FH Realty, we handle all the
              heavy-lifting for you.
            </p>
            <p>
              Leave all the worrying and planning to one of our top-performing
              Realtors! We have the experience and the know-how to sell your
              property or get you in to a cozy new home. Create an account and
              browse the listings, search for a house by specifics, check out
              the seller of the month or our featured listings— find your dream
              home today!
            </p>
          </Col>
        </Row>
        <hr />
        <Row className='mt-5 mb-5 justify-content-md-center'>
          <Col className='mt-5'>
            <h1>Tech Stack</h1>
            <p className='lead'>
              The goal of this project was to create a full-stack application
              that was served on Express and persisted data to a database. I
              chose Mongo for the database, JWT/Bcrypt/Cookies for
              authentication, and React-Bootstrap for styling. The user can
              search through the data to reutn a specific hosue with desired
              number of rooms and or bathrooms.
            </p>
          </Col>
          <Col className='float-right'>
            <ListGroup>
              <ListGroup.Item className='bg-light'>Node</ListGroup.Item>
              <ListGroup.Item>Express</ListGroup.Item>
              <ListGroup.Item className='bg-light'>React</ListGroup.Item>
              <ListGroup.Item>CSS</ListGroup.Item>
              <ListGroup.Item className='bg-light'>Mongo</ListGroup.Item>
              <ListGroup.Item>Bootstrap</ListGroup.Item>
              <ListGroup.Item className='bg-light'>
                React-Lightbox
              </ListGroup.Item>
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
