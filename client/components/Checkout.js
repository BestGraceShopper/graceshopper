import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Cart from './Cart'
import CustomerForm from './CustomerForm'
import { purchaseOrder } from '../store/reducers/product'

export default class Checkout extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Cart />
        </div>
        <div>
          <CustomerForm user={this.props.user} />
        </div>
      </div>
    )
  }
}
