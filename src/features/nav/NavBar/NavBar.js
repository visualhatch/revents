import React, { Component, Fragment } from "react";
import { Button, Container, Menu, MenuItem } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";
import { withRouter } from "react-router";
import { openModal } from "../../../store/actions/modalActions";
import { connect } from "react-redux";
import { withFirebase } from "react-redux-firebase";


const actions = {
  openModal,

};

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
});

class NavBar extends Component {
  handleSignIn = () => {
    this.props.openModal("LoginModal");
  };

  handleRegister = () => {
    this.props.openModal("RegisterModal");
  };

  handleSignOut = () => {
    this.props.firebase.logout();
    this.props.history.push("/");
  };

  render() {
    const { auth, profile } = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty;
    return (
      <Menu inverted fixed="top">
        <Container>
          <MenuItem as={NavLink} exact to={"/"} header>
            <img src="/assets/logo.png" alt="logo" />
            Re-vents
          </MenuItem>
          <MenuItem as={NavLink} exact to={"/events"} name="Events" />
          {authenticated && (
            <Fragment>
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
            </Fragment>
          )}

          {authenticated ? (
            <SignedInMenu
              signOut={this.handleSignOut}
              profile={profile}
            />
          ) : (
            <SignedOutMenu
              signIn={this.handleSignIn}
              register={this.handleRegister}
            />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(
  withFirebase(connect(mapStateToProps, actions)(NavBar))
);
