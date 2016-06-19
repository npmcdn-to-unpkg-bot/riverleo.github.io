import _ from 'lodash';
import { noCache } from 'contrib';
import superagent from 'superagent';
import superagentAsPromised from 'superagent-as-promised';
import { contains } from 'underscore.string';

// const API_ROOT = 'http://localhost:3000'

export const api = store => next => originAction => {
  const action = originAction;
  const { path } = _.get(action, 'payload', {});

  const actionWith = props => {
    const cloned = _.cloneDeep(action);

    cloned.payload = _.assign({}, action.payload, props);
    delete cloned.payload.path;

    return cloned;
  };

  // stop to current dispatch loop when removed path.
  if (!contains(action.type, 'API') || !_.has(action.payload, 'path')) {
    return next(action);
  }

  const dist = _.get(action.payload, 'dist', 'data');
  const files = _.get(action.payload, 'files');
  const source = _.get(action.payload, 'source');
  const status = _.get(action.payload, 'status', 'status');
  const method = _.toLower(_.get(action.payload, 'method', 'get'));
  const params = _.get(action.payload, 'params', {});

  const fullPath = path;
  // if (startsWith(path, 'http')) {
  //   fullPath = path
  // } else {
  //   var _path = startsWith(path, '/') ? path : '/' + path
  //   fullPath = sprintf('%s%s', API_ROOT, _path)
  // }

  delete action.payload.dist;
  delete action.payload.files;
  delete action.payload.source;
  delete action.payload.status;
  delete action.payload.params;
  delete action.payload.method;
  delete action.payload.headers;

  next(actionWith({ [status]: 'request' }));

  superagentAsPromised(superagent);

  if (!_.isEmpty(files)) {
    let req = superagent[method](path);

    _.forEach(files, file => {
      req = req.attach('files[]', file, file.name);
    });

    return req.withCredentials().use(noCache)
    .then(response => {
      const payload = { [status]: 'success' };
      const body = _.isEmpty(source) ? response.body : _.get(response.body, source);

      _.set(payload, dist, body);
      store.dispatch(actionWith(payload));

      return response;
    })
    .catch(error => {
      store.dispatch(actionWith({ [status]: 'failure', error }));

      return error;
    });
  }

  const func = _.isEqual(method, 'delete') ? 'del' : method;
  let req = superagent[func](fullPath);

  if (_.isEqual(method, 'get')) {
    req = req.query(params);
  } else {
    req = req.send(params);
  }

  return req.withCredentials().use(noCache)
  .then(response => {
    const payload = { [status]: 'success' };
    const body = _.isEmpty(source) ? response.body : _.get(response.body, source);

    _.set(payload, dist, body);

    store.dispatch(actionWith(payload));

    return response;
  })
  .catch(error => {
    store.dispatch(actionWith({ [status]: 'failure', error }));

    return error;
  });
};
