import 'styles/components/wireframe.scss'

import _ from 'lodash'
import classNames from 'classnames'

import { Component, PropTypes } from 'react'

export default class Wireframe extends Component {
  className (name) {
    const { active } = this.props

    return classNames({ ['w-' + name]: true, block: true, active: _.isEqual(name, active) })
  }

  render () {

    return (
      <div className="wireframe">
        <div className={ this.className('navbar') }>
          <div className={ this.className('navbar-left') }/>
          <div className={ this.className('navbar-center') }/>
          <div className={ this.className('navbar-right') }/>
        </div>
        <div className={ this.className('content-header') }>
          <div className={ this.className('item') }/>
          <div className={ this.className('item') }/>
          <div className={ this.className('item') }/>
        </div>
        <div className={ this.className('aside') }>
          <div className={ this.className('item') }/>
          <div className={ this.className('item') }/>
        </div>
        <div className={ this.className('content') }>
          <div className={ this.className('header') }>
            <div className={ this.className('thumbnail') }/>
            <div className={ this.className('summary') }>
              <div className={ this.className('text') }/>
              <div className={ this.className('text') }/>
            </div>
          </div>
          <div className={ this.className('body') }>
            <div className={ this.className('text') }/>
            <div className={ this.className('text') }/>
            <div className={ this.className('text') }/>
          </div>
        </div>
        <div className={ this.className('footer') }>
          <div className={ this.className('item') }/>
          <div className={ this.className('item') }/>
          <div className={ this.className('item') }/>
        </div>
      </div>
    )
  }
}

Wireframe.propTypes = {
  active: PropTypes.oneOf(['navbar', 'header', 'aside', 'footer', 'content']).isRequired
}
