import React from 'react'
import UserList from '../pages/UserList'
import Categories from './Categories'
import { Grid } from "semantic-ui-react";
import { Route } from 'react-router-dom'
import PaymentList from '../pages/PaymentList';
import UserDetail from '../pages/UserDetail';

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
         
            <Route exact path="/"  />
            <Route exact path="/users" component={UserList} />
            <Route exact path="/users/:id" component={UserDetail} />
            {/* <Route path="/products/:name" component={ProductDetail} />
            <Route path="/cart" component={CartDetail} />
            <Route path="/product/add" component={ProductAdd} /> */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
