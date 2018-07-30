//NPM
import React, { Component, Fragment } from 'react'

//CSS
import './index.css'

//Should only have a single child.
class ParallaxBackground extends Component {
  parallax = () => {
    const { pageYOffset, innerHeight } = window
    const { factor } = this.props
    const element = this.element


    if(pageYOffset >= (element.offsetTop - (innerHeight)) && (pageYOffset <= (element.offsetTop + innerHeight))) {
      element.style.backgroundPositionY = `${(pageYOffset - element.offsetTop) * factor}px`
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.parallax)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.parallax)
  }

  render() {
    const { bg, children } = this.props    
    return (
      <div 
        ref={ref => this.element = ref} 
        style={{
          background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url("${bg}")`,
          height: '100vh',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPositionX: 'center',
          display: 'grid',
          placeContent: 'center'
        }}>
          {children}
        </div>
    )
  }
}

export default ParallaxBackground