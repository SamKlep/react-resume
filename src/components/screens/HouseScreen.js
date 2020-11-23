import React from 'react'
import Main from '../house/Main'
import Content from '../house/Content'
import HousePhoto from '../house/HousePhoto'
import Info from '../house/Info'
import Videos from '../house/Videos'

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
