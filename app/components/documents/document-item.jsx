import React, { PropTypes } from 'react';
import DocumentSingleItem from './document-single-item';

export const DocumentItem = ({ doc }) =>
  <DocumentSingleItem doc={doc} />;

DocumentItem.propTypes = {
  doc: PropTypes.object.isRequired,
};

export default DocumentItem;
