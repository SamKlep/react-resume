import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

const Main = () => {
  return (
    <div>
      <Jumbotron fluid className='jumbo-home mb-5'>
        <Container className=''>
          <h1 className='display-4 text-white'>Samuel Klepper</h1>
          <p className='lead text-warning'>Full Stack Web Developer</p>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Main
