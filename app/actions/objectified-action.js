import { createAction } from 'redux-actions'

export const MOUSE_OVER_OR_LEAVE = 'OBJECTIFIED_MOUSE_OVER_OR_LEAVE'

/* ============================================================
 * Actions
 * ============================================================ */

export const mouseOver = createAction(MOUSE_OVER_OR_LEAVE, () => ({ focus: true }))
export const mouseLeave = createAction(MOUSE_OVER_OR_LEAVE, () => ({ focus: false }))
