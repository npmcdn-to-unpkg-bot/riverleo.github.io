import 'styles/containers/documents.scss';

import React from 'react';
import { DocumentItem } from 'components/documents';

const title_image_url = 'https://cdn-images-1.medium.com/max/166/1*dIbM7ZVxH5VRU-v5AvAzQQ.jpeg';

export const Documents = () =>
  <div className="document-list">
    <DocumentItem
      doc={{
        title: 'title',
        subtitle: 'subtitle',
        title_image_url,
      }}
    />
    <DocumentItem
      doc={{
        title: 'title',
        subtitle: 'subtitle',
        title_image_url,
      }}
    />
  </div>;

export default Documents;
