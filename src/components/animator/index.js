//NPM
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

class Animator extends Component {
  render() {
    const { 
      children,
      shouldAnimate,
      className,
      animation,
      options
    } = this.props
    let playState = 'paused';
    if(shouldAnimate === true) {
      playState = 'running'
    }
    return (
      <div className={`${className} ${animation}`} style={{
        animationPlayState: playState,
        ...options
      }}>
        {children}
      </div>
    )  
  }
}

Animator.propTypes = {
  shouldAnimate: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  animation: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired
}

Animator.defaultProps = {
  shouldAnimate: false,
  className: '',
  animation: '',
  options: {}
}

export default Animator