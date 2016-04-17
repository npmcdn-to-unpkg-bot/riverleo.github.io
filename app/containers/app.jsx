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
    const { children, instagram } = this.props
    const { meStatus } = instagram

    if (!_.isEqual(meStatus, 'success')) {
      return <div/>
    }

    return (
      <div id="app">
        <GlobalNavbar/>
        <div className="react-container">
          { children }
        </div>
        <GlobalFooter/>
      </div>
    )
  }
}

export default connect(state => state)(App)
