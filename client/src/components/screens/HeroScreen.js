import React from 'react'
import Info from '../projects/hero/Info'
import Main from '../projects/hero/Main'
import HerosPhoto from '../projects/hero/HerosPhoto'
import Videos from '../projects/hero/Videos'
import Content from '../projects/hero/Content'

const HeroScreen = () => {
  return (
    <div>
      <Main />
      <Content />
      <HerosPhoto />
      <Videos />
      <Info />
    </div>
  )
}

export default HeroScreen
