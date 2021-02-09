import React from 'react'
import { Row, Col, Card, Container, CardDeck, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PortfolioGrid = () => {
  return (
    <div>
      <Container>
        <Row className='mb-5'>
          <Col>
            <CardDeck>
              <Card>
                <Card.Img variant='top' src='img/crypto/crypto-1.png' />
                <Card.Body>
                  <Card.Title>Crypto Wise</Card.Title>
                  <Card.Text>
                    Stay up tp date with the latest crypto news & prices!
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link to='/cryptowise'>
                    <Button>Learn more</Button>
                  </Link>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant='top' src='img/deleon/dss1.png' />
                <Card.Body>
                  <Card.Title>De Leon Safety Solutions</Card.Title>
                  <Card.Text>
                    Premier provider of safety consulting services!
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link to='/deleon'>
                    <Button>Learn more</Button>
                  </Link>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant='top' src='img/hero/hero-1.png' />
                <Card.Body>
                  <Card.Title>Hero's Corner</Card.Title>
                  <Card.Text>
                    E-commerce store dedicated to all your comic Heroes!
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link to='/hero'>
                    <Button>Learn more</Button>
                  </Link>
                </Card.Footer>
              </Card>
            </CardDeck>
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <CardDeck>
              <Card>
                <Card.Img variant='top' src='img/nasa/nasaImage.png' />
                <Card.Body>
                  <Card.Title>Nasa Image of the Day</Card.Title>
                  <Card.Text>
                    Be amazed-- explore NASA's image of the day!
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link to='/nasa'>
                    <Button>Learn more</Button>
                  </Link>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant='top' src='img/serials/serials.png' />
                <Card.Body>
                  <Card.Title>Serial Killers & Unsolved Mysteries</Card.Title>
                  <Card.Text>
                    There may be as many as 2,000 active serial killers in the
                    U.S. Some mysteries never get solved...
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link to='/serials'>
                    <Button>Learn more</Button>
                  </Link>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant='top' src='img/spacex/spaceX.png' />
                <Card.Body>
                  <Card.Title>Space X Launch Data</Card.Title>
                  <Card.Text>Explore Space X Launch data!</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link to='/spacex'>
                    <Button>Learn more</Button>
                  </Link>
                </Card.Footer>
              </Card>
            </CardDeck>
          </Col>
        </Row> */}
      </Container>
    </div>
  )
}

export default PortfolioGrid
