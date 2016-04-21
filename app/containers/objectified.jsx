import 'styles/containers/objectified.scss'

import { Component } from 'react'
import { Objects } from 'components/objectified'
import { Grid, Col } from 'react-bootstrap'

export default class Objectified extends Component {
  render () {

    return (
      <Grid>
        <Col xs={ 12 } sm={ 4 }>
          <Objects title="Navigation Bar" subtitle="subtitle" active="navbar"/>
        </Col>
      </Grid>
    )
  }
}
