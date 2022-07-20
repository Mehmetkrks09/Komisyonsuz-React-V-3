import React from 'react'
import PaymentList from '../pages/PaymentList'
import userList from '../pages/userList'
import Categories from './Categories'
import Navi from './Navi'

export default function Dashboard() {
  return (
    <div>
        <Navi/>
        <Categories/>
        <PaymentList/> 
    </div>
  )
}
