import React, { Component } from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { me } from './store'

import Cart from './components/cart/Cart'
import SingleProduct from './components/product/SingleProduct'
import ProductList from './components/product/ProductList'
import { LoginForm, SignupForm } from './components/user/Login'
import userHome from './components/user/UserHome'
import Checkout from './components/cart/Checkout'
import Homepage from './components/Homepage'

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/home" component={Homepage} />
      <Route path="/" redirect="/home" />
        {/* {isLoggedIn && ( */}
        {/* <Switch> */}
        {/* Routes placed here are only available after logging in */}
        <Route exact path="/products" component={ProductList} />
        <Route path="/cart" component={Cart} />
        <Route path="/products/:id" component={SingleProduct} />
        <Route path="/userhome" component={userHome} />
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
    isLoggedIn: !!state.user.user.id,
    user: state.user.user,
    products: state.product.products,
    singleProduct: state.product.singleProduct,
    cart: state.product.cart,
    orderSummary: state.product.orderSummary
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
