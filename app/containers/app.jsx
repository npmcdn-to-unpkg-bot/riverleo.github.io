import 'styles/reset.scss'
import 'styles/app.scss'

import _ from 'lodash'
import { connect } from 'react-redux'
import { instagram } from 'actions'

import { Component } from 'react'
import { GlobalNavbar, GlobalFooter } from 'components'

export class App extends Component {
  componentDidMount () {
    this.props.dispatch(instagram.me())
  }

  render () {
    const { children } = this.props

    var containerName = _.kebabCase(children.type.name)
    if (!_.isEmpty(children.type.displayName)) {
      containerName = _.kebabCase(children.type.displayName.match(/\([a-zA-Z0-9]+\)/g))
    }

    return (
      <div id="app">
        <div id={ containerName } className="react-container">
          <GlobalNavbar/>
          <div id="contents">
            { children }
          </div>
          <GlobalFooter/>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(App)
