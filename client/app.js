import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

import Routes from './routes'
import Navbar from './components/Navbar'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar login={false} />
        <Segment>
          <Routes />
        </Segment>
      </div>
    )
  }
}
