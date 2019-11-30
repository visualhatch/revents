import React from "react";
import {Dropdown, DropdownItem, DropdownMenu, Image, Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";

const SignedInMenu = ({ signOut }) => {
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src="/assets/user.png" />
      <Dropdown pointing="top left" text="Username">
        <DropdownMenu>
          <DropdownItem text="Create Event" icon="plus" />
          <DropdownItem text="My Events" icon="calendar" />
          <DropdownItem text="My Network" icon="users" />
          <DropdownItem text="My Profile" icon="user" />
          <DropdownItem as={Link} to={'/settings'} text="Settings" icon="settings" />
          <DropdownItem text="Sign Out" icon="power" onClick={signOut} />
        </DropdownMenu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;
