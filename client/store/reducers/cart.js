import axios from 'axios'

const ADD_TO_CART = 'ADD_TO_CART'
const PURCHASE = 'PURCHASE'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

const addCart = product => ({ type: ADD_TO_CART, product })
const purchaseCart = orderSummary => ({ type: PURCHASE, orderSummary })
const removeCart = productId => ({ type: REMOVE_FROM_CART, productId })

const initialState = {
  cart: [],
  orderSummary: {}
}

export const addToCart = product => dispatch => {
  try {
    dispatch(addCart(product))
  } catch (error) {
    console.error(error)
  }
}

export const purchaseOrder = (userId, cart) => async dispatch => {
  try {
    const { data } = await axios.put(`/api/user/${userId}/cart`, cart)
    dispatch(purchaseCart(data))
  } catch (error) {
    console.error(error)
  }
}

export const removeFromCart = productId => dispatch => {
  try {
    dispatch(removeCart(productId))
  } catch (error) {
    console.error(error)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      action.product.quantity = 1
      return { ...state, cart: [...state.cart, action.product] }
    case PURCHASE:
      return { ...state, cart: [], orderSummary: action.orderSummary }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.productId)
      }
    default:
      return state
  }
}
