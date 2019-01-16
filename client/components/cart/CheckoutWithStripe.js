import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CardElement, injectStripe } from 'react-stripe-elements'
import { Message } from 'semantic-ui-react'
import { purchaseOrder } from '../../store/reducers/cart'

class CheckoutWithStripe extends Component {
  constructor(props) {
    super(props)
    this.state = { complete: false }
    this.submit = this.submit.bind(this)

    this.successCallback = this.successCallback.bind(this)
  }

  successCallback() {
    this.setState({
      complete: true
    })
  }

  async submit(ev) {
    ev.preventDefault()
    // User clicked submit (if we had more time, make this a thunk in our reducers)
    try {
      let { token } = await this.props.stripe.createToken({ name: 'Name' })
      let response = await fetch(
        `/api/users/${this.props.user.id}/cart/charge`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain' },
          body: token.id
        }
      )
      if (response.ok) {
        this.successCallback()
        // this.props.isLoggedIn
        //   ? this.props.makePurchaseOrder(this.props.user.id, this.props.cart)
        //   : this.props.makePurchaseOrder('guest', this.props.cart)
      }
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete!</h1>
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button type="submit" onClick={this.submit}>
          Complete Purchase
        </button>
        {this.state.complete ? (
          <Message
            success={this.state.complete}
            header="All Set!"
            content="Your order is on the way.  Check your email for shipping details"
          />
        ) : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    isLoggedIn: !!state.user.user.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    makePurchaseOrder: (id, cart) => dispatch(purchaseOrder(id, cart))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  injectStripe(CheckoutWithStripe)
)
