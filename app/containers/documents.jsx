import 'styles/containers/documents.scss'

import _ from 'lodash'

import { Component, PropTypes } from 'react'
import { Grid, Col, Panel, ListGroup, ListGroupItem } from 'react-bootstrap'
import { DocumentSingleItem } from 'components/documents'

export default class Documents extends Component {
  render () {
    const { bookmarks } = this.props

    return (
      <Grid>
        <Col sm={ 8 }>
          <DocumentSingleItem
          doc={{
            title: 'title',
            subtitle: 'subtitle',
            title_image_url: 'https://cdn-images-1.medium.com/max/166/1*dIbM7ZVxH5VRU-v5AvAzQQ.jpeg'
          }}
        />
        </Col>
        <Col sm={ 4 } className="hidden-xs">
          <aside>
            <Panel
              id="bookmarks"
              header="bookmarks"
            >
            {
              (() => {
                if (_.isEmpty(bookmarks)) {
                  return (
                    <div className="empty-state">
                      You didn't bookmarked anything ;(
                    </div>
                  )
                }

                return (
                  <ListGroup fill>
                    {
                      _.map(bookmarks, doc => {
                        return (
                            <ListGroupItem key={ doc.id } header={ doc.title }>
                              { doc.body }
                            </ListGroupItem>
                        )
                      })
                    }
                  </ListGroup>
                )
              })()
            }
            </Panel>
          </aside>
        </Col>
      </Grid>
    )
  }
}

Documents.propTypes = {
  bookmarks: PropTypes.array.isRequired
}

Documents.defaultProps = {
  bookmarks: []
}
