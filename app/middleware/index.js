import _ from 'lodash'
import { noCache } from 'contrib'
import superagent from 'superagent'
import superagentAsPromised from 'superagent-as-promised'
import { contains } from 'underscore.string'

// const API_ROOT = 'http://localhost:3000'

export const api = store => next => action => {
  const { path } = _.get(action, 'payload', {})
  const actionWith = props => {
    let _action = _.cloneDeep(action)
    _action.payload = _.assign({}, action.payload, props)
    delete _action.payload.path

    return _action
  }

  // stop to current dispatch loop when removed path.
  if (!contains(action.type, 'API') || !_.has(action.payload, 'path')) { 
    return next(action) 
  }

  let dist = _.get(action.payload, 'dist', 'data')
  let files = _.get(action.payload, 'files')
  let source = _.get(action.payload, 'source')
  let status = _.get(action.payload, 'status', 'status')
  let method = _.toLower(_.get(action.payload, 'method', 'get'))
  let params = _.get(action.payload, 'params', {})

  var fullPath = path
  // if (startsWith(path, 'http')) {
  //   fullPath = path
  // } else {
  //   var _path = startsWith(path, '/') ? path : '/' + path
  //   fullPath = sprintf('%s%s', API_ROOT, _path)
  // }

  delete action.payload.dist
  delete action.payload.files
  delete action.payload.source
  delete action.payload.status
  delete action.payload.params
  delete action.payload.method
  delete action.payload.headers

  next(actionWith({ [status]: 'request' }))

  superagentAsPromised(superagent)
  if (!_.isEmpty(files)) {
    let req = superagent[method](path)

    _.forEach(files, file => req = req.attach('files[]', file, file.name))

    return req.withCredentials().use(noCache)
    .then(response => {
      let payload = { [status]: 'success' }
      let _response = _.isEmpty(source) ? response.body : _.get(response.body, source)

      _.set(payload, dist, _response)

      store.dispatch(actionWith(payload))
    })
    .catch(error => {
      store.dispatch(actionWith({ [status]: 'failure', error }))
    })
  }

  let func = _.isEqual(method, 'delete') ? 'del' : method
  var req = superagent[func](fullPath)

  if (_.isEqual(method, 'get')) {
    req = req.query(params)
  } else {
    req = req.send(params)
  }

  return req.withCredentials().use(noCache)
  .then(response => {
    let payload = { [status]: 'success' }
    let _response = _.isEmpty(source) ? response.body : _.get(response.body, source)

    _.set(payload, dist, _response)

    store.dispatch(actionWith(payload))

    return _response
  })
  .catch(error => {
    store.dispatch(actionWith({ [status]: 'failure', error }))
  })
}
