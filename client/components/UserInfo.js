import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Header,
  Icon,
  Container,
  Divider,
  List,
  Button,
  Grid,
  GridColumn,
  Table,
  Form,
  Input
} from 'semantic-ui-react' //import FUNCTIONS from REDUCER

class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        phone: ''
      },
      formBool: true
    }
    this._onChange = this._onChange.bind(this)
    this._onSubmit = this._onSubmit.bind(this)
    this.userInfoEditHandler = this.userInfoEditHandler.bind(this)
    this.userInfoSaveHandler = this.userInfoSaveHandler.bind(this)
  }

  _onChange(event) {
    console.log(event.target.value, 'onchangeT')
    console.log(event.target.name, 'nameT')

    this.setState({
      user: {
        [event.target.name]: event.target.value
      }
    })
  }
  _onSubmit = event => {
    event.preventDefault()
    console.log('onsubmit', this.state)
    // this.props.addNewCampusProp(this.state)
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
    event.preventDefault()
    // console.log(this.state.formBool, 'clickHandleB')
    if (this.state.formBool === true) {
      this.setState({ formBool: false })
    } else if (this.state.formBool === false) {
      this.setState({ formBool: true })
    }
    // console.log(this.state.formBool, 'clickHandleA')
    console.log('onsubmit', this.state)
    // this.props.addNewCampusProp(this.state)
  }
  //componentDidMount(){
  //this.props.fetchAllClass
  //}

  render() {
    console.log(this.props.user)
    const { form, user } = this.props

    return (
      <div>
        {this.state.formBool ? (
          <Container>
            <Grid padded relaxed>
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
              <Grid.Row>
                <Grid.Column width={3} textAlign="right">
                  Phone:
                </Grid.Column>
                <Grid.Column textAlign="left">{user.phone}</Grid.Column>
              </Grid.Row>
            </Grid>
            <Button
              size="mini"
              floated="right"
              compact
              onClick={this.userInfoEditHandler}
            >
              Edit
            </Button>
          </Container>
        ) : (
          <Container>
            <Grid padded relaxed>
              <Grid.Row>
                <Grid.Column width={3} textAlign="right">
                  First Name:
                </Grid.Column>
                <Grid.Column textAlign="left">
                  <React.Fragment>
                    <Form.Input
                      name="firstName"
                      placeholder={user.firstName}
                      onChange={this._onChange}
                    />
                  </React.Fragment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={3} textAlign="right">
                  Last Name:
                </Grid.Column>
                <Grid.Column textAlign="left">
                  <React.Fragment>
                    <Form.Input
                      placeholder={user.lastName}
                      onChange={this._onChange}
                    />
                  </React.Fragment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={3} textAlign="right">
                  Email:
                </Grid.Column>
                <Grid.Column textAlign="left">
                  <React.Fragment>
                    <Form.Input
                      placeholder={user.email}
                      onChange={this._onChange}
                    />
                  </React.Fragment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={3} textAlign="right">
                  Address:
                </Grid.Column>
                <Grid.Column textAlign="left">
                  <React.Fragment>
                    <Form.Input
                      placeholder={user.address}
                      onChange={this._onChange}
                    />
                  </React.Fragment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={3} textAlign="right">
                  Address:
                </Grid.Column>
                <Grid.Column textAlign="left">
                  <React.Fragment>
                    <Form.Input
                      placeholder={user.phone}
                      onChange={this._onChange}
                    />
                  </React.Fragment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Button
              size="mini"
              floated="right"
              compact
              onClick={this.userInfoSaveHandler}
            >
              Save
            </Button>
          </Container>
        )}
      </div>
    )
  }
}

//Connectors
//const mapStateToProps = state => {
//return {Classes : state.{1:Class}Reducer.allClasses
//}
//const mapDispatchToProps = dispatch => {
//return{
//fetchFunction: () => {
//dispatch(reducerFunction()
//},
//}
//}
// export default connect(mapStateToProps, mapDispatchToProps)(Class)

export default UserInfo
