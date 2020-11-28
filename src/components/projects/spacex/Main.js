import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

const Main = () => {
  return (
    <div>
      <Jumbotron fluid className='jumbo-spacex mb-5 text-center'>
        <Container className='text-warning main-text'>
          <h1 className='display-4'>Space X Launch Data</h1>
          <h2 className='text-white'>
            <strong>Explore Space X Launch data!</strong>
          </h2>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Main
