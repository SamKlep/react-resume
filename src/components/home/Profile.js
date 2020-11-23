import React from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  CardGroup,
  ProgressBar,
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
                      <ListGroup.Item>
                        <strong>Address:</strong> 2406 W. 18th St, Houston, TX
                        77008
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Phone:</strong> (713) 376 - 9541
                      </ListGroup.Item>
                      <ListGroup.Item>
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

              <Card>
                <Card.Body>
                  <Card.Title className='text-center'>Skills</Card.Title>

                  <Card.Text>
                    HTML/CSS
                    <ProgressBar variant='warning' now={95} />
                    Javascript
                    <ProgressBar variant='warning' now={90} />
                    Node
                    <ProgressBar variant='warning' now={90} />
                    React
                    <ProgressBar variant='warning' now={90} />
                    MongoDB
                    <ProgressBar variant='warning' now={90} />
                    PostgreSQL
                    <ProgressBar variant='warning' now={90} />
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
