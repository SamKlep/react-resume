import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Content = () => {
  return (
    <div>
      <Container>
        <Row className='justify-content-lg-center mb-5'>
          <Col className='text-center' lg={6}>
            <h1>Crypto Zone</h1>
            <p className='lead'>
              Stay up to date with the latest crypto news & prices.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Content
