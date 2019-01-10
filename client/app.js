import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Menu, Segment, Container} from 'semantic-ui-react'

import Routes from './routes'

export default class App extends Component {
  state = {activeItem: 'home'}

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render() {
    const {activeItem} = this.state

    return (
      <div>
        <Menu pointing>
          <Menu.Item
            as={Link}
            to="/home"
            name="home"
            icon="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/products"
            name="products"
            icon="child"
            active={activeItem === 'products'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item
              as={Link}
              to="/login"
              name="Log In"
              icon="user outline"
              active={activeItem === 'user'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link}
              to="/home"
              name="User Profile"
              icon="user"
              active={activeItem === 'user'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link}
              to="/cart"
              name="cart"
              icon="shopping cart"
              active={activeItem === 'cart'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
        <Segment>
          <Routes />
        </Segment>
      </div>
    )
  }
}
