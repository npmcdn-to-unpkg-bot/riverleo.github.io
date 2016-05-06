import 'styles/components/objectified/objects.scss'

import store from 'store'
import { objectified } from 'actions'

import { Component, PropTypes } from 'react'
import { Wireframe } from 'components/objectified'
import { Panel } from 'react-bootstrap'
import { Link } from 'react-router'

export default class Objects extends Component {
  render () {
    const { title, subtitle, active } = this.props
    const { mouseEnter, mouseLeave } = objectified

    return (
      <Link to={ '/objectified/' + title }>
        <Panel className="object"
          onMouseEnter={ () => store.dispatch(mouseEnter()) }
          onMouseLeave={ () => store.dispatch(mouseLeave()) }
          footer={
            <dl>
              <dt>{ title }</dt>
              <dd>{ subtitle }</dd>
            </dl>
          }
        >
          <Wireframe active={ active }/>
        </Panel>
      </Link>
    )
  }
}

Objects.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired
}
