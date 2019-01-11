import React from 'react'
import { Button, Form, Message } from 'semantic-ui-react'

const FormExampleSuccess = () => (
  <Form success>
    <Form.Input label="First Name" placeholder="first name" />
    <Form.Input label="Last Name" placeholder="last name" />
    <Form.Input label="Address" placeholder="1234 Main street" />

    <Message
      success
      header="All Set!"
      content="Your order is on the way.  Check your email for shipping details"
    />
    <Button>Submit</Button>
  </Form>
)

export default FormExampleSuccess
