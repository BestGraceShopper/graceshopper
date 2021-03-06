import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { me, logout } from '../store/reducers/user'

class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (evt, { name }) => this.setState({ activeItem: name })

  handleLogOut() {
    this.props.logout()
  }

  render() {
    const { activeItem } = this.state
    const { login } = this.props
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
            {login ? (
              <Menu.Item
                as={Link}
                to="/login"
                name="Login"
                icon="user"
                active={activeItem === 'Login'}
                onClick={this.handleItemClick}
              />
            ) : (
              <Menu.Item
                as={Link}
                to="/userhome"
                name="User Profile"
                icon="user outline"
                active={activeItem === 'Login'}
                onClick={this.handleItemClick}
              />
            )}
            {!login ? (
              <Menu.Item
                name="Logout"
                icon="remove user"
                onClick={this.handleLogOut.bind(this)}
              />
            ) : null}

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
      </div>
    )
  }
}

const mapPropsToState = state => {
  return {
    user: state.user,
    login: state.user.login
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

const connectedNavBar = connect(mapPropsToState, mapDispatchToProps)(Navbar)
export default connectedNavBar
