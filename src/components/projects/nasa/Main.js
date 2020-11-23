import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

const Main = () => {
  return (
    <div>
      <Jumbotron fluid className='jumbo-nasa mb-5 text-white'>
        <Container className='text-white'>
          <h1>Nasa Image of the Day</h1>
          <p className='lead text-white'>
            <strong>Propery listing just got that much easier.</strong>
          </p>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Main
