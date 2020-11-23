import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'

const AlertDismiss = () => {
  const [show, setShow] = useState(true)

  if (show) {
    return (
      <Alert
        className='mt-3'
        variant='success'
        onClose={() => setShow(false)}
        dismissible>
        <Alert.Heading>Thanks!</Alert.Heading>
      </Alert>
    )
  }
  return <button className='btn btn-primary mt-3'>Submit</button>
}

export default AlertDismiss
