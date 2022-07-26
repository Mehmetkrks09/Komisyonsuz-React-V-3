import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react';
import UserService from '../Sevices/UserService';

export default function UserDetail() {

 let {id}= useParams()

  const [user, setUser] = useState({})


    useEffect(() => {
        let userService = new UserService()
        userService.findById(id).then(result => setUser(result.data.data))
     },[])
   
  return (
    <div> 
     
         <Card.Group>
    <Card fluid>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/steve.jpg'
        />
        <Card.Header>{user.name}</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
  
  </Card.Group>

  </div>
  )
}
