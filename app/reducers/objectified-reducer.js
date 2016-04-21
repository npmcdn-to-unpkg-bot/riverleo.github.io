import _ from 'lodash'
import { objectified } from 'actions'
import { handleActions } from 'redux-actions'

const initialState = {
  focus: false
}

export default handleActions({
  [objectified.MOUSE_OVER_OR_LEAVE]: (state, action) => {
    return _.assign({}, state, action.payload)
  }
}, initialState)
