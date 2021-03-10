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
      {/* <Card style={{ padding: "10px", margin: "10px"}}>
        <CommentGroup>
           <Comment>
             <Comment.Avatar src="https://upload.wikimedia.org/wikipedia/commons/6/61/FS_wiki.png" style={{margin: "0px"}}/>
             <Comment.Content>
               <Comment.Author>
                 Author name< Comment.Metadata> 2 days ago </Comment.Metadata>
               </Comment.Author>
               <Comment.Text > {this.props.post.post} </Comment.Text>



               <Comment.Action onClick={this.handleClick}>Reply
               {this.state.display ?
               <Form reply>
      <Form.TextArea />
      <Button content='Reply' labelPosition='left' icon='edit' primary />
    </Form> : null
              }
               </Comment.Action>:
              //  <Icon name='circle notched' loading>  </Icon>
               <Comment.Action> Reply</Comment.Action>
              //  
              //  <p>please log in</p>
               }
             </Comment.Content>
           </Comment> */}



     
        {/* </CommentGroup> */}

 {/* </Card> */}


 <div class="ui small comments">
  
  <div class="comment"style={{margin: "60px"}}>
    <a class="avatar">
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/FS_wiki.png"/>
    </a>
    <div class="content">
      <a class="author">Elliot Fu</a>
      <div class="metadata">
        <span class="date">Yesterday at 12:30AM</span>
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
      //  <Icon name='circle notched' loading>  </Icon>
      <Link to={`/login`}
      style={{color: 'black'}}> Reply </Link>
      //  <Comment.Action> </Comment.Action>
      //  
      //  <p>please log in</p>
    }
    
      
        
    </div>
    
    



    <div class="comments">
      <div class="comment"style={{margin: "30px"}}>
        <a class="avatar">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/FS_wiki.png" style={{margin: "0px"}}/>
        </a>
        <div class="content">
          <a class="author">Jenny Hess</a>
          <div class="metadata">
            <span class="date">Just now</span>
          </div>
          <div class="text">
            {this.props.postcomment.comment}
          </div>
          {/* <div class="actions">
            <a class="reply">Reply</a>
          </div> */}
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




{/* <div class="ui small comments">
  <h3 class="ui dividing header">Comments</h3>
  <div class="comment">
    <a class="avatar">
      <img src="/images/avatar/small/matt.jpg">
    </a>
    <div class="content">
      <a class="author">Matt</a>
      <div class="metadata">
        <span class="date">Today at 5:42PM</span>
      </div>
      <div class="text">
        How artistic!
      </div>
      <div class="actions">
        <a class="reply">Reply</a>
      </div>
    </div>
  </div>
  <div class="comment">
    <a class="avatar">
      <img src="/images/avatar/small/elliot.jpg">
    </a>
    <div class="content">
      <a class="author">Elliot Fu</a>
      <div class="metadata">
        <span class="date">Yesterday at 12:30AM</span>
      </div>
      <div class="text">
        <p>This has been very useful for my research. Thanks as well!</p>
      </div>
      <div class="actions">
        <a class="reply">Reply</a>
      </div>
    </div>
    <div class="comments">
      <div class="comment">
        <a class="avatar">
          <img src="/images/avatar/small/jenny.jpg">
        </a>
        <div class="content">
          <a class="author">Jenny Hess</a>
          <div class="metadata">
            <span class="date">Just now</span>
          </div>
          <div class="text">
            Elliot you are always so right :)
          </div>
          <div class="actions">
            <a class="reply">Reply</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="comment">
    <a class="avatar">
      <img src="/images/avatar/small/joe.jpg">
    </a>
    <div class="content">
      <a class="author">Joe Henderson</a>
      <div class="metadata">
        <span class="date">5 days ago</span>
      </div>
      <div class="text">
        Dude, this is awesome. Thanks so much
      </div>
      <div class="actions">
        <a class="reply">Reply</a>
      </div>
    </div>
  </div>
  <form class="ui reply form">
    <div class="field">
      <textarea></textarea>
    </div>
    <div class="ui blue labeled submit icon button">
      <i class="icon edit"></i> Add Reply
    </div>
  </form>
</div> */}