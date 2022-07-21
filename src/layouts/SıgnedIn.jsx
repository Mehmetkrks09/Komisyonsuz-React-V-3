import React from 'react'
import {DropdownButton,Dropdown, NavDropdown } from 'react-bootstrap';
import { DropdownMenu } from 'semantic-ui-react';

export default function SıgnedIn({signOut}) {
  return (
    <div>
  
   
  
      <NavDropdown title="Link" id="navbarScrollingDropdown">
     <img  width="45" height="45"   src="https://cambodiaict.net/wp-content/uploads/2019/12/computer-icons-user-profile-google-account-photos-icon-account-300x300.jpg" ></img>
            <NavDropdown.Item onClick={signOut}>Çıkış yap</NavDropdown.Item>
        </NavDropdown>
    </div>
  )
}
