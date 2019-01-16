import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Message } from 'semantic-ui-react'
import { purchaseOrder } from '../../store/reducers/cart'
class FormSuccess extends Component {
  constructor(props) {
    super(props)
    this.state = {
      complete: false
    }
    this.successCallback = this.successCallback.bind(this)
    this.handlePurchaseClick = this.handlePurchaseClick.bind(this)
  }

  successCallback() {
    this.setState({
      complete: true
    })
  }

  handlePurchaseClick() {
    this.props.isLoggedIn
      ? this.props.makePurchaseOrder(this.props.user.id, this.props.cartData)
      : this.props.makePurchaseOrder('guest', this.props.cart)
    // then action to actually make the purchase using Stripe
    this.successCallback()
  }

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
        {this.state.complete ? (
          <Message
            success={this.state.complete}
            header="All Set!"
            content="Your order is on the way.  Check your email for shipping details"
          />
        ) : null}

        <Button onClick={this.handlePurchaseClick}>Purchase</Button>
      </Form>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: !!state.user.user.id,
    user: state.user.user,
    products: state.product.products,
    cart: state.cart.cart,
    orderSummary: state.product.orderSummary,
    cartData: state.cart.cartData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    makePurchaseOrder: (id, cartData) => dispatch(purchaseOrder(id, cartData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormSuccess)
