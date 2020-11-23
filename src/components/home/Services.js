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
                  <strong> HTML5/CSS3</strong> with added funtionality using
                  <strong> JavaScript</strong> and <strong>React.js.</strong>{' '}
                  Utilize API's to deliver up to date information while keeping
                  a mobile first approach to responsive design.
                </Card.Text>
                <Container className='text-center'>
                  <span
                    className='iconify fa-5x m-2'
                    data-icon='vscode-icons:file-type-html'
                    data-inline='false'></span>{' '}
                  <span
                    className='iconify fa-5x m-2'
                    data-icon='vscode-icons:file-type-css'
                    data-inline='false'></span>
                  <span
                    className='iconify  fa-5x m-2'
                    data-icon='logos:react'
                    data-inline='false'></span>
                  <span
                    className='iconify fa-5x m-2'
                    data-icon='logos:javascript'
                    data-inline='false'></span>
                </Container>
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

                <Container className='text-center mb-3'>
                  <span
                    className='iconify fa-5x m-2'
                    data-icon='vscode-icons:file-type-node'
                    data-inline='false'></span>{' '}
                  <span
                    className='iconify fa-5x m-2'
                    data-icon='clarity:rack-server-solid-badged'
                    data-inline='false'></span>
                  <span
                    className='iconify fa-5x m-2'
                    data-icon='vscode-icons:file-type-mongo'
                    data-inline='false'></span>
                  <span
                    className='iconify fa-5x m-2'
                    data-icon='logos:postgresql'
                    data-inline='false'></span>
                </Container>
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
                <Container className='text-center'>
                  <span
                    className='iconify fa-4x m-2'
                    data-icon='logos:github-icon'
                    data-inline='false'></span>
                  <span
                    className='iconify fa-4x m-2'
                    data-icon='logos:heroku-icon'
                    data-inline='false'></span>
                  <span
                    className='iconify fa-5x m-2'
                    data-icon='vscode-icons:file-type-netlify'
                    data-inline='false'></span>
                  <span
                    className='iconify fa-4x m-2'
                    data-icon='logos:aws'
                    data-inline='false'></span>
                </Container>
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
                <Container className='text-center'>
                  <span
                    className='iconify fa-4x m-2 text-danger'
                    data-icon='codicon:debug'
                    data-inline='false'></span>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Services
