import React from 'react'
import { Item, Image, Button, Icon, Dropdown, Menu } from 'semantic-ui-react'

const options = () => {
  let arr = []
  for (let i = 1; i <= 10; i++) {
    arr.push({ key: i, text: i, value: i })
  }
  return arr
}

const Cart = props => (
  <Item.Group>
    <Item>
      <Item.Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
      <Item.Content>
        <Item.Header>Item Name</Item.Header>
        <Item.Meta>$3050.00</Item.Meta>
        <Item.Description>
          <span>Description........</span>
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
  </Item.Group>
)

export default Cart
