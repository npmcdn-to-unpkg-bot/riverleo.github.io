import 'styles/components/objectified/object-item.scss';

import store from 'store';
import { objectified } from 'actions';

import React, { PropTypes } from 'react';
import { Wireframe } from 'components/objectified';
import { Panel } from 'react-bootstrap';
import { Link } from 'react-router';

export const Entity = ({ title, subtitle, active }) => {
  const { mouseEnter, mouseLeave } = objectified;

  return (
    <Link to={`/objectified/${title}`}>
      <Panel
        className="object-item"
        onMouseEnter={() => store.dispatch(mouseEnter())}
        onMouseLeave={() => store.dispatch(mouseLeave())}
        footer={
          <dl>
            <dt>{title}</dt>
            <dd>{subtitle}</dd>
          </dl>
        }
      >
        <Wireframe active={active} />
      </Panel>
    </Link>
  );
};

Entity.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
};

export default Entity;
