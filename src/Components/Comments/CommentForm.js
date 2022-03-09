import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Form,FormControl,} from 'react-bootstrap'
export default function CommentsForm() {
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
      const body=e.target.body.value;
      // There are some fields I did not cover.(Test format)
      const newComment={
        body
      }
        axios.post('https://jsonplaceholder.typicode.com/comments',newComment)
        setValidated(false)
      e.target.reset()
    } 
   
  }
  return (
     <div className='m-4'>
       <hr />
           <h4>Add comment</h4>
          <Form onSubmit={addComment} noValidate validated={validated}>
          
              <Form.Group  controlId="validationCustom04">
                <FormControl as="textarea" required  name='body' placeholder='Comment...' rows='5' className='my-3' />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid body.
                </Form.Control.Feedback>
              </Form.Group>
            <button className="btn btn-primary " type='submit'>Save</button>
          </Form>
  </div>
  )
}