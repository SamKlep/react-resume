import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

const Main = () => {
  return (
    <div>
      <Jumbotron fluid className='jumbo-nasa mb-5 text-white'>
        <Container className='main-text text-center text-white'>
          <h1 className='display-4'>Nasa Image of the Day</h1>
          <h1 className='text-white'>
            <strong>Propery listing just got that much easier.</strong>
          </h1>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Main