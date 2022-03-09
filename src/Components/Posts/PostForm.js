import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Alert,Col,Form,FormControl, Row,} from 'react-bootstrap'
export default function PostForm() {
  const [show, setShow]=useState(false)
  const [validated, setValidated] = useState(false);


  const addComment=(e)=>{
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true)
    if(form.checkValidity()===true){
       e.preventDefault();
       e.stopPropagation();
        const title=e.target.title.value;
        const body=e.target.body.value;
        // There are some fields I did not cover.(Test format)
        const newPost={
          title,
          body
        }
        axios.post('https://jsonplaceholder.typicode.com/posts',newPost)
        setShow(true)
        setValidated(false)
      e.target.reset()
    } 
   
  }
  return (
      <Row className='justify-content-center mt-3'>
        <Col md={8} xl={8}>
            {show?
              <Alert variant="success" onClose={() => setShow(false)} dismissible>
              <Alert.Heading className='mb-0'> Post  saved  seccussfully !</Alert.Heading>
              </Alert>:''
            }
          <h4>New post</h4>
          <Form onSubmit={addComment} noValidate validated={validated}>
            <Form.Group  controlId="validationCustom03">
                <Form.Control type="text" required name='title' placeholder="Title..." className='my-2'/>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid title.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group  controlId="validationCustom04">
                <FormControl as="textarea" required  name='body' placeholder='Body...' rows='3' className='my-2' />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid body.
                </Form.Control.Feedback>
              </Form.Group>
            <button className="btn btn-primary mt-2" type='submit'>Add Post</button>
          </Form>
        </Col>
      </Row>
  )
}