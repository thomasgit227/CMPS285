import React, { useState } from 'react';
import './Main_Components.css';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, 
  Button,
} from 'reactstrap';

import {
  Link, Redirect
} from 'react-router-dom';

export default function AppNavbar() {

    const logout = () => {
      window.location.reload(false);
      sessionStorage.isLoggedIn = false;
      sessionStorage.username = "Guest";
    };

    return (
      
        <div>

        <Navbar light expand="md">
          <NavbarBrand tag = {Link} to="/">
            <img src="../../../assets/logo.png" width="41" height="41"/> 
          </NavbarBrand>
            <Nav className = 'navbar' navbar>

            <NavItem>
              <NavLink tag={Link} to = "/properties/">
                Properties
              </NavLink>
            </NavItem>

            <UncontrolledDropdown className = "account" nav inNavbar>
              <DropdownToggle nav caret>
                Hello, {sessionStorage.isLoggedIn ? sessionStorage.username : "Guest"}
              </DropdownToggle>
              <DropdownMenu right>


                <DropdownItem>
                  <NavLink tag={Link} to = "/login/">
                    Sign in
                  </NavLink>
                </DropdownItem>

                <DropdownItem>
                  <Button onClick={logout}>
                    Log out
                    <Redirect to = "/home/"/>
                  </Button>
                </DropdownItem>

              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
            
        </Navbar>

      </div>
      
    );
}