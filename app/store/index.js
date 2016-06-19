import thunk from 'redux-thunk';
import { api } from 'middleware';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';

import reducers from 'reducers';

export default compose(
  applyMiddleware(thunk, createLogger(), api)
)(createStore)(reducers);
