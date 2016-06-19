import 'styles/containers/objectified.scss';

import store from 'store';
import { objectified } from 'actions';

import React, { Component } from 'react';
import { ObjectItem } from 'components/objectified';
import { Grid, Col } from 'react-bootstrap';

export default class Objectified extends Component {
  componentDidMount() {
    store.dispatch(objectified.mouseLeave());
  }

  render() {
    return (
      <Grid>
        <Col xs={12} sm={6} md={4}>
          <ObjectItem
            title="Navigation Bar"
            subtitle="subtitle"
            active="navbar"
          />
        </Col>
      </Grid>
    );
  }
}
