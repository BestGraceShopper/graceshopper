import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Switch } from 'react-router-dom'
import {
  Button,
  Form,
  Divider,
  Grid,
  Segment,
  Modal,
  Header
} from 'semantic-ui-react'
import PropTypes from 'prop-types'

import { author } from '../../store'

class Login extends React.Component {
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { name, displayName, handleSubmit, status, error } = this.props
    const { open, dimmer } = this.state
    return (
      <Segment placeholder>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <Form name="login" onSubmit={handleSubmit}>
              <Form.Input
                icon="user"
                iconPosition="left"
                label="Email"
                placeholder="Email"
                name="email"
              />
              <Form.Input
                icon="lock"
                iconPosition="left"
                label="Password"
                type="password"
                name="password"
              />

              <Button content="Login" primary type="submit" />
            </Form>
          </Grid.Column>

          <Grid.Column verticalAlign="middle">
            <Button
              content="Sign Up"
              icon="signup"
              size="big"
              onClick={this.show(true)}
            />
          </Grid.Column>
        </Grid>
        <Divider vertical>Or</Divider>

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Signup</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Form name="signup" onSubmit={handleSubmit}>
                <Form.Input
                  icon="user"
                  iconPosition="left"
                  label="Email"
                  name="email"
                />
                <Form.Input
                  icon="lock"
                  type="password"
                  iconPosition="left"
                  label="Password"
                  name="password"
                />
                <Button content="Sign Up" primary type="submit" />
              </Form>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </Segment>
    )
  }
}

const mapLoginToState = state => {
  return {
    name: 'login',
    displayName: 'Login',
    status: state.user.status,
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
      dispatch(author(email, password, formName))
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
