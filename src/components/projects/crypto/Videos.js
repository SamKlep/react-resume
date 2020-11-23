import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Videos = () => {
  return (
    <div>
      <Container className='text-center mt-5 mb-5'>
        <Row className='justify-content-lg-center'>
          <Col>
            <video width='320' height='240' controls>
              <source src='img/crypto/crypto-news.mov' type='video/mp4' />
            </video>
          </Col>
          <Col>
            <video width='320' height='240' controls>
              <source src='img/crypto/crypto-prices.mov' type='video/mp4' />
            </video>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Videos
