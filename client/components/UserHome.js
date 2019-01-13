import React from 'react'
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
  GridColumn
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
      <Header as="h2">Welcome, {user.firstName}</Header>
      <Divider hidden />
      <React.Fragment>
        <Divider horizontal>
          <Header as="h4">
            <Icon name="settings" />
            Account Information
          </Header>
        </Divider>
      </React.Fragment>
      <Container floated="center">
        <Grid celled padded relaxed attached>
          <Grid.Row>
            <Grid.Column width={3} textAlign="right">
              First Name:
            </Grid.Column>
            <Grid.Column textAlign="left">{user.firstName}</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3} textAlign="right">
              Last Name:
            </Grid.Column>
            <Grid.Column textAlign="left">{user.lastName}</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3} textAlign="right">
              Email:
            </Grid.Column>
            <Grid.Column textAlign="left">{user.email}</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3} textAlign="right">
              Address:
            </Grid.Column>
            <Grid.Column textAlign="left">{user.address}</Grid.Column>
          </Grid.Row>
        </Grid>
        <Button size="mini" floated="right" compact>
          Edit
        </Button>
      </Container>

      <Divider hidden section />
      <React.Fragment>
        <Divider horizontal>
          <Header as="h4">
            <Icon name="th list" />
            Order History
          </Header>
        </Divider>
      </React.Fragment>
      <Container>
        <Header as="h6" icon>
          <Icon name="th list" />
          Order History
        </Header>

        <List divided verticalAlign="middle">
          {orders.map(order => {
            return (
              <List.Item key={order.orderId}>
                <List.Content>
                  <Button>Show</Button>
                </List.Content>
                <List.Content>Order Date{order.orderDate}</List.Content>
                <List.Content>Total Price: {order.orderPrice}</List.Content>
                <List.Content>Order ID: {order.orderId}</List.Content>
              </List.Item>
            )
          })}
        </List>
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
