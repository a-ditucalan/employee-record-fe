import axios from 'axios'
import * as ACTION from './action_type'

import * as API from '../../utils/constant'

export const getEmployee = () => (dispatch, getState) => {
  const { page, limit, search } = getState().employee.query

  axios
    .get(
      API.GET_ALL_EMPLOYEE + `/?limit=${limit}&page=${page}&search=${search}`
    )
    .then(res => {
      dispatch({
        type: ACTION.GET_ALL_EMPLOYEE,

        payload: res.data.response
      })
    })
    .catch(err => {
      console.log(err)
    })
}

export const getEmployees = () => (dispatch, getState) => {
  axios
    .get(API.GET_ALL_EMPLOYEES)
    .then(res => {
      dispatch({
        type: ACTION.GET_ALL_EMPLOYEES,

        payload: res.data.response
      })
    })
    .catch(err => {
      console.log(err)
    })
}

export const addEmployee = data => (dispatch, getState) => {
  axios
    .post(API.ADD_EMPLOYEE, data)
    .then(res => {
      console.log('sucess')
    })
    .catch(err => {
      console.log(err)
    })
}

export const updateEmployee = data => (dispatch, getState) => {
  const empData = {
    employeeID: data._id,
    name: data.name,
    designation: data.designation,
    email: data.email,
    phone: data.phone,
    age: data.age
  }
  axios
    .post(API.UPDATE_EMPLOYEE, empData)
    .then(res => {
      console.log('sucess')
    })
    .catch(err => {
      console.log(err)
    })
}

export const getSpecificEmployee = data => (dispatch, getState) => {
  axios
    .post(API.GET_EMPLOYEE, { employeeID: data })
    .then(res => {
      // const addID = (res.data.response['id'] = data)

      dispatch({
        type: ACTION.GET_EMPLOYEE,
        payload: res.data.response
      })
    })
    .catch(err => {
      console.log(err)
    })
}

export const deleteEmployee = data => dispatch => {
  axios
    .post(API.DELETE_EMPLOYEE, data, tokenConfig())
    .then(res => {
      console.log(res, 'success deleted')
    })
    .catch(err => {
      console.log(err)
    })
}

export const setPaginationPage = page => dispatch => {
  dispatch({
    type: ACTION.PAGINATION,

    payload: page
  })
}

export const onSearchEmployee = name => dispatch => {
  dispatch({
    type: ACTION.SEARCH_EMPLOYEE,

    payload: name
  })
}
export const tokenConfig = getState => {
  // Get token from local storage
  const token = localStorage.getItem('token')

  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  }

  // If token, add to headers
  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token
  }

  console.log(config, 'config')

  return config
}
