//NPM
import React, { Component, Fragment} from 'react'

//Components
import ParallaxWrapper from '../../parallax/parallaxWrapper'
// import ParallaxContainer from '../../parallax/parallaxContainer'
import ParallaxBackground from '../../parallax/parallaxBackground'

//Constants
import { DIRECTION, BEHAVIOR } from '../../parallax/parallaxWrapper/constants'
import { IMAGE_BG_1, IMAGE_BG_5, IMAGE_BG_3, IMAGE_BG_4, IMAGE_BG_6, IMAGE_BG_9, IMAGE_BG_11, IMAGE_BG_10, IMAGE_BG_8 } from '../../../assets'
class ParallaxTest extends Component {
  render() {
    return (
      <Fragment>
        <ParallaxBackground 
          bg={IMAGE_BG_1}
          factor={0.5}>
          {/* <div style={{
              color: 'white',
              fontSize: '2rem',
              textAlign: 'center'
            }}>
              <h1>Welcome To AllMax Software!</h1>
              <h2>Saving You Time, Making Your Life Easier.  Find Out How</h2>
            </div> */}
          <ParallaxWrapper factor={0.5}>
            <div style={{
              color: 'white',
              fontSize: '2rem',
              textAlign: 'center'
            }}>
              <h1>Welcome To AllMax Software!</h1>
              <h2 style={{ fontSize: '1.5rem'}}>Saving You Time, Making Your Life Easier.  Find Out How</h2>
            </div>
          </ParallaxWrapper>
        </ParallaxBackground>
        <div style={{
          height: '100vh',
          
          position: 'relative'
        }}><ParallaxWrapper factor={0.3} topOffset={0}>
        <div style={{
          color: 'white',
          fontSize: '2rem',
          textAlign: 'center',
          backgroundColor: 'black'
        }}>
          <h1>Heading</h1>
          <h2>Subheading</h2>
        </div>
      </ParallaxWrapper></div>
        <ParallaxBackground bg={IMAGE_BG_6} factor={0.5}/>
        <div style={{
          height: '100vh',
          
          position: 'relative'
        }}>
          <ParallaxWrapper factor={0.1}>
            <div style={{
              color: 'white',
              fontSize: '2rem',
              textAlign: 'center',
              backgroundColor: 'black'
            }}>
              <h1>Something</h1>
              <h2>Else</h2>
            </div>
          </ParallaxWrapper>
        </div>
        <ParallaxBackground bg={IMAGE_BG_8} factor={0.5}/>
        <div style={{
          height: '100vh',
          
        }}></div>
        <ParallaxBackground bg={IMAGE_BG_4} factor={0.5}/>
        <div style={{
          height: '100vh',
          
        }}></div>
        <ParallaxBackground bg={IMAGE_BG_11} factor={0.5}/>
      </Fragment>
    )
  }
}

export default ParallaxTest