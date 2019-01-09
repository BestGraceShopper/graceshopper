import React from 'react'
import {Item, Dropdown, Menu} from 'semantic-ui-react'

const CartItem = props => (
    <Item>
      <Item.Image src={props.product.imageUrl} />
      <Item.Content>
        <Item.Header>{props.product.name}</Item.Header>
        <Item.Meta>{props.product.price}</Item.Meta>
        <Item.Description>
          <span>{props.product.description}</span>
        </Item.Description>
        <Item.Extra>
          <a href="">Remove from Cart</a>
          <Menu compact floated="right">

            <Dropdown
              labeled={true}
              defaultValue={1}
              options={options()}
              simple
              item
            />
          </Menu>
        </Item.Extra>
      </Item.Content>
    </Item>
)

const options = () => {
  let arr = []
  for (let i = 1; i <= 10; i++) {
    arr.push({key: i, text: i, value: i})
  }
  return arr
}

export default CartItem