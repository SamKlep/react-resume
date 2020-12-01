import React from 'react'
import Main from '../projects/nasa/Main'
import Content from '../projects/nasa/Content'
import NasaPhoto from '../projects/nasa/NasaPhoto'
import Videos from '../projects/nasa/Videos'
import Info from '../projects/nasa/Info'

const NasaScreen = () => {
  return (
    <div>
      <Main />
      <Content />
      <NasaPhoto />
      <Videos />
      <Info />
    </div>
  )
}

export default NasaScreen
