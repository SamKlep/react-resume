import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Services = () => {
  return (
    <div id='services'>
      <Container className='services-container'>
        <Row className='justify-content-lg-center mb-5'>
          <Col lg={6}>
            <h1 className='display-4 text-center'>Services</h1>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col lg={6}>
            <Card className='bg-dark text-light mb-3'>
              <Card.Body>
                <Card.Title className='text-warning'>
                  {' '}
                  <h3>Frontend</h3>
                </Card.Title>

                <Card.Text>
                  Develop production ready applications with
                  <strong> HTML5, CSS3, Javascript, Bootstrap </strong> and
                  <strong> React.js.</strong> Utilize third party API's to
                  deliver up to date information while keeping a mobile first
                  approach to responsive design.
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
                <Card.Title className='text-warning'>
                  {' '}
                  <h3>Backend</h3>
                </Card.Title>

                <Card.Text>
                  Develop back-end applications/services using{' '}
                  <strong>Node.js</strong> and <strong>Express</strong> with{' '}
                  <strong>MongoDB</strong> or <strong>PostgreSQL</strong>{' '}
                  databases. Can build robust <strong>APIs</strong> with
                  documentation and easy to use <strong>CRUD</strong>{' '}
                  functionality.
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
                <Card.Title className='text-warning'>
                  {' '}
                  <h3>Dev Ops</h3>
                </Card.Title>

                <Card.Text>
                  Utilizing best practices and tools like version control using
                  <strong> Git</strong> and <strong>GitHub.</strong> Delivering
                  secure, production ready applications deployed to
                  <strong> Heroku</strong>, <strong>Netlify</strong>, and{' '}
                  <strong>AWS</strong>.
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
                  <h3>Unit Testing & Debugging</h3>
                </Card.Title>

                <Card.Text>
                  Identifying any problems that may arise in development by
                  writing <strong>unit test</strong> to monitor individual
                  modules to insure functional correctness,{' '}
                  <strong>analyzing </strong>behavoir and fix any defects that
                  may occur.
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
