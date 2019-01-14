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
    const options = () => {
      let arr = []
      for (let i = 1; i <= 10; i++) {
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
                defaultValue={1}
                options={options()}
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
