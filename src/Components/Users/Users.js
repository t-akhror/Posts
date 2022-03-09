import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { Card, } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {SET_USERS}  from '../../Redux/constants';

export default function User() {
  const dispatch=useDispatch();
  const users=useSelector(state=>state.userReducer.users);
  // Fetch Users
  async function fetchUsers(){
    const response  =await axios.get('https://jsonplaceholder.typicode.com/users')

    dispatch({
      type:SET_USERS,
      payload:response.data
    })
  } 

  useEffect(()=>{
    fetchUsers()
  },[])
  return (
    <div className='d-flex flex-wrap justify-content-center'>
    { users.map(user=>(
      <Card key={user.id} className='userCard text-center  shadow border-0' >
              <img src={"image/avataaars("+user.id+").png"}  
                  className='img-fluid w-50 mx-auto ' alt="" 
                />
          <Card.Body >
              <div className='userName'> {user.name}</div>
              <Link to={'/postlist/'+user.id} className='link-secondary'>
                View posts...
              </Link>
          </Card.Body>
          
      </Card>
    ))}
  </div>
  )
}
