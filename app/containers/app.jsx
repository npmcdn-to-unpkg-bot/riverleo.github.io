import 'styles/reset.scss'

import { Component } from 'react'
import { GlobalNavbar, GlobalFooter } from 'components'

export default class App extends Component {
  render () {
    const { children } = this.props

    return (
      <div id="app">
        <GlobalNavbar/>
        { children }
        <GlobalFooter/>
      </div>
    )
  }
}
