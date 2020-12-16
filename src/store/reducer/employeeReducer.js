/* eslint-disable no-undef */
/* eslint-disable no-case-declarations */
import * as ACTION from '../action/action_type'

const initialState = {
  selectedEmployee: {},
  employee: '',
  query: {
    limit: 5,
    page: 1,
    search: ''
  },
  employeeAll: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTION.GET_ALL_EMPLOYEE:
      return {
        ...state,
        employee: action.payload
      }
    case ACTION.GET_EMPLOYEE:
      return {
        ...state,
        selectedEmployee: action.payload
      }
    case ACTION.GET_ALL_EMPLOYEES:
      return {
        ...state,
        employeeAll: action.payload
      }
    case ACTION.PAGINATION:
      return {
        ...state,
        query: {
          ...state.query,
          page: action.payload
        }
      }
    case ACTION.SEARCH_EMPLOYEE:
      console.log(action.payload, 'paylos')
      return {
        ...state,
        query: {
          ...state.query,
          search: action.payload
        }
      }
    default:
      return state
  }
}
