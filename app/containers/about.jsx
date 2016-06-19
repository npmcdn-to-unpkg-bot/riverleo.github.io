import 'styles/containers/about.scss';

import _ from 'lodash';
import { instagram } from 'actions';
import { connect } from 'react-redux';

import React, { Component, PropTypes } from 'react';
import { Grid, Col, Panel, Image } from 'react-bootstrap';

export class About extends Component {
  componentDidMount() {
    this.props.dispatch(instagram.mediaFetch());
  }

  render() {
    const { media } = this.props.instagram;
    const images = _.map(media, m => _.get(m, 'images.standard_resolution.url'));

    return (
      <div>
        <Grid id="instagram">
          <Panel header="Activities">
            {
              _.map(images, (image, index) =>
                <Col key={index} sm={3} xs={6}>
                  <Image src={image} />
                </Col>
              )
            }
          </Panel>
        </Grid>
      </div>
    );
  }
}

export default connect(state => state)(About);

About.propTypes = {
  dispatch: PropTypes.func.isRequired,
  instagram: PropTypes.shape({
    media: PropTypes.array,
  }).isRequired,
};
