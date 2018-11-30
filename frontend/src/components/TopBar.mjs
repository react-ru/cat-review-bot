import React from 'react'
import {
  Navbar,
  NavbarBrand,
  Container,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

export const TopBar = () => {
  return (
    <Navbar color="light" light>
      <Container>
        <NavbarBrand>Cat Review&nbsp;<small>bot</small></NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink href="/requests/">Requests</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/chats/">Chats</NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  )
}
