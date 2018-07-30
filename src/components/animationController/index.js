//NPM
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

//Sections
import Welcome from '../sections/welcome'
import Products from '../sections/products'
import Support from '../sections/support'
import About from '../sections/about'
import Contact from '../sections/contact'

//CSS
import './index.css'

//Functions
//import { isValueBetween } from '../../functions/isValueBetween'
import { valueIsBeyondThreshold } from '../../functions/valueIsBeyondThreshold'

//Actions 
import {
  triggerAnimPageLoaded,
  triggerAnimSectionTwo,
  triggerAnimSectionThree,
  triggerAnimSectionFour,
  triggerAnimSectionFive
} from '../../store/actions/animation'

class AnimatorController extends Component {
  monitorScroll = () => {
    const { pageYOffset, innerHeight } = window
    const {
      triggerSectionTwo,
      triggerSectionThree,
      triggerSectionFour,
      triggerSectionFive
    } = this.props
    
    // if(pageYOffset >= this.contact.offsetTop) {
    //   triggerSectionFive({triggerState: true})
    // } else if(isValueBetween(pageYOffset, this.about.offsetTop, this.contact.offsetTop)) {
    //   triggerSectionFour({triggerState: true})
    // } else if(isValueBetween(pageYOffset, this.support.offsetTop, this.about.offsetTop)) {
    //   triggerSectionThree({triggerState: true})
    // } else if(isValueBetween(pageYOffset, this.products.offsetTop, this.support.offsetTop)) {
    //   triggerSectionTwo({triggerState: true})
    // }

    if(valueIsBeyondThreshold(pageYOffset, this.contact.offsetTop - innerHeight / 2 )) {
      triggerSectionFive({trigger: true})
    } else if(valueIsBeyondThreshold(pageYOffset, this.about.offsetTop - innerHeight / 2)) {
      triggerSectionFour({triggerState: true})
    } else if(valueIsBeyondThreshold(pageYOffset, this.support.offsetTop - innerHeight / 2)) {
      triggerSectionThree({triggerState: true})
    } else if(valueIsBeyondThreshold(pageYOffset, this.products.offsetTop - innerHeight / 2)) {
      triggerSectionTwo({triggerState: true})
    }
  }

  componentDidMount() {
    const { triggerPageLoaded } = this.props
    window.addEventListener('scroll', this.monitorScroll)
    triggerPageLoaded({triggerState: true})
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.monitorScroll)
  }

  render() {
    return (
      <Fragment>
        <section 
          className='section' 
          style={{ backgroundColor: 'red' }}
          ref={ref => this.top = ref}
        >
          <Welcome/>
        </section>
        <section 
          className='section' 
          style={{ backgroundColor: 'blue' }}
          ref={ref => this.products = ref}
        >
          <Products/>
        </section>
        <section 
          className='section' 
          style={{ backgroundColor: 'green' }}
          ref={ref => this.support = ref}
        >
          <Support/>
        </section>
        <section 
          className='section' 
          style={{ backgroundColor: 'black' }}
          ref={ref => this.about = ref}
        >
          <About/>
        </section>
        <section 
          className='section' 
          style={{ backgroundColor: 'grey' }}
          ref={ref => this.contact = ref}
        >
          <Contact/>
        </section>
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    triggerPageLoaded: payload => dispatch(triggerAnimPageLoaded(payload)),
    triggerSectionTwo: payload => dispatch(triggerAnimSectionTwo(payload)),
    triggerSectionThree: payload => dispatch(triggerAnimSectionThree(payload)),
    triggerSectionFour: payload => dispatch(triggerAnimSectionFour(payload)),
    triggerSectionFive: payload => dispatch(triggerAnimSectionFive(payload))
  }
} 

export default connect(null, mapDispatchToProps)(AnimatorController)