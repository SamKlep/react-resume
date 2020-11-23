import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

const Main = () => {
  return (
    <div>
      <Jumbotron fluid className='jumbo-crypto mb-5 text-white'>
        <Container>
          <h1 className='text-light'>Crypto Zone</h1>
          <p className='lead text-light'>
            Stay up to date with the latest crypto news & prices.
          </p>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Main
