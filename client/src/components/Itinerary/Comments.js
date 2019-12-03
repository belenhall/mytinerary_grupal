import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Comments = ({ comments, action }) => {
  return (
 <div>  
    <div>
        <Form.Group className="row p-2">
            <Form.Control id="comments" type="text" placeholder="Leave your comment" width="10em"></Form.Control>
            <Button variant="primary" type="submit" onClick={action}>SEND</Button>
        </Form.Group>
        <div id="likeAdder">
          
        </div>
        <ul id="comments">
          
          {comments.map(comment => (
            <li color="#fff" >{comment}</li>
          )) || comments} 
          
          
        </ul>
      </div>
    
    
    
    
    </div>
    
  
  );
};
export default Comments;