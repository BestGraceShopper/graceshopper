import React from 'react'
import {Item, Image, Button, Icon, Dropdown, Menu} from 'semantic-ui-react'

const options = [
  {key: 1, text: '1', value: 1},
  {key: 2, text: '2', value: 2},
  {key: 3, text: '3', value: 3},
  {key: 4, text: '4', value: 4},
  {key: 5, text: '5', value: 5},
  {key: 6, text: '6', value: 6},
  {key: 7, text: '7', value: 7},
  {key: 8, text: '8', value: 8},
  {key: 9, text: '9', value: 9},
  {key: 10, text: '10', value: 10}
]

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
          <Menu compact floated="right">Quantity:
            <Dropdown labeled={true} defaultValue={1} options={options} simple item />
          </Menu>
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
)

export default Cart
