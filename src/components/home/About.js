import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const About = () => {
  return (
    <div>
      <Container className='mb-5'>
        <Row className='justify-content-lg-center'>
          <Col lg={6}>
            <div>
              <h3>About Me</h3>
              <p>
                I have been working as a free-lance web developer for
                <strong> 1 year</strong> and have developed a well-rounded
                process for giving the client what they need in a timely manner.
                I am currently pursuing a degree in{' '}
                <strong>Artificial Intelligence</strong> from{' '}
                <strong>HCC</strong>.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
