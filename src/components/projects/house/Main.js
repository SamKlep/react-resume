import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

const Main = () => {
  return (
    <div>
      <Jumbotron fluid className='jumbo-house mb-5 text-white'>
        <Container className='text-warning'>
          <h1>Find A house</h1>
          <p className='lead text-dark'>
            <strong>Propery listing just got that much easier.</strong>
          </p>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Main
