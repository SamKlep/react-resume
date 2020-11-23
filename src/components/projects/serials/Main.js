import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

const Main = () => {
  return (
    <div>
      <Jumbotron fluid className='jumbo-serials mb-5 text-white'>
        <Container className='text-warning'>
          <h1>Serial Killers & Unsolved Mysteries</h1>
          <p className='lead text-white'>
            <strong>
              Uncover the psychology behind some of the most popular serial
              killers and mysteries.
            </strong>
          </p>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Main
