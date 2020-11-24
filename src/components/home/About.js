import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const About = () => {
  return (
    <div id='about'>
      <Container className='mb-5'>
        <Row className='justify-content-lg-center'>
          <Col lg={6}>
            <div className='text-center'>
              <h3>About Me</h3>
              <h6 className='text-muted'>
                Javascript-enthusiast and avid problem solver.
              </h6>
              <p>
                Versatile <strong>software developer</strong> with the ability
                to pick up new languages and technologies as needed. Currently
                perusing a degree in Computer Science at{' '}
                <strong>Houston Community College.</strong>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
