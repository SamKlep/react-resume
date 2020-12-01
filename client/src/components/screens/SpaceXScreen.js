import React from 'react'
import Main from '../projects/spacex/Main'
import Content from '../projects/spacex/Content'
import SpaceXPhoto from '../projects/spacex/SpaceXPhoto'
import Videos from '../projects/spacex/Videos'
import Info from '../projects/spacex/Info'

const SpaceXScreen = () => {
  return (
    <div>
      <Main />
      <Content />
      <SpaceXPhoto />
      <Videos />
      <Info />
    </div>
  )
}

export default SpaceXScreen
