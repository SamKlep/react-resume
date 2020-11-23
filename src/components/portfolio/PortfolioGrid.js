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
                <Card.Img variant='top' src='img/crypto-zone1.png' />
                <Card.Body>
                  <Card.Title>Crypto Zone</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link to='/crypto-zone'>
                    <Button>Learn more</Button>
                  </Link>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant='top' src='img/findahouse.png' />
                <Card.Body>
                  <Card.Title>Find A House</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{' '}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button>Learn more</Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant='top' src='img/contactkeeper.png' />
                <Card.Body>
                  <Card.Title>Contact Keeper</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button>Learn more</Button>
                </Card.Footer>
              </Card>
            </CardDeck>
          </Col>
        </Row>
        <Row>
          <Col>
            <CardDeck>
              <Card>
                <Card.Img variant='top' src='img/nasaImage.png' />
                <Card.Body>
                  <Card.Title>Nasa Image of the Day</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button>Learn more</Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant='top' src='img/serials.png' />
                <Card.Body>
                  <Card.Title>Serial Killers & Unsolved Mysteries</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{' '}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button>Learn more</Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant='top' src='img/spaceX.png' />
                <Card.Body>
                  <Card.Title>Space X Launch Data</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button>Learn more</Button>
                </Card.Footer>
              </Card>
            </CardDeck>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PortfolioGrid
