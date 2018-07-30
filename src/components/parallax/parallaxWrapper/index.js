//NPM
import React, { Component } from 'react'
import PropTypes from 'prop-types'

//CSS
import './index.css'

//Constants
import { DIRECTION, BEHAVIOR } from './constants'

class ParallaxWrapper extends Component {
  state = {
    previousScrollOffset: 0,
    top: 0,
    left: 0
  }

  parallax = () => {
    const { pageYOffset, innerHeight } = window
    const { factor, topOffset } = this.props
    const element = this.element


    if(pageYOffset >= (element.offsetTop - (innerHeight / 2))) {
      element.style.transform = `translateY(${(pageYOffset) * factor}%)`
      // element.style.top = `${(((pageYOffset) * factor))}%`
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.parallax)
    const element = this.element
    const { topOffset } = this.props
    // element.style.top = `${topOffset}px`
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.parallax)
  }

  render() {
    const { top } = this.state
    const { children } = this.props

    return (
      <div  ref={ref => this.element = ref}>
        {children}
      </div>
    )
  }
}

// ParallaxWrapper.propTypes = {
//   direction: PropTypes.string,
//   behavior: PropTypes.string,
//   speed: PropTypes.number
// }

// ParallaxWrapper.defaultProps = {
//   direction: DIRECTION.y,
//   behavior: BEHAVIOR.forwards,
//   speed: 1
// }

export default ParallaxWrapper