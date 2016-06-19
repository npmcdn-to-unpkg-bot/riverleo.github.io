import 'styles/reset.scss';
import 'styles/app.scss';

import _ from 'lodash';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { instagram } from 'actions';

import React, { Component, PropTypes } from 'react';
import { GlobalNavbar, GlobalFooter } from 'components';

export class App extends Component {
  componentDidMount() {
    this.props.dispatch(instagram.me());
  }

  render() {
    const { children, objectified, location } = this.props;
    const { pathname } = location;

    const index = pathname.lastIndexOf('/');
    let containerName = _.kebabCase(pathname.substring(index));

    if (_.isEmpty(containerName)) { containerName = 'home'; }

    return (
      <div id="app">
        <div
          id={containerName}
          className={
            classNames({
              'react-container': true,
              'object-focus': objectified.focus,
            })
          }
        >
          <GlobalNavbar />
          <div id="contents">
            {children}
          </div>
          <GlobalFooter />
        </div>
      </div>
    );
  }
}

export default connect(state => state)(App);

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
  objectified: PropTypes.shape({
    focus: PropTypes.bool.isRequired,
  }),
};
