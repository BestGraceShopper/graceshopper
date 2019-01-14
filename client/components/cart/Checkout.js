import React from 'react'
import CustomerForm from './CustomerForm'
import Cart from './Cart'

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
