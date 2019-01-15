import React from 'react'
import { Item, Dropdown, Menu, Button } from 'semantic-ui-react'

export default class CartItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subtotal: this.props.product.price
    }
    this.getQuantity = this.getQuantity.bind(this)
  }

  async getQuantity(evt, { value }) {
    evt.preventDefault()
    const subtotal = this.props.product.price * value
    await this.setState({ subtotal: subtotal })
  }

  render() {
    const options = quant => {
      let arr = []
      let i
      if (quant >= 10) {
        i = quant - 5
      } else {
        i = 0
      }
      for (i; i <= quant + 5; i++) {
        arr.push({ key: i, text: i, value: i })
      }
      return arr
    }

    const { product, removeFromCart } = this.props

    return (
      <Item>
        <Item.Image src={product.imageUrl} />
        <Item.Content>
          <Item.Header>{product.name}</Item.Header>
          <Item.Meta>${product.price}</Item.Meta>
          <Item.Meta> Quantity: {product.quantity}</Item.Meta>
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
                defaultValue={product.quantity}
                options={options(product.quantity)}
                onChange={this.getQuantity}
                simple
                item
              />
            </Menu>
          </Item.Extra>
          <Item.Extra>total for this item: ${this.state.subtotal}</Item.Extra>
        </Item.Content>
      </Item>
    )
  }
}
