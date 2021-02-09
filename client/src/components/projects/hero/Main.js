import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

const Main = () => {
  return (
    <div>
      <Jumbotron fluid className='jumbo-contact mb-5 text-dark'>
        <Container className='main-text text-center'>
          <h1 className='display-4 text-light'>Hero's Corner</h1>
          <h1 className='text-light'>Where the Hero's get their books.</h1>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Main
