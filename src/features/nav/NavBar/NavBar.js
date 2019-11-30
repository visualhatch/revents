import React, { Component } from "react";
import {Button, Container, Menu, MenuItem} from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";
import { withRouter } from "react-router";

class NavBar extends Component {
  state = {
    authenticated: true
  };

  handleSignIn = () => {
    this.setState({ authenticated: true });
  };
  handleSignOut = () => {
    this.setState({ authenticated: false });
    this.props.history.push("/");
  };

  render() {
    const { authenticated } = this.state;
    return (
      <Menu inverted fixed="top">
        <Container>
          <MenuItem as={NavLink} exact to={"/"} header>
            <img src="/assets/logo.png" alt="logo" />
            Re-vents
          </MenuItem>
          <MenuItem as={NavLink} exact to={"/events"} name="Events" />
          <MenuItem as={NavLink} to={"/people"} name="People" />
          <MenuItem as={NavLink} to={"/test"} name="Test Area" />
          <MenuItem>
            <Button
              as={Link}
              to={"/createEvent"}
              floated="right"
              positive
              inverted
              content="Create Event"
            />
          </MenuItem>
          {authenticated ? (
            <SignedInMenu signOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu signIn={this.handleSignIn} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
