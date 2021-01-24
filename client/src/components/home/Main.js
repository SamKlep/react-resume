import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import ParticlesContainer from './ParticlesContainer'

const Main = () => {
  return (
    <div>
      <Jumbotron fluid className='main-jumbo mb-5'>
        <Container className='main-text'>
          <ParticlesContainer />
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Main
