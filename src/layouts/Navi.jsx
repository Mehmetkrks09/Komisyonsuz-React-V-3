import React,{useState} from 'react'
import { Navbar,Container,DropdownButton,NavDropdown,Nav } from 'react-bootstrap';
import CartSummary from "./CartSummary"
import SıgnedIn from './SıgnedIn';
import SıgnedOut from './SıgnedOut';


export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  function handleSignOut() {
    setIsAuthenticated(false)
  }

  function handleSignIn() {
    setIsAuthenticated(true)
  }
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
        {isAuthenticated?<SıgnedIn signOut={handleSignOut}/>  :<SıgnedOut signIn={handleSignIn} />}
 
       
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}
