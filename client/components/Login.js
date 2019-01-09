import React from 'react'
import {Button, Checkbox, Form} from 'semantic-ui-react'

const Login = props => {
  const {name, displayName, handleSubmit, error} = props
  return (
    <div>
      <Form onSubmit={handleSubmit} name={name}>
        <Form.Field>
          <label>Email</label>
          <input placeholder="Email" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Password" />
        </Form.Field>
        <Button type="submit">Login</Button>
      </Form>
    </div>
  )
}

export default Login
