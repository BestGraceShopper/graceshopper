import axios from 'axios'
import history from '../../history'

const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'

const getUser = user => ({ type: GET_USER, user })
const removeUser = () => ({ type: REMOVE_USER })

export const me = () => async dispatch => {
  try {
    const { data } = await axios.get('/auth/me')
    dispatch(getUser(data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, { email, password })
  } catch (authError) {
    return dispatch(getUser({ error: authError }))
  }

  try {
    dispatch(getUser(res.data))
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

const initialState = { user: {}, status: 'Logged Out' }

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return { user: action.user, status: 'Logged In' }
    case REMOVE_USER:
      return initialState
    default:
      return state
  }
}
