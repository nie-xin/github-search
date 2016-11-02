/**
 * startAction:
 * - dispatch the initial action
 * - meta.done will be false
*/
export const startAction = (type) => () => ({
  type,
  meta: {
    done: false
  }
})

/**
 * successAction:
 * - meta.done will be true
 * - no error property
 * - return response as payload
*/
export const successAction = (type) => (payload) => ({
  type,
  payload,
  meta: {
    done: true
  }
})

/**
 * failureAction:
 * - meta.done will be true
 * - error will be true
 * - error object as payload
*/
export const failureAction = (type) => (error) => ({
  type,
  payload: error,
  error: true,
  meta: {
    done: true
  }
})

/**
 * asyncAction:
 * - stitch previous helpers to a sequence
 * - second return function (..args) is action creator
 * - third return function (dispatch) will be thunk function
 * - start action should be dispatched before starting request
*/
export const asyncAction = ({ request, start, success, failure }) => (...args) => (dispatch) => {
  dispatch(start())

  return request(...args)
    .then(response => dispatch(success(response)))
    .catch(error => dispatch(failure(error)))
}
