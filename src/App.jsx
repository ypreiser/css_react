import React from 'react'
import users from "./users.json"
import UserCard from './components/UserCard/Index'

export default function App() {
  return (
    <>
    <h1>Users</h1>
    <div className='flex'>
      {users.map(u => <UserCard key={u.id} id={u.id} firstName={u.firstName} age={u.age} lastName={u.lastName} image={u.image} address={u.address} phoneNumber={u.phoneNumber} />)}
    </div>
    </>
  )
}

