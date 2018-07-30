//Actions
import { 
  TRIGGER_ANIM_PAGE_LOADED,
  TRIGGER_ANIM_SECTION_TWO,
  TRIGGER_ANIM_SECTION_THREE,
  TRIGGER_ANIM_SECTION_FOUR,
  TRIGGER_ANIM_SECTION_FIVE
} from '../../actions/animation/types'

const initialState = {
  animTriggerPageLoaded: false,
  animTriggerSectionTwo: false,
  animTriggerSectionThree: false,
  animTriggerSectionFour: false,
  animTriggerSectionFive: false
}

const animationReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch(type) {
    case TRIGGER_ANIM_PAGE_LOADED:
      return { ...state, animTriggerPageLoaded: payload.triggerState }
    case TRIGGER_ANIM_SECTION_TWO:
      return { ...state, animTriggerSectionTwo: payload.triggerState }
    case TRIGGER_ANIM_SECTION_THREE:
      return { ...state, animTriggerSectionThree: payload.triggerState }
    case TRIGGER_ANIM_SECTION_FOUR:
      return { ...state, animTriggerSectionFour: payload.triggerState }
    case TRIGGER_ANIM_SECTION_FIVE:
      return { ...state, animTriggerSectionFive: payload.triggerState }
    default:
      return state
  }
}

export default animationReducer