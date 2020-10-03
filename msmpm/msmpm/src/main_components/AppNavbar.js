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
    const toggle = () => setIsOpen(!isOpen);
    const logout = () => {
      document.cookie="isLoggedIn="+false+";path=/";
      document.cookie="username="+""+";path=/";
    };
    const getUsername = (cookieName) => {
      var name = cookieName + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }

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
            <NavbarText>{getUsername("username")}</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
}