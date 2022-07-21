import React from 'react'
import { Route} from 'react-router-dom'
import PaymentList from '../pages/PaymentList'
import Categories from './Categories'
import Navi from './Navi'

export default function Dashboard() {
  return (
    <div>
        <Navi/>
        <Categories/>
        <div>
        <PaymentList/> 
        <Route path="/" />
    </div>
    </div>
  )
}
