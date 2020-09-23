import React, { useState } from 'react';
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
  Button
} from 'reactstrap';

export default function AppNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className = 'navbar'>

        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">MSMPM</NavbarBrand>
          <NavbarToggler onClick={toggle}/>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/properties/">properties</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/search/">search</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/account/">
                    view
                  </DropdownItem>
                  <DropdownItem href="/account/edit">
                    edit
                  </DropdownItem>
                  <DropdownItem>
                    <Button>
                      sign out
                    </Button>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>

      </div>
    );

}