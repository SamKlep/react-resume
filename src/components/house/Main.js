import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

const Main = () => {
  return (
    <div>
      <Jumbotron fluid className='jumbo-house mb-5 text-white'>
        <Container>
          <h1>Find A house</h1>
          <p className='lead'>Propery listing just got that much easier.</p>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Main
