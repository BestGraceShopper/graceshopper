import axios from 'axios'
import {runInNewContext} from 'vm'

const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'

// action creators
const getProducts = products => ({type: GET_PRODUCTS, products})
const getSingleProduct = product => ({
  type: GET_SINGLE_PRODUCT,
  product
})

// thunks
export const getAllProducts = () => async dispatch => {
  try {
    const res = await axios.get('/api/products')
    dispatch(getProducts(res.data || defaultProducts.products))
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
const defaultProducts = {products: [], singleProduct: {}}

// the reducer
export default function(state = defaultProducts, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {...state, products: action.products}
    case GET_SINGLE_PRODUCT:
      return {...state, singleProduct: action.product}
    default:
      return state
  }
}
