import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Item} from 'semantic-ui-react'

import CartItem from './CartItem'
import {getProduct} from '../store/reducers/product'

class Cart extends Component {
  render() {
    const {cart} = this.props
    return (
      <div>
        <Item.Group>
          {cart.map((item, idx) => <CartItem product={item} key={idx} />)}
        </Item.Group>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.product.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleProduct: id => {
      dispatch(getProduct(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
