import 'styles/containers/home.scss';

import { connect } from 'react-redux';

import React from 'react';

export const Home = () =>
  <div className="showcase clearfix">
    <div className="window pull-left">
      <div className="line" />
    </div>
    <div className="window pull-right">
      <div className="line" />
    </div>
  </div>;

export default connect(state => state)(Home);
