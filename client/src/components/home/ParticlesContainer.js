import Particles from 'react-particles-js'
import { Component } from 'react'

class ParticlesContainer extends Component {
  render() {
    return (
      <Particles
        canvasClassName='example'
        style={{
          position: 'absolute',
          zindex: '-1',
          width: '100%',
        }}
        params={{
          particles: {
            number: {
              value: 60,
            },
            size: {
              value: 3,
            },
            color: {
              value: '#f0ad4e',
            },
            line_linked: {
              color: '#f44242',
              opacity: 1,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
            },
          },
        }}
      />
    )
  }
}

export default ParticlesContainer
