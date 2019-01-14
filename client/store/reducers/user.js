import axios from 'axios'
import history from '../../history'
import { runInNewContext } from 'vm'

// const GET_USER = 'GET_USER'
export const AUTH_REQUEST = 'AUTH_REQUEST'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_FAILURE = 'AUTH_FAILURE'

const REMOVE_USER = 'REMOVE_USER'

// const getUser = user => ({ type: GET_USER, user })
const removeUser = () => ({ type: REMOVE_USER })

const authenticating = () => ({
  type: AUTH_REQUEST,
  login: true
})

const authenticate = userData => ({
  type: AUTH_SUCCESS,
  user: userData,
  login: false
})

const authError = error => ({
  type: AUTH_FAILURE,
  error: 'Failed to authenticate',
  payload: error
})

export const me = () => {
  return async dispatch => {
    dispatch(authenticating())
    try {
      const { data } = await axios.get('/auth/me')
      if (data.email) {
        dispatch(authenticate(data))
      }
    } catch (error) {
      dispatch(authError(error))
    }
  }
}

// export const me = () => async dispatch => {
//   try {
//     const { data } = await axios.get('/auth/me')
//     console.log(data, 'userdatea')
//     if (data.email) {
//       dispatch(getUser(data))
//     }
//   } catch (err) {
//     console.error(err)
//   }
// }
export const selectUserName = state => {
  const user = state.auth.user
  const title = user.gender === 'Male' ? 'Mr.' : 'Ms.'
  return `${title} ${user.firstName} ${user.lastName}`
}

export const author = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, { email, password })
  } catch (authError) {
    return dispatch(dispatch(authError(error)))
  }

  try {
    dispatch(authenticate(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

const initialState = {
  user: {
    email: ''
  },
  login: true
}

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_REQUEST:
      return { ...state, login: action.login, isFetching: true }
    case AUTH_SUCCESS:
      return { user: action.user, login: action.login, isFetching: false }
    case REMOVE_USER:
      return initialState
    default:
      return state
  }
}
