import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  Header,
  Icon,
  Container,
  Divider,
  List,
  Button
} from 'semantic-ui-react'

export const UserHome = props => {
  const { email, address, firstName, lastName } = props

  const user = {
    firstName: 'John',
    lastName: 'Adams',
    email: 'JohnthePRES@america.colony',
    address: '123 america lane'
  }

  const orders = [
    { orderId: 1, orderDate: 'jan5', orderPrice: '$5.99' },
    { orderId: 2, orderDate: 'jan6', orderPrice: '$99.99' },
    { orderId: 3, orderDate: 'jan7', orderPrice: '$250.99' }
  ]
  return (
    <div>
      <Header as="h1">Welcome, Username Here</Header>
      <Divider />
      <Container>
        <Header as="h4" icon>
          <Icon name="settings" />
          Account Information
          <Header.Subheader>
            <List divided verticalAlign="middle">
              <List.Item floated="left">
                <List.Content>Address: {user.address}</List.Content>
                <List.Content>Email: {user.email}</List.Content>
                <List.Content>Last Name: {user.lastName}</List.Content>
                <List.Content>First Name: {user.firstName}</List.Content>
              </List.Item>
              <List.Content>
                <Button>Edit</Button>
              </List.Content>
            </List>{' '}
          </Header.Subheader>
        </Header>
      </Container>
      <Divider />
      <Container>
        <Header as="h4" icon>
          <Icon name="th list" />
          Order History
          <Header.Subheader>
            <List divided verticalAlign="middle">
              {orders.map(order => {
                return (
                  <List.Item>
                    <List.Content floated="right">
                      <Button>Show</Button>
                    </List.Content>
                    <List.Content floated="right">
                      Order Date{order.orderDate}
                    </List.Content>
                    <List.Content floated="right">
                      Total Price: {order.orderPrice}
                    </List.Content>
                    <List.Content floated="right">
                      Order ID: {order.orderId}
                    </List.Content>
                  </List.Item>
                )
              })}
            </List>
          </Header.Subheader>
        </Header>
      </Container>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapStateToProps)(UserHome)

UserHome.propTypes = {
  email: PropTypes.string
}
