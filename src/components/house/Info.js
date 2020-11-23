import React from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'

const Info = () => {
  return (
    <div>
      <Container>
        <Row className='justify-content-lg-center mb-5'>
          <Col lg={6}>
            <h1>About</h1>
            <p className='lead'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a
              viverra ex, in consequat justo. Etiam volutpat in magna sed
              lobortis. Etiam volutpat, ligula vitae interdum placerat, dolor
              turpis varius dolor, ac imperdiet lacus nisi sed felis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a
              viverra ex, in consequat justo. Etiam volutpat in magna sed
              lobortis. Etiam volutpat, ligula vitae interdum placerat, dolor
              turpis varius dolor, ac imperdiet lacus nisi sed felis.
            </p>
          </Col>
        </Row>
        <hr />
        <Row className='mt-5 mb-5'>
          <Col>
            <h1>Tech Stack</h1>
            <p className='lead'>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a
              viverra ex, in consequat justo. Etiam volutpat in magna sed
              lobortis. Etiam volutpat, ligula vitae interdum placerat, dolor
              turpis varius dolor, ac imperdiet lacus nisi sed felis.
            </p>
          </Col>
          <Col>
            <ListGroup>
              <ListGroup.Item className='bg-light'>
                Cras justo odio
              </ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item className='bg-light'>
                Morbi leo risus
              </ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item className='bg-light'>
                Vestibulum at eros
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Info
