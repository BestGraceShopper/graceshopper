import axios from 'axios'

const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'
// const SET_QUANTITY = 'SET_QUANTITY'

const getProducts = products => ({ type: GET_PRODUCTS, products })
const getSingleProduct = product => ({ type: GET_SINGLE_PRODUCT, product })
// const setQuantity = (productId, quantity) => ({type: SET_QUANTITY, productId, quantity})

const initialState = {
  products: [],
  singleProduct: {},
  cart: [],
  orderSummary: {}
}

export const getAllProducts = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/products')
    dispatch(getProducts(data || initialState.products))
  } catch (error) {
    console.error(error)
  }
}

export const getProduct = id => async dispatch => {
  try {
    const { data } = await axios.get(`/api/products/${id}`)
    dispatch(getSingleProduct(data || 'product not found'))
  } catch (error) {
    console.error(error)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.products }
    case GET_SINGLE_PRODUCT:
      return { ...state, singleProduct: action.product }
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
