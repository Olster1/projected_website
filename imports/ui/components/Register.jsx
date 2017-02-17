import React from 'react';
import {Grid, Row, Col, Input, ButtonInput, Checkbox} from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default Register = React.createClass({
  getInitialState() {
    return {
      errorMessage: "",
      email: "",
      password: "",
    }
  },

  propTypes: {
    
  },

  createNewUser(e) {
    e.preventDefault();
    userInformation
    Accounts.createUser(userInformation, (err) => {
      if (err) {
        return this.setState({errorMessage: err.reason});
      } else {
        FlowRouter.go('/projects');  
      }
  }

  updateEmailValue(event) {
    this.setState({email: event.target.value});
  },

  updatePasswordValue(event) {
    this.setState({password: event.target.value});
  },

  render() {
    return (
      <div>
        <p>Login Screen</p>
        <form onSubmit={this.createNewUser}>
          <Input type="text" placeholder="email" required="true" onChange={this.updateEmailValue} />
          <Input type="password" placeholder="password" required="true" onChange={this.updatePasswordValue} />
          <Input type="submit" value="Create New User" />
        </form>
      </div>
    )
  } 
});