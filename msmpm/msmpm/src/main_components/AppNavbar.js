import React, { useState } from 'react';
import './Main_Components.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, 
  Button,
  NavbarText
} from 'reactstrap';

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
        <div className = 'navbar'>

        <Navbar light expand="md">
          <NavbarBrand href="/">MSMPM</NavbarBrand>
          <NavbarToggler onClick={toggle}/>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/properties/">properties</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="/search/">search</NavLink>
              </NavItem> */}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/login/">
                    view
                  </DropdownItem>
                  {/* <DropdownItem href="/account/edit">
                    edit
                  </DropdownItem> */}
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