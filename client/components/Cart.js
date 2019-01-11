import React from 'react'
import { Item, Button, Divider } from 'semantic-ui-react'
import CartItem from './CartItem'
import { connect } from 'react-redux'
import { getProduct } from '../store/reducers/product'
import { Link } from 'react-router-dom'

class Cart extends React.Component {
  render() {
    const { cart } = this.props
    return (
      <div>
        <div>
          <Item.Group>
            {cart.map((item, idx) => <CartItem product={item} key={idx} />)}
          </Item.Group>
        </div>
        <Divider />
        <div>
          <Button
            as={Link}
            to="/checkout"
            name="checkout"
            onClick={this.handleItemClick}
          >
            Checkout
          </Button>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    cart: state.product.cart
  }
}

const mapDispatch = dispatch => {
  return {
    fetchSingleProduct: id => {
      dispatch(getProduct(id))
    }
  }
}

const connectedCart = connect(mapState, mapDispatch)(Cart)
export default connectedCart
