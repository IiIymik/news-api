import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Container } from './AppBar.styled.js';

export default function AppBar() {
  return (
    <Container>
    <Nav>
        <NavLink to='/'>News</NavLink>
        <NavLink to='/newest'>Newest</NavLink>
        <NavLink to='/ask'>Ask</NavLink>
        <NavLink to='/show'>Show</NavLink>
        <NavLink to='/jobs'>Jobs</NavLink>
    </Nav>
    </Container>
  )
}
