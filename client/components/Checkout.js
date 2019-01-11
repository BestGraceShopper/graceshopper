import React from 'react'
import { Item } from 'semantic-ui-react'
import CartItem from './CartItem'
import Cart from './Cart'
import CustomerForm from './CustomerForm'
import { connect } from 'react-redux'
// import { "cartReducerGoesHere" } from '../store/reducers/product'

export default class Checkout extends React.Component {
  render() {
    // const { item } = this.props
    return (
      <div>
        <div>
          <Cart />
        </div>
        <div>
          <CustomerForm />
        </div>
      </div>
    )
  }
}
