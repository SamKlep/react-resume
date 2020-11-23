import React, { useState, useCallback } from 'react'

import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { Container } from 'react-bootstrap'

const photos = [
  {
    src: 'img/spacex/spaceX.png',
    width: 4,
    height: 3,
  },
  {
    src: 'img/spacex/spacex-1.png',
    width: 4,
    height: 3,
  },
  {
    src: 'img/spacex/spacex-2.png',
    width: 4,
    height: 3,
  },
]

const SpaceXPhoto = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <Container className='mb-5'>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Container>
  )
}

export default SpaceXPhoto
