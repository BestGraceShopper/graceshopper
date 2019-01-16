import React from 'react'
import { Item, Button, Divider } from 'semantic-ui-react'
import CartItem from './CartItem'
import { connect } from 'react-redux'
import { getProduct } from '../../store/reducers/product'
import {
  removeFromCart,
  getUpdatedCart,
  createNewCart
} from '../../store/reducers/cart'
import { Link } from 'react-router-dom'

class Cart extends React.Component {
  // componentDidMount() {
  //   const userId = this.props.user.id
  //   this.props.fetchCreateNewCart(userId)
  // }

  handleRemoveFromCart(id) {
    console.log(this.props)
    // const orderId = this.props.cartData.id
    const orderId = 1
    const userId = this.props.user.id

    this.props.removeFromCart(id, orderId, userId)
  }

  render() {
    const { cart } = this.props
    console.log(cart, 'CARTTTT')
    return (
      <div>
        <div>
          <Item.Group className="cartProducts">
            {cart.map((item, idx) => (
              <CartItem
                product={item.product}
                quantity={item.quantity}
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
    user: state.user.user,
    cartData: state.cart.cartData
  }
}

const mapDispatch = dispatch => {
  return {
    fetchCreateNewCart: userId => {
      dispatch(createNewCart(userId))
    },
    fetchUpdatedCart: (userId, orderId) => {
      dispatch(getUpdatedCart(userId, orderId))
    },
    fetchSingleProduct: id => {
      dispatch(getProduct(id))
    },
    removeFromCart: (id, orderId, userId) => {
      dispatch(removeFromCart(id, orderId, userId))
    }
  }
}

const connectedCart = connect(mapState, mapDispatch)(Cart)
export default connectedCart
