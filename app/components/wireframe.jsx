import 'styles/components/wireframe.scss'

import { Component } from 'react'

export default class Wireframe extends Component {
  render () {
    return (
      <div className="wireframe">
        <div className="w-navbar block"/>
        <div className="w-navbar-left block"/>
        <div className="w-navbar-center block"/>
        <div className="w-navbar-right block"/>
        <div className="w-content-header block">
          <div className="w-item block"/>
          <div className="w-item block"/>
          <div className="w-item block"/>
        </div>
        <div className="w-aside-left block">
          <div className="w-item block"/>
          <div className="w-item block"/>
        </div>
        <div className="w-footer block">
          <div className="w-item block"/>
          <div className="w-item block"/>
          <div className="w-item block"/>
        </div>
        <div className="w-content block">
          <div className="w-header block">
            <div className="w-thumbnail block"/>
            <div className="w-text username block"/>
            <div className="w-text summary block"/>
          </div>
          <div className="w-body block">
            <div className="w-text text-1 block"/>
            <div className="w-text text-2 block"/>
            <div className="w-text text-3 block"/>
          </div>
        </div>
      </div>
    )
  }
}
