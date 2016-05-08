import 'styles/components/documents/document-single-item.scss'

import _ from 'lodash'
import moment from 'moment'

import { Component, PropTypes } from 'react'
import { Panel, Image } from 'react-bootstrap'

export default class DocumentSingleItem extends Component {
  render () {
    const { title, subtitle, title_image_url } = this.props.doc

    return (
      <div className="document-single-item">
        <Panel
          footer={
            <div className="clearfix">
              <div className="info pull-right">
                <time datetime="2016-05-03T10:05:28">
                  { moment('2016-05-03T10:05:28').format('D, MMM') }
                </time>
              </div>
            </div>
          }
        >
          <div className="title-image">
            { !_.isEmpty(title_image_url) ? <Image src={ title_image_url }/> : undefined }
          </div>

          <div className="hgroup">
            { !_.isEmpty(title) ? <h2 className="title">{ title }</h2> : undefined }
            { !_.isEmpty(subtitle) ? <h3 className="subtitle">{ subtitle }</h3> : undefined }
          </div>
        </Panel>
      </div>
    )
  }
}

DocumentSingleItem.propTypes = {
  doc: PropTypes.object.isRequired
}
