import 'styles/components/documents/document-single-item.scss';

import _ from 'lodash';
import moment from 'moment';

import React, { PropTypes } from 'react';
import { Panel, Image } from 'react-bootstrap';

export const DocumentSingleItem = ({ doc }) => {
  const { title, subtitle, title_image_url } = doc;

  return (
    <div className="document-single-item">
      <Panel
        footer={
          <div className="clearfix">
            <div className="info pull-right">
              <time dateTime="2016-05-03T10:05:28">
                {moment('2016-05-03T10:05:28').format('D, MMM')}
              </time>
            </div>
          </div>
        }
      >
        <div className="title-image">
          {
            !_.isEmpty(title_image_url) &&
              <Image src={title_image_url} />
          }
        </div>

        <div className="hgroup">
          {
            !_.isEmpty(title) &&
              <h2 className="title">{title}</h2>
          }
          {
            !_.isEmpty(subtitle) &&
              <h3 className="subtitle">{subtitle}</h3>
          }
        </div>
      </Panel>
    </div>
  );
};

DocumentSingleItem.propTypes = {
  doc: PropTypes.object.isRequired,
};

export default DocumentSingleItem;
