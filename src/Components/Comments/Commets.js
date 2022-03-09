import axios from 'axios'
import React from 'react'
import {Card, Col, Row} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CommentForm from './CommentForm'
import { SET_COMMENTS,SET_SINGLEPOST } from '../../Redux/constants'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
export default function PostItem() {
    const params=useParams()
    const dispatch=useDispatch()
    const comments = useSelector(state=>state.commentReducer.comments)
    const post = useSelector(state=>state.postReducer.post)

    // fetch Posts 
    async function fetchPosts(){
        const response= await axios.get('https://jsonplaceholder.typicode.com/posts/'+params.id+'/comments')
        dispatch({
            type:SET_COMMENTS,
            payload:response.data
        })
        const responsePost= await axios.get('https://jsonplaceholder.typicode.com/posts/'+params.id)
        dispatch({
            type:SET_SINGLEPOST,
            payload:responsePost.data
        })
    }
    useEffect(()=>{
        fetchPosts()
    },[])
  return (
      <Row className='justify-content-center mb-5'>
       <Col xl={10} >
       <Card  className='shadow '>
            <Card.Header className='py-4'>
            <Card.Title className='first-letter'>{post.title}</Card.Title>
                    <blockquote className="blockquote my-2 first-letter">
                    <p>
                        {' '}
                       {post.body}{' '}
                    </p>
                    
                    </blockquote>
            </Card.Header>
            {comments.map(comment=>(
                <Card.Body key={comment.id} className='border shadow rounded mx-4 my-3'>
                    <Card.Title className="first-letter">{comment.name}</Card.Title>
                    <blockquote className="blockquote mb-0 first-letter fw-light">
                    <p>
                        {' '}
                       {comment.body}{' '}
                    </p>
                    <footer className="blockquote-footer float-end first-letter">
                        By <cite title="Source Title">{comment.email}</cite>
                    </footer>
                    </blockquote>
                </Card.Body>
             ))}
            
            <CommentForm/>
            </Card>
        </Col>
      </Row>
  )
}
