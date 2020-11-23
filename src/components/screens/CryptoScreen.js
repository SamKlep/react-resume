import React from 'react'
import Main from '../projects/crypto/Main'
import Content from '../projects/crypto/Content'
import PhotoGallery from './PhotoGallery'
import Info from '../projects/crypto/Info'

const CryptoScreen = () => {
  return (
    <div>
      <Main />
      <Content />
      <PhotoGallery />
      <Info />
    </div>
  )
}

export default CryptoScreen
