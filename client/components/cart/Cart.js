import React from 'react'
import { Item, Button, Divider } from 'semantic-ui-react'
import CartItem from './CartItem'
import { connect } from 'react-redux'
import { getProduct } from '../../store/reducers/product'
import { removeFromCart } from '../../store/reducers/cart'
import { Link } from 'react-router-dom'

class Cart extends React.Component {
  handleRemoveFromCart(id) {
    this.props.removeFromCart(id)
  }

  render() {
    const { cart } = this.props
    return (
      <div>
        <div>
          <Item.Group className="cartProducts">
            {cart.map((item, idx) => (
              <CartItem
                product={item}
                key={idx}
                removeFromCart={this.handleRemoveFromCart.bind(this)}
              />
            ))}
          </Item.Group>
        </div>
        <Divider />
        <div>
          <h3 position="right">Total Price: {`$1,000,000`}</h3>
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
    cart: state.cart.cart,
    user: state.user.user
  }
}

const mapDispatch = dispatch => {
  return {
    fetchSingleProduct: id => {
      dispatch(getProduct(id))
    },
    removeFromCart: id => {
      dispatch(removeFromCart(id))
    }
  }
}

const connectedCart = connect(mapState, mapDispatch)(Cart)
export default connectedCart
