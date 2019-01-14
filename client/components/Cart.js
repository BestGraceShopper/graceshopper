import React from 'react'
import { Item, Button, Divider } from 'semantic-ui-react'
import CartItem from './CartItem'
import { connect } from 'react-redux'
import { getProduct } from '../store/reducers/product'
import { Link } from 'react-router-dom'

class Cart extends React.Component {
  // the below is an attempt to tally total pricing on the cart

  // constructor() {
  //   super()
  //   this.state = {
  //     cartSubtotal: 0
  //   }
  // }

  // componentDidMount() {
  //   this.setState({ cartSubtotal: CartItem.subtotal })
  // }

  render() {
    const { cart } = this.props
    return (
      <div>
        <div>
          <Item.Group>
            {cart.map((item, idx) => (
              <CartItem
                product={item}
                key={idx}
                // subtotal={item.state.subtotal}
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
    cart: state.product.cart,
    user: state.user.user
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
