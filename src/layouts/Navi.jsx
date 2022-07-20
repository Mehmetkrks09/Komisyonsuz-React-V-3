import React from 'react'
import { Button,Navbar,Container,NavDropdown,Nav,Form,FormControl } from 'react-bootstrap';
import CartSummary from "./CartSummary"


export default function Navi() {
    return (
        <div>

         <Navbar bg="light" expand="lg">
  <Container container-fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        
      </Nav>
     
        <NavDropdown title="Link" id="navbarScrollingDropdown">
             <CartSummary></CartSummary>
        </NavDropdown>
      
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}
