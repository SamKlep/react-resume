import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'

const AlertError = () => {
  const [show, setShow] = useState(true)

  if (show) {
    return (
      <Alert
        className='mt-3'
        variant='danger'
        onClose={() => setShow(false)}
        dismissible>
        <Alert.Heading>Oops!</Alert.Heading>
        <p>Something went wrong.</p>
      </Alert>
    )
  }
}

export default AlertError
