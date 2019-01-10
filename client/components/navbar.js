import React, {Component} from 'react'
import {Menu} from 'semantic-ui-react'

export default class Navbar extends Component {
  state = {activeItem: 'home'}

  handleItemClick = (evt, {name}) => this.setState({activeItem: name})

  render() {
    const {activeItem} = this.state

    return (
      <div>
        <Menu pointing>
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    )
  }
}
