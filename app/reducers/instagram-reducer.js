import _ from 'lodash';
import assign from 'deep-assign';
import { instagram } from 'actions';
import { handleActions } from 'redux-actions';

const initialState = {
  me: {},
  media: {},
  meStatus: 'waiting',
};

export default handleActions({
  [instagram.ME]: (state, action) => _.assign({}, state, action.payload),
  [instagram.MEDIA_FETCH]: (state, action) => assign({}, state, action.payload),
}, initialState);
