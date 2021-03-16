import React, {Component} from 'react'
import PostComment from './PostComment'
import PostForm from '../Form/PostForm'



class PostContainer extends Component {


  

render(){


return(

<> 
<div className="ui small comments"style={{margin: "20px"}}>
  <h2 className="ui dividing header">Questions</h2>
    {this.props.loaded && this.props.posts.map(post => <PostComment post={post} addPost={this.props.addPost} user={this.props.user} />)}
    <PostForm post={this.props.posts} addPost={this.props.addPost} user={this.props.user}/>
    
</div>

</>





)

}


}export default PostContainer;