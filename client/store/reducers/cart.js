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
    const { data } = await axios.put(`/api/users/${userId}/cart`, cart)
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
      console.log(state, 'STATECART')
      // const index = state.cart.findIndex((product, idx) => {
      //   if (product.id === action.product.id) {
      //     console.log('thingsstates')
      //     return idx
      //   }
      // })
      console.log(index)
      console.log(state.cart)

      // try for loop

      if (index >= 0) {
        const newState = { ...state }
        newState.cart[index].quantity += 1
        console.log(newState, 'NEWSTATE')
        return newState
      }

      if (index === false) {
        console.log(typeof action.product.quantity)
        action.product.quantity = 1
        return { ...state, cart: [...state.cart, action.product] }
      }
    // if (index === -1) {
    //   action.product.quantity = 1
    //   return { ...state, cart: [...state.cart, action.product] }
    // } else {
    //   const newState = { ...state }
    //   newState.cart[index].quantity = state.cart[index].quantity += 1
    //   return newState
    // }

    case PURCHASE:
      return {
        ...state,
        cart: [],
        orderSummary: action.orderSummary
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.productId)
      }
    default:
      return state
  }
}
