import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

const Main = () => {
  return (
    <div>
      <Jumbotron fluid className='jumbo-contact mb-5 text-dark'>
        <Container>
          <h1>Contact Keeper</h1>
          <p className='lead text-dark'>
            <strong>Keep all of your contacts in one place!</strong>
          </p>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Main
