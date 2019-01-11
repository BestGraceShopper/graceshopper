import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Routes from './routes'

class App extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    console.log(this.props)
    const { activeItem } = this.state

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
            {this.props.status === 'Logged Out' ? (
              <Menu.Item
                as={Link}
                to="/login"
                name="Log In"
                icon="user outline"
                active={activeItem === 'user'}
                onClick={this.handleItemClick}
              />
            ) : (
              <Menu.Item
                as={Link}
                to="/home"
                name="User Profile"
                icon="user"
                active={activeItem === 'user'}
                onClick={this.handleItemClick}
              />
            )}
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

const mapStateToProps = state => {
  return {
    status: state.user.status
  }
}

export default connect(mapStateToProps)(App)
