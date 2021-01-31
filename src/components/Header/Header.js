import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Logo from './../../images/headerLogo.png'
import Button from 'react-bootstrap/Button'
import { BsQuestionCircle } from 'react-icons/bs'
import { RiShareForwardLine } from 'react-icons/ri'
// import ProgressBar from './ProgressBar'

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
    <Navbar.Brand href={ user ? '#home' : '#' }>
      <img src={Logo} alt="logo" className="logo ml-5" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <div className="mr-5 d-flex align-items-center">
          { user && <RiShareForwardLine className="mr-4" style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '1.5rem' }}></RiShareForwardLine> }
          { user && <BsQuestionCircle style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '1.5rem' }}></BsQuestionCircle> }
        </div>
        { user && <span className="navbar-text mr-2">Welcome, {user.firstname}</span>}
        {/*    { alwaysOptions } */}
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
