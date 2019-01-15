'use strict'

import React from 'react'
import { expect } from 'chai'
const chai = require('chai')
import enzyme, { shallow } from 'enzyme'

// Assertions

// components
import ProductCard, { Card } from './ProductCard'
import Adapter from 'enzyme-adapter-react-16'
enzyme.configure({ adapter: new Adapter() })

describe('<ProductCard />', () => {
  it('renders an <Image /> component', () => {
    const wrapper = shallow(<ProductCard />)
    expect(wrapper.find('Image')).to.have.lengthOf(1)
  })
})
