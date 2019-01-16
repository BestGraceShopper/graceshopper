import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Item, Dropdown, Menu, Button } from 'semantic-ui-react'

import { addToCart, createNewCart } from '../../store/reducers/cart'

class CartItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subtotal: 0
    }
  }

  componentDidMount() {
    let subtotal = this.props.quantity * this.props.product.price
    this.setState({ subtotal })
  }
  // componentDidUpdate() {
  //   let subtotal = this.props.quantity * this.props.product.price
  //   this.setState({ subtotal })
  // }
  setQuantity = (evt, { value }) => {
    evt.preventDefault()
    console.log(this.props)
    const addProductInfo = {
      product: this.props.product,
      quantity: value,
      // HARDCODED ORDERID RIGHT HERE, NEED TO ACCESS
      cartId: 1
    }
    this.props.addToCart(addProductInfo)
  }

  render() {
    const options = quant => {
      let arr = []
      let i
      if (quant >= 10) {
        i = quant - 5
      } else {
        i = 1
      }
      for (i; i <= 10; i++) {
        arr.push({ key: i, text: i, value: i })
      }
      return arr
    }

    const { product, quantity, removeFromCart } = this.props
    console.log(this.props)
    return (
      <Item>
        <Item.Image src={product.imageUrl} />
        <Item.Content>
          <Item.Header>{product.name}</Item.Header>
          <Item.Meta>${product.price}</Item.Meta>
          <Item.Meta> Quantity: {quantity}</Item.Meta>
          <Item.Description>
            <span>{product.description}</span>
          </Item.Description>
          <Item.Extra>
            <Button onClick={() => removeFromCart(product.id)}>
              Remove from Cart
            </Button>
            <Menu compact floated="right">
              <Dropdown
                labeled={true}
                defaultValue={quantity}
                options={options(quantity)}
                onChange={this.setQuantity}
                simple
                item
              />
            </Menu>
          </Item.Extra>
        </Item.Content>
      </Item>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.product.products,
    cart: state.cart.cart,
    cartData: state.cart.cartData,
    user: state.user.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllProducts: () => dispatch(getAllProducts()),
    createNewCart: () => dispatch(createNewCart()),
    addToCart: product => dispatch(addToCart(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
