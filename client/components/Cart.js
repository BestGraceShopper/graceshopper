import React from 'react'
import {Item} from 'semantic-ui-react'
import CartItem from './CartItem'
import {connect} from 'react-redux'
import {getProduct} from '../store/reducers/product'

class Cart extends React.Component {

  render() {
    const {cart} = this.props
    return (
      <div>
        <Item.Group>
          {cart.map((item, idx) => (
             <CartItem product={item} key={idx}/>
          ))}
        </Item.Group>
      </div>
    )
  }
}

const mapState = state => {
  return {
    cart: state.product.cart
  }
}

const mapDispatch= dispatch => {
  return {
    fetchSingleProduct: id => {
      dispatch(getProduct(id))
    }
  }
}

const connectedCart = connect(mapState, mapDispatch)(Cart)
export default connectedCart
