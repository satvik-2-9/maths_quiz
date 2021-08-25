import React from 'react'
import "./Header.css"
import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
function Header() {
    return (
        <div className="header">
            
            
            <Navbar collapseOnSelect expand="lg"  variant="dark" className="bar"> 
          <div className="brand">
          <Navbar.Brand className="txt" >Mental Math Games</Navbar.Brand>
          <span className="logo__label">Addition  || Multiplication || Subtraction</span>
          </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="./" className="txt" >Home</Nav.Link>

    </Nav>
    <Nav><Nav.Link href="https://expinfi.com/">More details</Nav.Link></Nav>
          </Navbar.Collapse>
        </Navbar>

       
            
        </div>
    )
}

export default Header
