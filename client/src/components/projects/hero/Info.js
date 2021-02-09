import React from 'react'
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Info = () => {
  return (
    <div>
      <Container className='info-container'>
        <Row className='justify-content-lg-center mb-5'>
          <Col lg={8}>
            <h1>Hero's Corner</h1>
            <p className='lead'>
              Anyone who has ever been an avid collector or reader of comic
              books will know how difficult it can be to obtain certain key
              issues at your local comic book shop.
            </p>
            <p className='lead'>
              With that being said, create an account and log in to the{' '}
              <strong>Hero's Corner!</strong> See the condition and ratings of
              the books in question, read their summary, find out about key
              issues and their value! After you've found what you're looking
              for, add everything to your cart and check out.
            </p>
          </Col>
        </Row>
        <hr />
        <Row className='mt-5 mb-5 align-items-center '>
          <Col className='stack-container'>
            <h1 className='mt-5'>Tech Stack</h1>
            <p className='lead'>
              {' '}
              This project is a full-stack e-commerce store built with React,
              Node, Bootstrap and utilizes Redux for state management. The user
              can register for an account, login, view their profile and update
              credentials, view our inventory of books, add products to cart,
              and pay with PayPal.
            </p>
          </Col>
          <Col>
            <ListGroup className='skills-list text-center mx-auto'>
              <ListGroup.Item className='bg-light'>HTML</ListGroup.Item>
              <ListGroup.Item>CSS</ListGroup.Item>
              <ListGroup.Item className='bg-light'>React</ListGroup.Item>
              <ListGroup.Item>React-Bootstrap</ListGroup.Item>
              <ListGroup.Item className='bg-light'>Redux</ListGroup.Item>
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
