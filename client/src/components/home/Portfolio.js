import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PortfolioGrid from '../portfolio/PortfolioGrid'

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <Container className='text-center'>
        <Row className='justify-content-lg-center mb-5'>
          <Col lg={6}>
            <h1>Portfolio</h1>
            <h3>My Latest Works</h3>
          </Col>
        </Row>
        <PortfolioGrid />
      </Container>
    </div>
  )
}

export default Portfolio
