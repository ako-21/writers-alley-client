import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Logo from './../../images/headerLogo.png'
import Button from 'react-bootstrap/Button'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Button href="#sign-up" size="sm" className="header-font mr-3 sign-up-button">Sign Up</Button>
    <Button href="#sign-in" variant="outline-white" size="sm" className="mr-5 header-font">Sign In</Button>
  </Fragment>
)

// const alwaysOptions = (
//   <Fragment>
//     <Nav.Link to="/">Home</Nav.Link>
//   </Fragment>
// )

const Header = ({ user }) => (
  <Navbar bg={ user ? 'dark' : 'transparent' } variant="dark" expand="md">
    <Navbar.Brand href="#">
      <img src={Logo} alt="logo" className="logo ml-5" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome, {user.firstname}</span>}
        {/*    { alwaysOptions } */}
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
