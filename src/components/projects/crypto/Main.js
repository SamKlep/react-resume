import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

const Main = () => {
  return (
    <div>
      <Jumbotron fluid className='jumbo-crypto mb-5 text-white text-center'>
        <Container>
          <h1 className='display-4 text-warning'>Crypto Zone</h1>
          <h1 className='text-white'>
            Stay up to date with the latest crypto news & prices.
          </h1>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Main
