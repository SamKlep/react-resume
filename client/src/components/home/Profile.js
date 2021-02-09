import React from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap'

const Profile = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={4}>
            <Card className='text-center'>
              <Card.Img
                variant='top'
                src='img/sam_portfolio1.png'
                roundedCircle
              />

              <Card.Body>
                <Card.Title>Samuel Klepper</Card.Title>
                <ListGroup className='list-group-flush'>
                  <ListGroupItem>
                    2406 W. 18th St, Houston, TX 77008
                  </ListGroupItem>
                  <ListGroupItem>(713) 376 - 9541</ListGroupItem>
                  <ListGroupItem>
                    <a
                      href='mailto:sam@samklepper.com'
                      target='_blank'
                      rel='noreferrer'>
                      sam@samklepper.com
                    </a>
                  </ListGroupItem>
                </ListGroup>
                <Card.Link
                  href='https://github.com/samklep'
                  target='_blank'
                  rel='noreferrer'>
                  <Button>
                    <i className='fab fa-github'></i>
                  </Button>
                </Card.Link>
                <Card.Link
                  href='https://www.linkedin.com/in/samuel-klepper-0435b5193/'
                  target='_blank'
                  rel='noreferrer'>
                  <Button>
                    <i className='fab fa-linkedin-in'></i>
                  </Button>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col className='align-self-center'>
            <Container>
              <h2 className='text-center'>Skills</h2>
              <ListGroup className='list-group-flush text-center'>
                <ListGroup.Item className='bg-light'>
                  <strong>HTML/CSS:</strong>{' '}
                  <i className='fab fa-html5 fa-2x skill-icon '></i>
                  <i className='fab fa-css3-alt fa-2x skill-icon'></i>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Javacript: </strong>{' '}
                  <i className='fab fa-js-square fa-2x skill-icon'></i>
                </ListGroup.Item>
                <ListGroup.Item className='bg-light'>
                  <strong>Node: </strong>{' '}
                  <i className='fab fa-node-js fa-2x skill-icon'></i>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Express: </strong>{' '}
                  <span
                    className='iconify fa-1x skill-icon'
                    data-icon='logos:express'
                    data-inline='false'></span>
                </ListGroup.Item>
                <ListGroup.Item className='bg-light'>
                  <strong>React: </strong>
                  <span
                    className='iconify fa-2x skill-icon'
                    data-icon='bx:bxl-react'
                    data-inline='false'></span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Mongo: </strong>
                  <span
                    className='iconify fa-2x skill-icon'
                    data-icon='cib:mongodb'
                    data-inline='false'></span>
                </ListGroup.Item>
                <ListGroup.Item className='bg-light'>
                  <strong>PostgreSQL: </strong>
                  <span
                    className='iconify fa-2x skill-icon'
                    data-icon='cib:postgresql'
                    data-inline='false'></span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Git: </strong>
                  <span
                    className='iconify fa-2x skill-icon'
                    data-icon='cib:github'
                    data-inline='false'></span>
                </ListGroup.Item>
                <ListGroup.Item className='bg-light'>
                  <strong>Heroku: </strong>
                  <span
                    className='iconify fa-2x skill-icon'
                    data-icon='cib:heroku'
                    data-inline='false'></span>
                </ListGroup.Item>
              </ListGroup>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Profile
