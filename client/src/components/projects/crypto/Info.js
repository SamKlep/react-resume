import React from 'react'
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Info = () => {
  return (
    <div>
      <Container>
        <Row className='justify-content-lg-center mb-5'>
          <Col>
            <h1>Crypto Zone</h1>
            <p className='lead'>
              With today’s fast-paced and ever changing times, everything seems
              to be moving forward— including things that have been stagnant and
              the same for hundreds of years, like money. There’s a new kid on
              the block, and you don’t want to be left out of the{' '}
              <a
                href='https://en.wikipedia.org/wiki/Cryptocurrency_bubble'
                target='_blank'
                rel='noreferrer'>
                ‘Crypto Bubble’
              </a>
              . For the uninitiated, Cryptocurrency is an electronic money
              created with technology that lets users make secure payments and
              store money without the need to use their name or go through a
              bank. Everything is decentralized and runs on a distributed public
              ledger called the blockchain, which is a record of all
              transactions updated and held by currency holders.
            </p>
            <p>
              Now that you’re an expert in cryptocurrency, take a browse around
              the Crypto Zone. Scroll through the latest news and see what the
              bulls and whales are saying about the latest crypto trends. Who’s
              investing? Who’s not? After you’ve read all you can digest, check
              out the latest prices and gains of top performing coins.
              Information like this can be vital if one is considering investing
              any capital.
            </p>
          </Col>
        </Row>
        <hr />
        <Row className='mt-5 mb-5'>
          <Col>
            <h1>Tech Stack</h1>
            <p className='lead'>
              This was the first project of my coursework at Digital Crafts,
              which was to create a front-end application that utilizes a
              third-party api. I wanted the app to have some utility in the
              world with real world scenarios, so I chose the CryptoCompare API
              and soon built the app around that. Initially I used only HTML,
              CSS, and Bootstrap and there was only price display functionality.
              But not too much time later I added Node, Express & EJS and a news
              section.
            </p>
          </Col>
          <Col>
            <ListGroup className='skills-list mx-auto text-center'>
              <ListGroup.Item className='bg-light'>HTML</ListGroup.Item>
              <ListGroup.Item>CSS</ListGroup.Item>
              <ListGroup.Item className='bg-light'>EJS</ListGroup.Item>
              <ListGroup.Item className='bg-light'>Express</ListGroup.Item>
              <ListGroup.Item>Node</ListGroup.Item>
              <ListGroup.Item className='bg-light'>Bootstrap</ListGroup.Item>
              <ListGroup.Item>CryptoCompare API</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Link to='/'>
          <Button className='mb-5'>Go Back</Button>
        </Link>
      </Container>
    </div>
  )
}

export default Info
