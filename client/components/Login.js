import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Button, Message, Form} from 'semantic-ui-react'
import PropTypes from 'prop-types'

import {auth} from '../store'

const Login = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      <Form error onSubmit={handleSubmit} name={name}>
        <Form.Field>
          <label>Email</label>
          <input name="email" placeholder="Email" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input name="password" placeholder="Password" />
        </Form.Field>
        <Button type="submit">{displayName}</Button>
        <Message attached="bottom" warning>
          {/* <Icon name="help" /> */}
          Already signed up?&nbsp;<a href="/login">Login here</a>&nbsp;instead.
        </Message>
        <Message error>
          <Message.Header>Invalid Email or Password!</Message.Header>
        </Message>
      </Form>
      {/* <Message attached="bottom" warning>
        <Route>Already signed Up? LoginHere</Route>
      </Message> */}
    </div>
  )
}

const mapLoginToState = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignupToState = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatchToState = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const LoginForm = connect(mapLoginToState, mapDispatchToState)(Login)
export const SignupForm = connect(mapSignupToState, mapDispatchToState)(Login)

/**
 * PROP TYPES
 */
Login.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
