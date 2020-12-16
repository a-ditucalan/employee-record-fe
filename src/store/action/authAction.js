import axios from 'axios'
import * as ACTION from './action_type'

import * as API from '../../utils/constant'

export const login = info => dispatch => {
  axios
    .post(API.LOGIN_USER, { username: info.username, password: info.password })
    .then(res => {
      localStorage.setItem('token', res.data.token)
      dispatch({
        type: ACTION.LOGIN_SUCCESS,

        payload: res.data.token
      })
    })
    .catch(err => {
      console.log(err)
    })
}

export const register = info => dispatch => {
  axios
    .post(API.REGISTER_USER, info)
    .then(res => {
      console.log(res, 'register compelete')
    })
    .catch(err => {
      console.log(err)
    })
}
