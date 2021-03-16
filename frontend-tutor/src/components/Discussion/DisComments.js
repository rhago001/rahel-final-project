import React from 'react'

import { Form, Button, Comment, CommentGroup,Card, Icon } from 'semantic-ui-react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './Post.css'



class DisComments extends React.Component {
 state={
   display: false
 }



 handleClick = () => {
  let newBoolean = !this.state.display
  this.setState({
    display: newBoolean
  })
}

 


  render() {
    return(
      <>
     
 <div class="ui small comments">
  
  <div class="comment"style={{margin: "60px"}}>
    <a class="avatar">
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/FS_wiki.png"/>
    </a>
    <div class="content">
      <a class="author">{this.props.post.name}</a>
      <div class="metadata">
        <span class="date">Now</span>
      </div>
      <div class="text">
        <h5>{this.props.post.post}</h5>
      </div>
      
      {this.props.user ?
       <Comment.Action onClick={this.handleClick} style={{color: 'black'}}>Reply
       {this.state.display ?
       <Form reply>
<Form.TextArea />
<Button content='Reply' labelPosition='left' icon='edit' primary />
</Form> 
: null
      }
       </Comment.Action>:
      <Link to={`/login`}
      style={{color: 'black'}}> Reply </Link>
   
    }
    
      
        
    </div>
    
    



    <div class="comments">
      <div class="comment"style={{margin: "30px"}}>
        <a class="avatar">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/FS_wiki.png" style={{margin: "0px"}}/>
        </a>
        <div class="content">
          <a class="author">{this.props.post.name}</a>
          <div class="metadata">
            <span class="date">Just now</span>
          </div>
          <div class="text">
            {this.props.postcomment ?
              this.props.postcomment.comment:
            <div>
            <p> </p>
            </div>
            
           }
         
          </div>
         
        </div>
      </div>
    </div>
  </div>
  

</div>
    
      </>

    )
  }
}
export default DisComments;



