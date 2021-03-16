import React, {Component} from 'react'
import DisComments from './DisComments'
// import { Form, Button, Icon } from 'semantic-ui-react'



class PostComment extends Component {

render(){


return(
<>

 {this.props.post.comments.map(post => <DisComments postcomment={post} user={this.props.user} post={this.props.post}/>)}
 <DisComments user={this.props.user} post={this.props.post}/>


</>
)

}


}export default PostComment;