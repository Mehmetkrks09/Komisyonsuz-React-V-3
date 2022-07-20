import React from 'react'
import { NavDropdown,Nav, Dropdown } from 'react-bootstrap';
export default function CartSummary() {
  return (
   
    <Dropdown>
      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      </Dropdown>
  )
}
