import React, { Component } from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { me } from './store'

import Cart from './components/Cart'
import SingleProduct from './components/SingleProduct'
import ProductList from './components/ProductList'
import { LoginForm, SignupForm } from './components/Login'

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const { isLoggedIn } = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
        {/* {isLoggedIn && ( */}
        {/* <Switch> */}
        {/* Routes placed here are only available after logging in */}
        <Route exact path="/products" component={ProductList} />
        <Route path="/cart" component={Cart} />
        <Route path="/products/:id" component={SingleProduct} />
        {/* </Switch> */}
        )}
        {/* Displays our Login component as a fallback */}
        {/* <Route component={Login} /> */}
      </Switch>
    )
  }
}

const mapStateToProps = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
