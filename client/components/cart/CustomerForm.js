import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'

class FormSuccess extends Component {
  render() {
    const { isLoggedIn, user } = this.props
    return (
      <Form success>
        <Form.Input
          label="First Name"
          placeholder={
            isLoggedIn ? user.firstName || 'first name' : 'first name'
          }
        />
        <Form.Input
          label="Last Name"
          placeholder={isLoggedIn ? user.lastName || 'last name' : 'last name'}
        />
        <Form.Input
          label="Address"
          placeholder={
            isLoggedIn ? user.address || '1234 Main street' : '1234 Main street'
          }
        />
      </Form>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    isLoggedIn: !!state.user.user.id,
    products: state.product.products,
    cart: state.cart.cart,
    orderSummary: state.product.orderSummary,
    cartData: state.cart.cartData
  }
}

export default connect(mapStateToProps)(FormSuccess)
