import axios from 'axios'

const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'
const ADD_TO_CART = 'ADD_TO_CART'

// action creators
const getProducts = products => ({type: GET_PRODUCTS, products})
const getSingleProduct = product => ({type: GET_SINGLE_PRODUCT, product})
const addCart = productId => ({type: ADD_TO_CART, productId})

const initialState = {products: [], singleProduct: {}, cart: []}

// thunks
export const getAllProducts = () => async dispatch => {
  try {
    const res = await axios.get('/api/products')
    dispatch(getProducts(res.data || initialState.products))
  } catch (error) {
    console.error(error)
  }
}

export const getProduct = id => async dispatch => {
  try {
    const res = await axios.get(`/api/products/${id}`)
    dispatch(getSingleProduct(res.data || 'product not found'))
  } catch (error) {
    console.error(error)
  }
}

export const addToCart = productId => dispatch => {
  try {
    dispatch(addCart(productId))
  } catch (error) {
    console.error(error)
  }
}
// the reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {...state, products: action.products}
    case GET_SINGLE_PRODUCT:
      return {...state, singleProduct: action.product}
    case ADD_TO_CART:
      return {...state, cart: [...state.cart, action.productId]}
    default:
      return state
  }
}
