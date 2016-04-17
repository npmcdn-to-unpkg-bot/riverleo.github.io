import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import instagram from './instagram-reducer'

export default combineReducers({
  routing, instagram
})
