import 'styles/components/global-navbar.scss'

import $ from 'jquery'
import _ from 'lodash'
import cn from 'classnames'

import { Component } from 'react'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

export default class GlobalNavbar extends Component {
  componentDidMount () {
    window.addEventListener('scroll', _.throttle(this.handleScroll.bind(this), 50))
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', _.throttle(this.handleScroll.bind(this)))
  }

  handleScroll () {
    let scrollTop = _.max([$(window).scrollTop(), 0])
    let top =  scrollTop < 50
    let down = _.get(this.state, 'lastScrollTop') <= scrollTop

    this.setState({ top, down, lastScrollTop: scrollTop })
  }

  render () {
    const { top, down } = this.state || {}

    return (
      <div id="global-navbar" className={ cn({ top, [down ? 'down' : 'up']: true }) }>
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">riverleo</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav className="navbar-center">
            <LinkContainer to="/" onlyActiveOnIndex>
              <NavItem>home</NavItem>
            </LinkContainer>
            <LinkContainer to="/doodle">
              <NavItem>doodle</NavItem>
            </LinkContainer>
            <LinkContainer to="/objectified">
              <NavItem>objectified</NavItem>
            </LinkContainer>
          </Nav>
          <Nav right>
            <LinkContainer to="/about">
              <NavItem className="about text-hide">
                <i className="fa fa-user"/>
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>
      </div>
    )
  }
}
