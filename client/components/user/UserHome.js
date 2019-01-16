import React, { Component } from 'react'
import {
  Header,
  Icon,
  Container,
  Divider,
  Button,
  Table
} from 'semantic-ui-react'
import { connect } from 'react-redux'
import UserInfo from './UserInfo'

import { getUpdatedUser } from '../../store/reducers/user'

class UserHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: this.props.user.firstName,
      lastName: this.props.user.lastName,
      address: this.props.user.address,
      email: this.props.user.email,
      phone: this.props.user.phone,
      formBool: true,
      orders: [
        {
          orderId: 1,
          orderDate: 'January 5th, 2019',
          orderPrice: '$74.99',
          orderStatus: 'Completed'
        },
        {
          orderId: 2,
          orderDate: 'January 6th, 2019',
          orderPrice: '$99.99',
          orderStatus: 'Completed'
        },
        {
          orderId: 3,
          orderDate: 'January 10th, 2019',
          orderPrice: '$250.00',
          orderStatus: 'Shipped'
        },
        {
          orderId: 4,
          orderDate: 'January 15th, 2019',
          orderPrice: '$47.99',
          orderStatus: 'Future'
        },
        {
          orderId: 5,
          orderDate: 'January 3rd, 2019',
          orderPrice: '$19.99',
          orderStatus: 'Shipped'
        },
        {
          orderId: 6,
          orderDate: 'January 11th, 2019',
          orderPrice: '$25.89',
          orderStatus: 'Pending'
        }
      ]
    }
    this._onChange = this._onChange.bind(this)
    this._onSubmit = this._onSubmit.bind(this)
    this.userInfoEditHandler = this.userInfoEditHandler.bind(this)
    this.userInfoSaveHandler = this.userInfoSaveHandler.bind(this)
  }

  _onChange(event) {
    console.log(event.target.name)
    console.log(event.target.value)
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
    this.setState({ firstName: updatedUserInfo })
    const id = 1
    this.props.fetchUpdatedUser(updatedUserInfo, id)
  }

  render() {
    const { user } = this.props
    console.log(this.props)
    return (
      <div>
        <Header as="h2">Welcome</Header>
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
            user={user}
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
            <Table.Body>
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
            </Table.Body>
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
