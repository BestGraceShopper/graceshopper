import React, {Component} from 'react'
import {Menu, Segment} from 'semantic-ui-react'
import Routes from './routes'
import {Link} from 'react-router-dom'

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
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/products"
            name="products"
            active={activeItem === 'products'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/cart"
            position="right"
            name="cart"
            active={activeItem === 'cart'}
            onClick={this.handleItemClick}
          />
        </Menu>
        <Segment>
          <Routes />
        </Segment>
      </div>
    )
  }
}
