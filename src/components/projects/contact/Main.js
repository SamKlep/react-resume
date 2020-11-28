import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

const Main = () => {
  return (
    <div>
      <Jumbotron fluid className='jumbo-contact mb-5 text-dark'>
        <Container className='main-text text-center'>
          <h1 className='display-4 text-danger'>Contact Keeper</h1>
          <h1 className='text-white'>
            Keep all of your contacts in one simple place!
          </h1>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Main
