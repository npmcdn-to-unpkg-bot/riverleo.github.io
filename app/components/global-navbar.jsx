import 'styles/components/global-navbar.scss';

import $ from 'jquery';
import _ from 'lodash';
import classNames from 'classnames';
import { connect } from 'react-redux';

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export class GlobalNavbar extends Component {
  constructor(props) {
    super(props);

    this.handleScroll = _.throttle(this.handleScroll.bind(this), 50);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const scrollTop = _.max([$(window).scrollTop(), 0]);
    const top = scrollTop < 50;
    const down = _.get(this.state, 'lastScrollTop') <= scrollTop;

    this.setState({ top, down, lastScrollTop: scrollTop });
  }

  render() {
    const { top, down } = this.state || {};
    const { me, meStatus } = this.props.instagram;

    return (
      <div
        id="global-navbar"
        className={
          classNames({
            top, [down ? 'down' : 'up']: true,
          })
        }
      >
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
            _.isEqual(meStatus, 'success') &&
              <Nav pullRight>
                <LinkContainer to="/about">
                  <NavItem
                    className="about"
                    style={{
                      backgroundImage: `url("${me.profile_picture}")`,
                    }}
                  >
                    <span className="text-hide">profile</span>
                  </NavItem>
                </LinkContainer>
              </Nav>
          }
        </Navbar>
      </div>
    );
  }
}

export default connect(state => state)(GlobalNavbar);

GlobalNavbar.propTypes = {
  instagram: PropTypes.shape({
    me: PropTypes.object.isRequired,
    meStatus: PropTypes.string.isRequired,
  }).isRequired,
};
