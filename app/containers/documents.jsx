import 'styles/containers/documents.scss'

import { Component } from 'react'
import { Grid, Col } from 'react-bootstrap'
import { DocumentSingleItem } from 'components/documents'

export default class Documents extends Component {
  render () {
    return (
      <div>
        <Grid>
          <Col className="document-item" sm={ 3 }>
            <DocumentSingleItem
              doc={{
                title: 'title',
                subtitle: 'subtitle',
                title_image_url: 'https://cdn-images-1.medium.com/max/166/1*dIbM7ZVxH5VRU-v5AvAzQQ.jpeg'
              }}
            />
          </Col>
        </Grid>
      </div>
    )
  }
}
