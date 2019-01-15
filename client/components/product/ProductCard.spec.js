'use strict'

import React from 'react'
import Provider from 'react-redux'
import { expect } from 'chai'
const chai = require('chai')
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
enzyme.configure({ adapter: new Adapter() })
import configureMockStore from 'redux-mock-store'

// components
import ProductCard, { Card, Image, Icon, Button } from './ProductCard'

const mockStore = configureMockStore()
const store = mockStore({})
const dummyProduct = {
  name: 'Diaper Loading Onesie',
  description: 'Full diaper imminent.',
  imageUrl: 'https://i.ebayimg.com/images/g/pwIAAOSwx2dYGWq0/s-l300.jpg',
  price: 199,
  inventory: 15
}

describe('<ProductCard />', () => {
  it('renders an image of the product', () => {
    const wrapper = shallow(<ProductCard product={dummyProduct} />)
    expect(wrapper.find('Image')).to.have.lengthOf(1)
  })

  it('displays the product name', () => {
    const wrapper = shallow(<ProductCard product={dummyProduct} />)
    expect(wrapper.find('Card.Header')).to.have.lengthOf(1)
  })

  // it('displays the product price', () => {
  //   const wrapper = shallow(<ProductCard />)
  //   expect(wrapper.find('props.product.price')).to.have.lengthOf(1)
  // })
})
