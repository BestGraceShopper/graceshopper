import React, { Component } from 'react'
import { Button, Form, Message } from 'semantic-ui-react'

export default class FormSuccess extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
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
    this.successCallback()
    // then action to actually make the purchase using Stripe
  }

  render() {
    const { user } = this.props
    return (
      <Form success>
        <Form.Input
          label="First Name"
          placeholder={user ? user.user.firstName : 'first name'}
        />
        <Form.Input
          label="Last Name"
          placeholder={user ? user.user.lastName : 'last name'}
        />
        <Form.Input
          label="Address"
          placeholder={
            user ? user.user.address || '1234 Main street' : '1234 Main street'
          }
        />
        {this.state.complete ? (
          <Message
            success={this.state.complete} // <-- is this redundant?
            header="All Set!"
            content="Your order is on the way.  Check your email for shipping details"
          />
        ) : null}

        <Button onClick={this.handlePurchaseClick}>Purchase</Button>
      </Form>
    )
  }
}
