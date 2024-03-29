/* eslint-disable no-undef */
/* eslint-disable no-case-declarations */
import * as ACTION from '../action/action_type'
import moment from 'moment'
const initialState = {
  selecteditem: {
    status: 'China warehouse',
    warehouse: '',
    shippingMark: '',
    itemName: '',
    cbm: 0,
    kilo: 0,
    numberOfBox: 0,
    trackingNumber: '',
    containerNumber: '',
    notes: ''
  },
  item: '',
  query: {
    limit: 10,
    page: 1,
    search: '',
    startDate: '',
    endDate: ''
  },
  itemAll: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTION.GET_ALL_ITEM:
      return {
        ...state,
        item: action.payload
      }
    case ACTION.GET_ITEM:
      return {
        ...state,
        selectedItem: action.payload
      }
    case ACTION.GET_ALL_ITEMS:
      return {
        ...state,
        itemAll: action.payload
      }
    case ACTION.PAGINATION:
      return {
        ...state,
        query: {
          ...state.query,
          page: action.payload
        }
      }
    case ACTION.SEARCH_DATE:
      console.log(state.query, 'QUERRYY')
      return {
        ...state,
        query: {
          ...state.query,
          startDate: moment(action.payload[0].startDate, 'YYYY-MM-DD').format(
            'YYYY-MM-DD'
          ),
          endDate: moment(action.payload[0].endDate, 'YYYY-MM-DD').format(
            'YYYY-MM-DD'
          )
        }
      }
    case ACTION.SEARCH_ITEM:
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
