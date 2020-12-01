import React from 'react'
import Info from '../projects/contact/Info'
import Main from '../projects/contact/Main'
import ContactPhoto from '../projects/contact/ContactPhoto'
import Videos from '../projects/contact/Videos'
import Content from '../projects/contact/Content'

const ContactScreen = () => {
  return (
    <div>
      <Main />
      <Content />
      <ContactPhoto />
      <Videos />
      <Info />
    </div>
  )
}

export default ContactScreen
