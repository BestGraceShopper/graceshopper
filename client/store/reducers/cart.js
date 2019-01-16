import axios from 'axios'

const CREATE_NEW_CART = 'CREATE_NEW_CART '
const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const PURCHASE = 'PURCHASE'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

const createCart = cartData => ({ type: CREATE_NEW_CART, cartData })
const getCart = cart => ({ type: GET_CART, cart })
const addCart = newCart => ({ type: ADD_TO_CART, newCart })
const purchaseCart = cartData => ({ type: PURCHASE, cartData })
const removeCart = cart => ({ type: REMOVE_FROM_CART, cart })

const initialState = {
  cart: [],
  cartData: {},
  orderSummary: {}
}

export const createNewCart = userId => async dispatch => {
  try {
    // find and pass user ID from product list
    const { data } = await axios.post(`/api/users/${userId}/cart`)
    const cartData = data[0]
    dispatch(createCart(cartData))
  } catch (error) {
    console.error(error)
  }
}

export const getUpdatedCart = orderId => async dispatch => {
  console.log(orderId)
  try {
    const { data } = await axios.get(`/api/users/1/cart/${orderId}`)
    dispatch(getCart(data))
  } catch (error) {
    console.error(error)
  }
}

export const addToCart = addProductInfo => async dispatch => {
  console.log(addProductInfo, 'ADDPRODUCTINFO')
  const addInfoPlus = {
    productId: addProductInfo.product.id,
    orderId: addProductInfo.cartId,
    quantity: addProductInfo.quantity
  }

  try {
    // not good because hard coded
    const newCartData = await axios.post(`/api/users/1/cart`)
    console.log(newCartData)
    const dataProduct = await axios.post(
      `/api/users/1/cart/product`,
      addInfoPlus
    )

    const { data } = await axios.get(`/api/users/1/cart/${addInfoPlus.orderId}`)
    console.log(data, 'DATAAAA')
    dispatch(addCart(data))
  } catch (error) {
    console.error(error)
  }
}

export const removeFromCart = (
  productId,
  orderId,
  userId
) => async dispatch => {
  try {
    const deleted = await axios.delete(
      `/api/users/${userId}/cart/${orderId}/product/${productId}`
    )
    const { data } = await axios.get(`/api/users/${userId}/cart/${orderId}`)

    dispatch(removeCart(data))
  } catch (error) {
    console.error(error)
  }
}

export const purchaseOrder = (userId, cartData) => async dispatch => {
  try {
    const purchaseData = await axios.put(`/api/users/${userId}/cart`, cartData)
    console.log(purchaseData)
    if (purchaseData.data) {
      const { data } = await axios.post(`/api/users/${userId}/cart`)
      dispatch(purchaseCart(data))
    }
  } catch (error) {
    console.error(error)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_NEW_CART:
      return {
        ...state,
        cartData: action.cartData
      }
    case GET_CART:
      return {
        ...state,
        cart: action.cart
      }
    case ADD_TO_CART:
      return {
        ...state,
        cart: action.newCart
      }

    case PURCHASE:
      return {
        ...state,
        cart: action.cartData,
        orderSummary: { cart: state.cart, cartData: state.cartData }
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: action.cart
      }
    default:
      return state
  }
}
