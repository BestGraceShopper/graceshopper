import React from 'react'
import { Elements, StripeProvider } from 'react-stripe-elements'
import CheckoutWithStripe from './CheckoutWithStripe'

import CustomerForm from './CustomerForm'
import Cart from './Cart'

export default class Checkout extends React.Component {
  render() {
    return (
      <div className="checkout">
        <div>
          <Cart />
        </div>
        <div>
          <CustomerForm user={this.props.user} />
        </div>
        <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
          <div>
            <Elements>
              <CheckoutWithStripe user={this.props.user} />
            </Elements>
          </div>
        </StripeProvider>
      </div>
    )
  }
}
