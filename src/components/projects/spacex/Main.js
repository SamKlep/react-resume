import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

const Main = () => {
  return (
    <div>
      <Jumbotron fluid className='jumbo-spacex mb-5 text-white'>
        <Container className='text-warning'>
          <h1>Space X Launch Data</h1>
          <p className='lead text-white'>
            <strong>Explore Space X Launch data!</strong>
          </p>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Main
