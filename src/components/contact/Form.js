import React from 'react'
import { Alert } from 'react-bootstrap'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: '',
    }
  }

  render() {
    const { status } = this.state
    return (
      <form
        className='form-group'
        onSubmit={this.submitForm}
        action='https://formspree.io/f/mgeplwkn'
        method='POST'>
        <label>Email:</label>
        <input className='form-control mb-2' type='email' name='email' />
        <label>Message:</label>
        <textarea
          className='form-control'
          type='text'
          name='message'
          rows='3'></textarea>
        {status === 'SUCCESS' ? (
          <Alert variant='success' className='mt-3'>
            Thanks!
          </Alert>
        ) : (
          <button className='btn btn-primary mt-3'>Submit</button>
        )}
        {status === 'ERROR' && (
          <Alert variant='warning' className='mt-3'>
            Thanks!
          </Alert>
        )}
      </form>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: 'SUCCESS' })
      } else {
        this.setState({ status: 'ERROR' })
      }
    }
    xhr.send(data)
  }
}
