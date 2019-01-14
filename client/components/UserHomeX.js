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
  GridColumn,
  Table
} from 'semantic-ui-react'
import UserInfo from './UserInfo'

export const UserHome = props => {
  const { email, address, firstName, lastName } = props
  let formBool = true
  // const userInfoEditHandler = () => {
  //   console.log(formBool, 'editHandle')
  //   formBool = false
  // }
  // const userInfoFormHandler = () => {
  //   console.log(formBool, 'formHadle')
  //   formBool = true
  // }

  const userInfoClickHandler = () => {
    console.log(formBool, 'clickHandleB')
    if (formBool === true) {
      formBool = false
    } else if (formBool === false) {
      formBool = true
    }
    console.log(formBool, 'clickHandleA')
  }

  const user = {
    firstName: 'John',
    lastName: 'Adams',
    email: 'JohnthePRES@america.colony',
    address: '123 america lane'
  }

  const orders = [
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
  return (
    <div>
      <Header as="h2">Welcome, {user.firstName}</Header>
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
        <UserInfo form={formBool} />
        <Button
          size="mini"
          floated="right"
          compact
          onClick={userInfoClickHandler}
        >
          {formBool ? 'Save ' : 'Edit '}
        </Button>
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
            {orders.map(order => {
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

const mapStateToProps = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapStateToProps)(UserHome)

UserHome.propTypes = {
  email: PropTypes.string
}
