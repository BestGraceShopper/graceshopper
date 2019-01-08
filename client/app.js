import React, { Component } from 'react'
import { Input, Menu, Segment} from 'semantic-ui-react'
import Routes from './routes'
import ProductCard from './components/productCard'

export default class App extends Component {
  state = {activeItem: 'home'}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const { activeItem } = this.state

    return(
      <div>
        <Menu pointing>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item position='right' name='cart' active={activeItem === 'cart'} onClick={this.handleItemClick} />
          
        </Menu>
        <Segment>
          <ProductCard/>
           {/* <Routes /> */}
        </Segment>
      </div>

    )
  }
}