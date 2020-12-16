/* eslint-disable no-undef */
/* eslint-disable no-case-declarations */
import * as ACTION from '../action/action_type'

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: false,
  user: null,
  userProfile: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTION.USER_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case ACTION.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true
      }
    case ACTION.USER_LOADED:
      return {
        ...state,
        user: action.payload.data,
        isAuthenticated: true,
        isLoading: false
      }
    default:
      return state
  }
}
