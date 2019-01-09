import axios from 'axios'

const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'
const ADD_TO_CART = 'ADD_TO_CART'
// const SET_QUANTITY = 'SET_QUANTITY'

// action creators
const getProducts = products => ({type: GET_PRODUCTS, products})
const getSingleProduct = product => ({type: GET_SINGLE_PRODUCT, product})
const addCart = product => ({type: ADD_TO_CART, product})
// const setQuantity = (productId, quantity) => ({type: SET_QUANTITY, productId, quantity})

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

export const addToCart = product => dispatch => {
  try {
    dispatch(addCart(product))
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
      action.product.quantity = 1
      return {...state, cart: [...state.cart, action.product]}
    // case SET_QUANTITY:
    //   products = state.products.map(product => {
    //     if(product.id === action.productId)
    //       return {...product, quantity: action.quantity}
    //     else return product
    //   })
    //   return {...state, product}
    default:
      return state
  }
}
