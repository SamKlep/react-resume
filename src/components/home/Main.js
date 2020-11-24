import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

const Main = () => {
  return (
    <div>
      <Jumbotron fluid className='jumbo-home mb-5'>
        <Container className=''>
          <h1 className='display-4 text-white'>Samuel Klepper</h1>
          <h1 className='text-light'>Full Stack Web Developer</h1>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Main
