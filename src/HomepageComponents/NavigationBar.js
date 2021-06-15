import React, { Component } from 'react'
import logo from '../assest/logo.png'
import { Nav, Navbar, Button, Container, Form, FormControl, NavDropdown } from 'react-bootstrap'
export class NavigationBar extends Component {
    render() {
        return (
            
            <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
                <Container fluid="sm">
                    <Navbar.Brand href="#home" style={{color:"black",fontWeight:"bold"}}>
                    NILOOFAR</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav style={{fontSize: '12px'}}>
                            <Nav.Link href="#features" style={{color:"white"}}>OUR SECURITY</Nav.Link>
                            <Nav.Link href="#pricing"style={{color:"white"}}>OUR TEAM</Nav.Link>
                            <Nav.Link href="#deets"style={{color:"white"}}>HOW WE DO IT</Nav.Link>
                            <Nav.Link eventKey={2} style={{color:"white"}} href="#memes">
                                WORKS
                            </Nav.Link>
                            <Nav.Link href="#deets"style={{color:"white"}}>BRANDS AND CLIENT</Nav.Link>
                            <Nav.Link href="#deets"style={{color:"white"}}>CONTACT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
export default NavigationBar