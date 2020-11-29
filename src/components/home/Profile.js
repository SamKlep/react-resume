import React from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  CardGroup,
} from 'react-bootstrap'

const Profile = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <CardGroup>
              <Card>
                <Card.Body>
                  <Card.Title className='text-center'>Profile</Card.Title>

                  <Card.Text>
                    <ListGroup>
                      <ListGroup.Item className='bg-light'>
                        <strong>Address:</strong> 2406 W. 18th St, Houston, TX
                        77008
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Phone:</strong> (713) 376 - 9541
                      </ListGroup.Item>
                      <ListGroup.Item className='bg-light'>
                        <strong>Email:</strong> samklepdev@gmail.com
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                  <div className='text-center'>
                    <Card.Link href='#'>
                      <Button>
                        <i className='fab fa-github'></i>
                      </Button>
                    </Card.Link>
                    <Card.Link href='#'>
                      <Button>
                        <i className='fab fa-linkedin-in'></i>
                      </Button>
                    </Card.Link>
                  </div>
                </Card.Body>
              </Card>

              <Card>
                <Card.Img variant='top' src='img/sam_portfolio1.png' />
              </Card>

              <Card className='text-center'>
                <Card.Body>
                  <Card.Title className='text-center'>Skills</Card.Title>

                  <Card.Text>
                    <ListGroup>
                      <ListGroup.Item className='bg-light'>
                        <strong>HTML/CSS:</strong>{' '}
                        <i className='fab fa-html5 fa-2x '></i>
                        <i className='fab fa-css3-alt fa-2x'></i>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Javacript: </strong>{' '}
                        <i className='fab fa-js-square fa-2x'></i>
                      </ListGroup.Item>
                      <ListGroup.Item className='bg-light'>
                        <strong>Node: </strong>{' '}
                        <i className='fab fa-node-js fa-2x'></i>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>React: </strong>
                        <span
                          className='iconify fa-2x'
                          data-icon='bx:bxl-react'
                          data-inline='false'></span>
                      </ListGroup.Item>
                      <ListGroup.Item className='bg-light'>
                        <strong>Mongo: </strong>
                        <span
                          className='iconify fa-2x'
                          data-icon='cib:mongodb'
                          data-inline='false'></span>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>PostgreSQL: </strong>
                        <span
                          className='iconify fa-2x'
                          data-icon='cib:postgresql'
                          data-inline='false'></span>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Profile
