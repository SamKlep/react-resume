import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const About = () => {
  return (
    <div id='about'>
      <Container className=' mb-5'>
        <Row className='justify-content-lg-center'>
          <Col lg={6}>
            <div className='text-center'>
              <h2>About Me</h2>
              <h4 className='text-muted'>
                Javascript-enthusiast and avid problem solver.
              </h4>
              <p className='lead'>
                Versatile <strong>software developer</strong> with the ability
                to pick up new languages and technologies as needed. Currently
                perusing a degree in <i>Computer Science</i> at{' '}
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
