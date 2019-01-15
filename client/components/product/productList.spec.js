import { expect } from 'chai'
import React from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ProductList from './ProductList'
import productReducer from '../../store/reducers/product'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'

enzyme.configure({ adapter: new Adapter() })

const initialState = {
  products: [],
  singleProduct: {},
  cart: [],
  orderSummary: {}
}

const dummyProducts = [
  {
    id: 1,
    name: 'Diaper Loading Onesie',
    description: 'Full diaper imminent.',
    imageUrl: 'https://i.ebayimg.com/images/g/pwIAAOSwx2dYGWq0/s-l300.jpg',
    price: 199,
    inventory: 15,
    createdAt: '2019-01-15T16:19:30.278Z',
    updatedAt: '2019-01-15T16:19:30.278Z'
  },
  {
    id: 3,
    name: 'Baby Duckie Bibs',
    description: 'Quack Quack for a baby duckling',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/61h%2BvoKhdJL._SL1000_.jpg',
    price: 10,
    inventory: 15,
    createdAt: '2019-01-15T16:19:30.278Z',
    updatedAt: '2019-01-15T16:19:30.278Z'
  },
  {
    id: 2,
    name: 'Baby Blue sock',
    description: "It's a sock. For your baby. Note: Only includes one sock.",
    imageUrl:
      'https://assets.marthastewart.com/styles/wmax-570/d15/blue-baby-socks/blue-baby-socks_0_sq.jpg?itok=4TgWrMi3',
    price: 30,
    inventory: 20,
    createdAt: '2019-01-15T16:19:30.277Z',
    updatedAt: '2019-01-15T16:19:30.277Z'
  }
]

const dummyProduct = {
  id: 2,
  name: 'Baby Blue sock',
  description: "It's a sock. For your baby. Note: Only includes one sock.",
  imageUrl:
    'https://assets.marthastewart.com/styles/wmax-570/d15/blue-baby-socks/blue-baby-socks_0_sq.jpg?itok=4TgWrMi3',
  price: 30,
  inventory: 20,
  createdAt: '2019-01-15T16:19:30.277Z',
  updatedAt: '2019-01-15T16:19:30.277Z'
}

const mockStore = configureMockStore()
const store = mockStore({})

describe('product reducer', () => {
  it('Should return the initial state', () => {
    expect(productReducer(undefined, {})).to.deep.equal(initialState)
  })

  describe('async actions', () => {
    it('Load an array of products onto state', () => {
      const newState = productReducer(initialState, {
        type: 'GET_PRODUCTS',
        products: dummyProducts
      })
      expect(newState.products).to.deep.equal(dummyProducts)
    })

    it('Loads a single product onto state', () => {
      const newState = productReducer(initialState, {
        type: 'GET_SINGLE_PRODUCT',
        product: dummyProduct
      })
      expect(newState.singleProduct).to.deep.equal(dummyProduct)
    })
  })
})
