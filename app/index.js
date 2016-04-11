import store from 'store'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, IndexRoute, Route, hashHistory } from 'react-router'
import { App, Home, About, Doodle, Objectified, NoMatch } from 'containers'
import { syncHistoryWithStore } from 'react-router-redux'

const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home }/>
        <Route path="about" component={ About }/>
        <Route path="doodle" component={ Doodle }/>
        <Route path="objectified" component={ Objectified }/>
        <Route path="**" component={ NoMatch }/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
