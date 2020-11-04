import React, { useState } from 'react';
import './Main_Components.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, 
  Button,
  NavbarText
} from 'reactstrap';

import {
  Link
} from 'react-router-dom';

export default function AppNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
      setIsOpen(!isOpen);
    }
    const logout = () => {
      window.location.reload(false);
      sessionStorage.isLoggedIn = false;
      sessionStorage.username = "Guest";
    };

    return (
        <div>

        <Navbar light expand="md">
          <NavbarBrand tag = {Link} to="/">MSMPM</NavbarBrand>
          <NavbarToggler onClick={toggle}/>
          <Collapse isOpen={isOpen} navbar>
            <Nav className = 'mr-auto' navbar>
              <NavItem>
                <NavLink tag={Link} to = "/properties/">
                  properties
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to = "/test/">
                  test
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink tag={Link} to = "/login/">
                      view
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink tag={Link} to = "/account/edit">
                      edit
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <Button onClick={logout}>
                      sign out
                    </Button>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Hello, {sessionStorage.username ? sessionStorage.username : "Guest"}</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
}