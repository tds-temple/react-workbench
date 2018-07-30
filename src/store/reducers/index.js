//NPM
import { combineReducers } from 'redux'

//Reducers
import animationReducer from './animationReducer'

export default combineReducers({
  animation: animationReducer
})