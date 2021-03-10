import React, {Component} from 'react'
import PostComment from './PostComment'
import { Form, Button, Icon } from 'semantic-ui-react'



class PostContainer extends Component {

render(){


return(

<> 
<div class="ui small comments"style={{margin: "20px"}}>
  <h2 class="ui dividing header">Questions</h2>
    {this.props.loaded && this.props.posts.map(post => <PostComment post={post} user={this.props.user} />)}
    <Form reply>
      <Form.TextArea />
      <Button content='Ask Question' labelPosition='left' icon='edit' primary />
    </Form>
</div>

</>





)

}


}export default PostContainer;