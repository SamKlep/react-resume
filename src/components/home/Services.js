import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Services = () => {
  return (
    <div>
      <Container className='mt-5 mb-5'>
        <Row className='justify-content-lg-center mb-5'>
          <Col lg={6}>
            <h1 className='text-center'>Services</h1>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col lg={6}>
            <Card className='bg-dark text-light  mb-3'>
              <Card.Body>
                <Card.Title className='text-warning'>Frontend</Card.Title>

                <Card.Text>
                  Develop front-end applications using latest standards with
                  HTML5/CSS3 with added funtionality using JavaScript and
                  React.js. Utilize API's to deliver up to date information
                  while keeping a mobile first approach to responsive design.
                </Card.Text>
                <Card.Link href='#'>Card Link</Card.Link>
                <Card.Link href='#'>Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className='bg-dark text-light'>
              <Card.Body>
                <Card.Title className='text-warning'>Backend</Card.Title>

                <Card.Text>
                  Develop back-end applications/services using Node.js and
                  Express alongside MongoDB or PostgreSQL database. Build robust
                  APIs with documentation and easy to use CRUD functionality.
                </Card.Text>
                <Card.Link href='#'>Card Link</Card.Link>
                <Card.Link href='#'>Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col lg={6}>
            <Card className='bg-dark text-light mb-3'>
              <Card.Body>
                <Card.Title className='text-warning'>Dev Ops</Card.Title>

                <Card.Text>
                  Utilizing best practices and tools like version control using
                  Git and GitHub. Delivering secure applications deployed to
                  Heroku, Netlify, and AWS in which helps produce products at a
                  faster pace than traditional software development.
                </Card.Text>
                <Card.Link href='#'>Card Link</Card.Link>
                <Card.Link href='#'>Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className='bg-dark text-light'>
              <Card.Body>
                <Card.Title className='text-warning'>
                  Unit Testing & Debugging
                </Card.Title>

                <Card.Text>
                  Identifying any problems that may arise in development by
                  writing unit test to monitor individual modules to insure
                  functional correctness, analyzing behavoir and fix any defects
                  that may occur.
                </Card.Text>
                <Card.Link href='#'>Card Link</Card.Link>
                <Card.Link href='#'>Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Services
