import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Resume = () => {
  return (
    <div className='resume'>
      <Container>
        <Row className='justify-content-lg-center mb-5'>
          <Col lg={6}>
            <h1 className='text-center'>Resume</h1>
            <br />
            <hr />
            <br />
            <a href='img/resume.pdf' target='_blank'>
              <Button className='btn btn-block'>
                <i className='m-2 fas fa-download'></i>Download
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Resume
