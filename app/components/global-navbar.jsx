import 'styles/components/global-navbar.scss'

import $ from 'jquery'
import _ from 'lodash'
import cn from 'classnames'
import { connect } from 'react-redux'
import { sprintf } from 'underscore.string'

import { Component } from 'react'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

export class GlobalNavbar extends Component {
  constructor (props) {
    super(props)

    this.handleScroll = _.throttle(this.handleScroll.bind(this), 50)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll () {
    let scrollTop = _.max([$(window).scrollTop(), 0])
    let top =  scrollTop < 50
    let down = _.get(this.state, 'lastScrollTop') <= scrollTop

    this.setState({ top, down, lastScrollTop: scrollTop })
  }

  render () {
    const { top, down } = this.state || {}
    const { me, meStatus } = this.props.instagram

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
            <LinkContainer to="/objectified">
              <NavItem>objectified</NavItem>
            </LinkContainer>
            <LinkContainer to="/documents">
              <NavItem>documents</NavItem>
            </LinkContainer>
          </Nav>
          {
            (() => {
              if (!_.isEqual(meStatus, 'success')) { return }

              return (
                <Nav pullRight>
                  <LinkContainer to="/about">
                    <NavItem className="about"
                    style={{ backgroundImage: sprintf('url("%s")', me.profile_picture) }}>
                      <span className="text-hide">profile</span>
                    </NavItem>
                  </LinkContainer>
                </Nav>
              )
            })()
          }
        </Navbar>
      </div>
    )
  }
}

export default connect(state => state)(GlobalNavbar)
