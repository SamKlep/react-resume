import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

const Main = () => {
  return (
    <div>
      <Jumbotron fluid className='jumbo-serials mb-5 text-white'>
        <Container className='main-text text-center text-warning'>
          <h1 className='display-4'>Serial Killers & Unsolved Mysteries</h1>
          <h3 className='text-white'>
            <strong>
              Uncover the psychology behind some of the most popular serial
              killers and mysteries.
            </strong>
          </h3>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Main
