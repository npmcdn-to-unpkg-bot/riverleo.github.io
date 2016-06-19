import store from 'store';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import {
  App, Home, About, Documents, DocumentDetail, Objectified, NoMatch,
} from 'containers';

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="documents" component={Documents} />
        <Route path="documents/:slug" component={DocumentDetail} />
        <Route path="objectified" component={Objectified} />
        <Route path="**" component={NoMatch} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
