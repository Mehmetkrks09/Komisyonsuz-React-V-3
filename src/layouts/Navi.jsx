import React, { useState } from 'react'
import { Menu, Container } from 'semantic-ui-react'
import CartSummary from '../layouts/CartSummary'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import {useHistory} from "react-router"




export default function Navi() {
  const history =useHistory()
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  function handleSignOut() {
    setIsAuthenticated(false)
    history.push("/")
  }

  function handleSignIn() {
    setIsAuthenticated(true)
  }
  return (

    <div>
      {/* <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
           
            {isAuthenticated?<signedIn signOut={handleSignOut} />
            :<signOut signIn={handleSignIn}/>}  
          </Menu.Menu>
        </Container>
      </Menu> */}




      <Menu inverted="top">
        <Container>
        <Menu.Item
          name='home'

        />
        <Menu.Item
          name='messages'

        />

        <Menu.Menu position='right'>

         <CartSummary/>
         {isAuthenticated?<SignedIn  signOut={handleSignOut}/>:   <SignedOut signIn={handleSignIn}/>}
       
         
         
        </Menu.Menu>
        </Container>
      </Menu>
    </div>
  )
}
