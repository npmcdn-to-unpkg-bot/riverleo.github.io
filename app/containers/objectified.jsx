import 'styles/containers/objectified.scss'

import { Component } from 'react'
import { Wireframe } from 'components'
import { Grid, Col, Panel } from 'react-bootstrap'

export default class Objectified extends Component {
  render () {
    return (
      <Grid>
        <Col xs={ 12 } sm={ 4 }>
          <Panel className="object"
          footer={
            <dl>
              <dt>Global Navigation Bar</dt>
              <dd></dd>
            </dl>
          }>
            <Wireframe/>
          </Panel>
        </Col>
      </Grid>
    )
  }
}
