import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import UserService from '../Sevices/UserService';


export default function userList() {
  
    const [users, setUsers] = useState([])


    useEffect(() => {
        let userService = new UserService()
        userService.getUser().then(result => setUsers(result.data.data))

    })
   
    return (

        <div>
            <Table striped="columns" size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Fotoğraf</th>
                        <th>Adı</th>
                        <th>Soy Adı</th>
                        <th>Ödeme Durumu</th>

                    </tr>
                </thead>
                <tbody>
                    {users.map((users) => (
                        <tr key={users.id}>

                            <td>{users.name}</td>
                            <td>{users.state}</td>
                            <td>{users.surName}</td>
                            <td>{users.email}</td>
                            <td>{users.photo}</td>

                        </tr>
                    ))}
                </tbody>
            </Table></div>
    )
}
