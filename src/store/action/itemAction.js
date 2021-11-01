import axios from 'axios'
import * as ACTION from './action_type'

import * as API from '../../utils/constant'

export const getItems = () => (dispatch, getState) => {
  const { page, limit, search } = getState().item.query

  axios
    .get(
      API.GET_ALL_ITEM + `/?limit=${limit}&page=${page}&search=${search}`,
      tokenConfig(getState)
    )
    .then(res => {
      dispatch({
        type: ACTION.GET_ALL_ITEM,

        payload: res.data.response
      })
    })
    .catch(err => {
      console.log(err)
    })
}

export const getItem = () => (dispatch, getState) => {
  axios
    .get(API.GET_ITEM)
    .then(res => {
      dispatch({
        type: ACTION.GET_ITEM,

        payload: res.data.response
      })
    })
    .catch(err => {
      console.log(err)
    })
}

export const addItem = data => (dispatch, getState) => {
  axios
    .post(API.ADD_ITEM, data, tokenConfig())
    .then(res => {
      console.log(res, 'success')
    })
    .catch(err => {
      console.log(err)
    })
}

export const updateItem = data => (dispatch, getState) => {
  const itemData = {
    status: data.status,
    shippingMark: data.shippingMark,
    itemName: data.itemName,
    cbm: data.cbm,
    kilo: data.kilo,
    numberOfBox: data.numberOfBox,
    trackingNumber: data.trackingNumber,
    notes: data.notes
  }

  axios
    .post(API.UPDATE_ITEM + `/${data._id}`, itemData, tokenConfig())
    .then(res => {
      console.log('sucess', res)
    })
    .catch(err => {
      console.log(err)
    })
}

export const getSpecificItem = data => (dispatch, getState) => {
  axios
    .get(API.GET_ITEM + `/${data}`, tokenConfig())
    .then(res => {
      // const addID = (res.data.response['id'] = data)

      dispatch({
        type: ACTION.GET_ITEM,
        payload: res.data.response
      })
    })
    .catch(err => {
      console.log(err)
    })
}

export const deleteItem = data => dispatch => {
  axios
    .post(API.DELETE_ITEM, data, tokenConfig())
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

export const onSearchItem = name => dispatch => {
  dispatch({
    type: ACTION.SEARCH_ITEM,

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
