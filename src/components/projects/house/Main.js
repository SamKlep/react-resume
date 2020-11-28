import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

const Main = () => {
  return (
    <div>
      <Jumbotron fluid className='jumbo-house mb-5'>
        <Container className='main-text text-center'>
          <h1 className='display-4 text-warning'>FH Realty</h1>
          <h1 className='text-white'>
            <strong>Propery listing just got that much easier.</strong>
          </h1>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Main
