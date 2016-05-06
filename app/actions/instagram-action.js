import $ from 'jquery'
import _ from 'lodash'
import { createAction } from 'redux-actions'

export const ME = 'INSTAGRAM_ME'
export const MEDIA_FETCH = 'INSTAGRAM_MEDIA_FETCH'

const access_token = '295944363.df76c0a.1d84eb0be7c543d28d5a39d1f5a8b405'

/* ============================================================
 * Private Actions
 * ============================================================ */

export const __me__ = createAction(ME)
export const __mediaFetch__ = createAction(MEDIA_FETCH)

/* ============================================================
 * Actions
 * ============================================================ */

export const me = () => (dispatch, getState) => {
  const { meStatus } = getState().instagram

  if (_.includes(['request', 'success'], meStatus)) { return }

  dispatch(__me__({ meStatus: 'request' }))

  return $.ajax({
    url: 'https://api.instagram.com/v1/users/self',
    dataType: 'jsonp',
    cache: false,
    data: { access_token }
  }).done(response => {
    dispatch(__me__({ meStatus: 'success', me: response.data }))
  }).fail(response => {
    dispatch(__me__({ meStatus: 'failure', me: response.data }))
  })
}

export const mediaFetch = () => (dispatch, getState) => {
  const { mediaStatus } = getState().instagram

  if (_.isEqual(mediaStatus, 'request')) { return }

  dispatch(__mediaFetch__({ mediaStatus: 'request' }))

  return $.ajax({
    url: 'https://api.instagram.com/v1/users/self/media/recent/',
    dataType: 'jsonp',
    cache: false,
    data: { access_token, count: 20 }
  }).done(response => {
    dispatch(__mediaFetch__({ mediaStatus: 'success', media: response.data }))
  }).fail(response => {
    dispatch(__mediaFetch__({ mediaStatus: 'failure', media: response.data }))
  })
}
