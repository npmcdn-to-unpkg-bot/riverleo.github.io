import 'styles/containers/home.scss'

import _ from 'lodash'
import { instagram } from 'actions'
import { connect } from 'react-redux'

import { Component } from 'react'
import { Grid, Col, Panel, Image } from 'react-bootstrap'

export default class Home extends Component {
  componentDidMount () {
    this.props.dispatch(instagram.mediaFetch())
  }

  render () {
    const { media } = this.props.instagram
    let images = _.map(media, media => _.get(media, 'images.standard_resolution.url'))

    return (
      <div id="home">
        <Grid id="instagram">
          <Panel header="Activities">
            {
              _.map(images, (image, index) => {
                return (
                  <Col key={ index } sm={ 3 } xs={ 6 }>
                    <Image src={ image }/>
                  </Col>
                )
              })
            }
          </Panel>
        </Grid>
      </div>
    )
  }
}

export default connect(state => state)(Home)
