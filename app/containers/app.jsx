import 'styles/reset.scss'

import { Component } from 'react'

export default class App extends Component {
  render () {
    const { children } = this.props

    return (
      <div>
        { children }
      </div>
    )
  }
}
