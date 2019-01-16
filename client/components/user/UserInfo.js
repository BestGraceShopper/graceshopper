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
} from 'semantic-ui-react'

class UserInfo extends Component {
  render() {
    const { user } = this.props

    return (
      <div>
        {this.props.formBool ? (
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
              onClick={this.props.userInfoEditHandler}
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
                      onChange={this.props._onChange}
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
                      name="lastName"
                      placeholder={user.lastName}
                      onChange={this.props._onChange}
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
                      name="email"
                      placeholder={user.email}
                      onChange={this.props._onChange}
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
                      name="email"
                      placeholder={user.address}
                      onChange={this.props._onChange}
                    />
                  </React.Fragment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={3} textAlign="right">
                  Phone:
                </Grid.Column>
                <Grid.Column textAlign="left">
                  <React.Fragment>
                    <Form.Input
                      name="phone"
                      placeholder={user.phone}
                      onChange={this.props._onChange}
                    />
                  </React.Fragment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Button
              size="mini"
              floated="right"
              compact
              onClick={this.props.userInfoSaveHandler}
            >
              Save
            </Button>
          </Container>
        )}
      </div>
    )
  }
}

export default UserInfo
