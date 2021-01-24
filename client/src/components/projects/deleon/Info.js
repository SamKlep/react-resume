import React from 'react'
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Info = () => {
  return (
    <div>
      <Container className='info-container'>
        <Row className='justify-content-lg-center mb-5'>
          <Col lg={8}>
            <h1>De Leon Safety Solutions</h1>
            <p className='lead'>
              Anyone that has ever driven down Highway 225 going towards La
              Porte, TX has probably noticed the many refineries scattered
              about. Working at the refineries can be an accident waiting to
              happen. Therefore, being up to date on all safety regulations and
              OSHA standards can really help one have the upper hand.
            </p>
            <p className='lead mt-5'>
              Leave all the worrying about safety, regulations and the
              what-to-do up to De Leon Safety Solutions (DSS). Trained,
              certified and ready to share the most up to date information from
              OSHA standards.
            </p>
          </Col>
        </Row>
        <hr />
        <Row className='stack-container'>
          <Col>
            <h1>Tech Stack</h1>
            <p className='lead'>
              The goal of this project was to create a brochure type web
              application that satisfied the clients needs. In this case, it was
              purely information being displayed in which I used HTML, CSS,
              React, React-Bootstrap, & React-Lightbox.
            </p>
          </Col>
          <Col>
            <ListGroup className='skills-list mx-auto text-center'>
              <ListGroup.Item className='bg-light'>HTML</ListGroup.Item>
              <ListGroup.Item>CSS</ListGroup.Item>
              <ListGroup.Item className='bg-light'>React</ListGroup.Item>
              <ListGroup.Item>React-Bootstrap</ListGroup.Item>
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
