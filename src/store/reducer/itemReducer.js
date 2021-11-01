/* eslint-disable no-undef */
/* eslint-disable no-case-declarations */
import * as ACTION from '../action/action_type'

const initialState = {
  selecteditem: {
    status: 'Guangzhou warehouse',
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
    limit: 20,
    page: 1,
    search: ''
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
    case ACTION.SEARCH_ITEM:
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
