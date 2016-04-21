import 'styles/containers/home.scss'

import { connect } from 'react-redux'

import { Component } from 'react'

export default class Home extends Component {
  render () {
    return (
      <div className="showcase clearfix">
        <div className="window pull-left">
          <div className="line"/>
        </div>
        <div className="window pull-right">
          <div className="line"/>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(Home)
