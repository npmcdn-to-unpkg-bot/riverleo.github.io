const with_query_strings = (request) => {
  /* eslint-disable no-underscore-dangle */
  const r = request;
  if (r._query.length === 0) {
    r._query = [Date.now().toString()];
  } else {
    r._query[0] += `&${Date.now().toString()}`;
  }
  /* eslint-enable */

  return r;
};

export default (request) => {
  const r = request;
  r.set('X-Requested-With', 'XMLHttpRequest');
  r.set('Expires', '-1');
  r.set('Cache-Control', 'no-cache,no-store,must-revalidate,max-age=-1,private');

  with_query_strings(r);

  return r;
};
