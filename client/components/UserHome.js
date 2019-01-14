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
//import FUNCTIONS from REDUCER

class UserHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        firstName: 'John',
        lastName: 'Adams',
        address: '123 america lane',
        email: 'JohnthePRES@america.colony',
        phone: '212-100-6793'
      },
      formBool: false,
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
    this.userInfoEditHandler = this.userInfoEditHandler.bind(this)
    this.userInfoSaveHandler = this.userInfoSaveHandler.bind(this)
  }

  userInfoEditHandler() {
    console.log(this.state.formBool, 'clickHandleB')
    if (this.state.formBool === true) {
      this.setState({ formBool: false })
    } else if (this.state.formBool === false) {
      this.setState({ formBool: true })
    }
    console.log(this.state.formBool, 'clickHandleA')
  }
  userInfoSaveHandler() {
    console.log(this.state.formBool, 'clickHandleB')
    if (this.state.formBool === true) {
      this.setState({ formBool: false })
    } else if (this.state.formBool === false) {
      this.setState({ formBool: true })
    }
    console.log(this.state.formBool, 'clickHandleA')
  }
  //componentDidMount(){
  //this.props.fetchAllClass
  //}

  render() {
    //const {Classes} = this. props

    return (
      <div>
        <Header as="h2">Welcome, {this.state.user.firstName}</Header>
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
          <UserInfo form={this.state.formBool} user={this.state.user} />

          {/* {this.state.formBool ? (
            <Button
              size="mini"
              floated="right"
              compact
              onClick={this.userInfoEditHandler}
            >
              Edit
            </Button>
          ) : (
            <Button
              size="mini"
              floated="right"
              compact
              onClick={this.userInfoSaveHandler}
            >
              Save
            </Button>
          )} */}
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

//Connectors
// const mapStateToProps = state => {
// return {Classes : state.{1:Class}Reducer.allClasses
// }
//const mapDispatchToProps = dispatch => {
//return{
//fetchFunction: () => {
//dispatch(reducerFunction()
//},
//}
//}
// export default connect(
// mapStateToProps,
// mapDispatchToProps
// )(Class)

export default UserHome
