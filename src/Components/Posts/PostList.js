import axios from 'axios'
import React from 'react'
import { Card,Col, Row} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import PostForm from './PostForm'
import { SET_POSTS } from '../../Redux/constants'
import { useEffect } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'

export default function PostList(props) {
    const params=useParams()
    let navigate=useNavigate();
    const dispatch=useDispatch()
    const posts = useSelector(state=>state.postReducer.posts)

    // fetch Posts 
    async function fetchPosts(){
        const response= await axios.get('https://jsonplaceholder.typicode.com/users/'+params.id+'/posts')
       
        dispatch({
            type:SET_POSTS,
            payload:response.data
        })
    }
    useEffect(()=>{
        fetchPosts()
    },[])
    // function. past to POSTITEM component
    
    const viewPost=(i)=>{
        let path='/comments/'+i
        navigate(path)
    }
    
  return (
      
   <Row>
       {
           posts.map(post=>( 
            <Col xl={6} key={post.id} className='p-3'>
            <Card className='h-100 postCard shadow-sm border-0' onClick={()=>viewPost(post.id)}>
                    {/* <Card.Header as="h5">Featured</Card.Header> */}
                    <Card.Body>
                        <Card.Title className='first-letter'>{post.title}</Card.Title>
                        <Card.Text className='first-letter'>
                        {post.body.slice(0,130)}...
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ))
        }

     {/* add new post */}
       

   </Row>
  )
}
