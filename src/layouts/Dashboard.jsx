import React from 'react'
import PaymentList from '../pages/PaymentList'
import UserList from '../pages/UserList'
import Categories from './Categories'
import Navi from './Navi'
import { Grid } from "semantic-ui-react";
import { Route } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>

      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
          <Categories/>
          
          </Grid.Column>
          <Grid.Column width={12}>
            <Route></Route>
         
            {/* <Route exact path="/"  />
            <Route exact path="/users" component={UserList} /> */}
            {/* <Route path="/products/:name" component={ProductDetail} />
            <Route path="/cart" component={CartDetail} />
            <Route path="/product/add" component={ProductAdd} /> */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
