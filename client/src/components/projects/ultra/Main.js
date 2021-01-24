import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

const Main = () => {
  return (
    <div>
      <Jumbotron fluid className='jumbo-contact mb-5 text-dark'>
        <Container className='main-text text-center'>
          <h1 className='display-4 text-warning'>Ultra Demolition</h1>
          <h1 className='text-white'>
            Here for all of your Demolition & Excavation needs!
          </h1>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Main
