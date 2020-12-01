import React from 'react'
import Main from '../projects/house/Main'
import Content from '../projects/house/Content'
import HousePhoto from '../projects/house/HousePhoto'
import Info from '../projects/house/Info'
import Videos from '../projects/house/Videos'

const HouseScreen = () => {
  return (
    <div>
      <Main />
      <Content />
      <HousePhoto />
      <Videos />
      <Info />
    </div>
  )
}

export default HouseScreen
