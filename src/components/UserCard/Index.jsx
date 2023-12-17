import React from 'react'

export default function UserCard(props) {
  return (
    <div className='user'>
        <div> <img src={props.image} alt="" /></div>
        <h2>{props.firstName} {props.lastName}</h2>
        <div>Address: {props.address}</div>
        <div>Phone: {props.phoneNumber}</div>
        <div>Age: {props.age}</div>
    </div>
  )
}


