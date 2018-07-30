//NPM
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

//Components
import Animator from '../../animator'

class About extends Component {
  render() {
    const { sectionFour } = this.props
    return (
      <Fragment>
        <Animator
          animation='fade-in-from-right'
          shouldAnimate={sectionFour}
          options={{
            backgroundColor: 'white',
            color: 'black',
            height: '100px',
            width: '100px',
            animationDelay: '.5s'
          }}>
        </Animator>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    sectionFour: state.animation.animTriggerSectionFour
  }
}

export default connect(mapStateToProps)(About)