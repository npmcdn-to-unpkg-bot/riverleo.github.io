import 'styles/components/documents/document-single-item.scss'

import _ from 'lodash'
import moment from 'moment'

import { Component, PropTypes } from 'react'
import { Panel, Image, ButtonGroup, Button, Label } from 'react-bootstrap'

export default class DocumentSingleItem extends Component {
  render () {
    const { title, subtitle, title_image_url } = this.props.doc

    return (
      <div className="document-single-item">
        <Panel
          header={
            <div className="clearfix">
              <div className="info pull-left">
                <time datetime="2016-05-03T10:05:28">
                  { moment('2016-05-03T10:05:28').format('DD MMM YYYY') }
                </time>
              </div>
              <div className="tags pull-right">
                <Label>react</Label>
              </div>
            </div>
          }
          footer={
            <div className="clearfix">
              <ButtonGroup className="shares pull-left">
                <Button>Facebook</Button>
                <Button>Messenger</Button>
                <Button>Twitter</Button>
                <Button>Kakao</Button>
              </ButtonGroup>
              <ButtonGroup className="actions pull-right">
                <Button>Bookmark</Button>
              </ButtonGroup>
            </div>
          }
        >
          { !_.isEmpty(title_image_url) ? <Image src={ title_image_url }/> : undefined }

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
