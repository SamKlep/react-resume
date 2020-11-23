import React from 'react'
import Info from '../contact/Info'
import Main from '../contact/Main'
import ContactPhoto from '../contact/ContactPhoto'
import Videos from '../contact/Videos'
import Content from '../contact/Content'

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
