import React from 'react'

import { Form, Button, Comment, CommentGroup,Card, Icon } from 'semantic-ui-react'


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
      <Card style={{ padding: "10px", margin: "10px"}}>
        <CommentGroup>
           <Comment>
             <Comment.Avatar src="https://upload.wikimedia.org/wikipedia/commons/6/61/FS_wiki.png" style={{margin: "0px"}}/>
             <Comment.Content>
               <Comment.Author>
                 Author name< Comment.Metadata> 2 days ago </Comment.Metadata>
               </Comment.Author>
               <Comment.Text > My question should go here  </Comment.Text>

               {this.props.user ?
               <Comment.Action onClick={this.handleClick}>Reply
               {this.state.display ?
               <Form reply>
      <Form.TextArea />
      <Button content='Reply' labelPosition='left' icon='edit' primary />
    </Form> : null
              }
               </Comment.Action>:
               <Icon name='circle notched' loading>  <Comment.Action> Reply</Comment.Action></Icon>
              //  
              //  <p>please log in</p>
               }
             </Comment.Content>
           </Comment>


     
        </CommentGroup>

 </Card>
    <Form reply>
      <Form.TextArea />
      <Button content='Ask Question' labelPosition='left' icon='edit' primary />
    </Form>
      </>

    )
  }
}
export default DisComments;