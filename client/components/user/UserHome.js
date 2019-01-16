import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  Header,
  Icon,
  Container,
  Divider,
  List,
  Button,
  Grid,
  GridColumn,
  Table
} from 'semantic-ui-react'
import UserInfo from './UserInfo'

import { getUpdatedUser } from '../../store/reducers/user'

class UserHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      phone: '',
      formBool: true
    }
    this._onChange = this._onChange.bind(this)
    this._onSubmit = this._onSubmit.bind(this)
    this.userInfoEditHandler = this.userInfoEditHandler.bind(this)
    this.userInfoSaveHandler = this.userInfoSaveHandler.bind(this)
  }

  _onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  _onSubmit = event => {
    event.preventDefault()
    const updatedUserInfo = this.state
    const id = 1
    this.props.fetchUpdatedUser(updatedUserInfo, id)
  }

  userInfoEditHandler() {
    if (this.state.formBool === true) {
      this.setState({ formBool: false })
    } else if (this.state.formBool === false) {
      this.setState({ formBool: true })
    }
  }
  userInfoSaveHandler() {
    event.preventDefault()
    if (this.state.formBool === true) {
      this.setState({ formBool: false })
    } else if (this.state.formBool === false) {
      this.setState({ formBool: true })
    }
    const updatedUserInfo = this.state
    const id = 1
    this.props.fetchUpdatedUser(updatedUserInfo, id)
  }

  render() {
    return (
      <div>
        <Header as="h2">Welcome, {this.state.firstName}</Header>
        <Divider fitted />
        <React.Fragment>
          <Divider horizontal>
            <Header as="h4">
              <Icon name="settings" />
              Account Information
            </Header>
          </Divider>
        </React.Fragment>
        <Container floated="center">
          <UserInfo
            formBool={this.state.formBool}
            user={this.state}
            _onChange={this._onChange}
            _onSubmit={this._onSubmit}
            userInfoEditHandler={this.userInfoEditHandler}
            userInfoSaveHandler={this.userInfoSaveHandler}
          />
        </Container>

        <Divider fitted section />

        <React.Fragment>
          <Divider horizontal>
            <Header as="h4">
              <Icon name="th list" />
              Order History
            </Header>
          </Divider>
        </React.Fragment>
        <Container>
          <Table singleLine selectable striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Order ID</Table.HeaderCell>
                <Table.HeaderCell>Order Date</Table.HeaderCell>
                <Table.HeaderCell>Total Price</Table.HeaderCell>
                <Table.HeaderCell>Order Status</Table.HeaderCell>
                <Table.HeaderCell>Order Details</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            {/* <Table.Body>
              {this.state.orders.map(order => {
                return (
                  <Table.Row key={order.orderId}>
                    <Table.Cell>{order.orderId}</Table.Cell>
                    <Table.Cell>{order.orderDate}</Table.Cell>
                    <Table.Cell>{order.orderPrice}</Table.Cell>
                    <Table.Cell>{order.orderStatus}</Table.Cell>
                    <Table.Cell>
                      <React.Fragment>
                        <Button>View Details</Button>
                      </React.Fragment>
                    </Table.Cell>
                  </Table.Row>
                )
              })}
            </Table.Body> */}
          </Table>
        </Container>
        <Divider section hidden />
      </div>
    )
  }
}

const mapState = state => {
  return {
    cart: state.cart.cart,
    user: state.user.user,
    cartData: state.cart.cartData
  }
}

const mapDispatch = dispatch => {
  return {
    fetchUpdatedUser: (userInfo, userId) => {
      dispatch(getUpdatedUser(userInfo, userId))
    }
  }
}

export default connect(mapState, mapDispatch)(UserHome)
