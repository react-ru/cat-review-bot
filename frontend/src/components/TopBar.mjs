import React from 'react'
import {
  Navbar,
  NavbarBrand,
  Container,
  Button
} from 'reactstrap'

export const TopBar = () => {
  return (
    <Navbar color="light" light>
      <Container>
        <NavbarBrand>Cat Review&nbsp;<small>bot</small></NavbarBrand>
      </Container>
    </Navbar>
  )
}
