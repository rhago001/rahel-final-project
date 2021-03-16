import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Icon } from 'semantic-ui-react'
import '../Discussion/Post.css'




class PostForm extends Component{


  state = {     
    post: "",
    user_id: "",
    name: ""


      }

  
  changeHandler = (e) => {
    console.log("value", e.target.value)
    console.log("name", e.target.name)

    const {name: fieldName, value}= e.target
    this.setState({
     [fieldName]: value
     
    //  this.setState({
    //    [e.target.name]: e.target.value
    //  })
    })
    }
    
//   // }


  handleSubmit=(e) => {
    e.preventDefault()


    let post={
      post: this.state.post,
      user_id: this.props.user.id,
      name: this.props.user.name


    }
  
    console.log("newPost ",post)

    let reqPack={
      headers: {"content-type": " application/json"},
      method: "POST",
      body: JSON.stringify({post})

    }

    fetch("http://localhost:3000/posts", reqPack)
    .then (res => res.json())
    .then (data => {
      this.props.addPost(data)})

  }

  render() {
    return(
      <div className="postcontainer">
      <Form onSubmit={this.handleSubmit} reply>
      <Form.TextArea onChange={this.changeHandler} 
            type="text" name="post"/>

      <Button content='Ask Question' onClick={this.handleSubmit} labelPosition='left' icon='edit' primary 
      type="submit" name="submit"/>
      

    </Form>

    </div>
//       <div>
        
      
//       <form   className="container" >
      
//       <h3>Write a review </h3>
      
//       <br />
//         <input class="w3-input w3-border w3-animate-input w3-input w3-hover-gray" 
//          onChange={this.changeHandler} 
//          style={{width: '60%'}}
//           type="text"
//           value= {this.state.value}
//           name="comment"
//           placeholder="Review goes here"
//         />
     
    
//           <span>
//         <button class="btn-appt" onClick={this.handleSubmit}>
//         <Link to={`/tutors/${this.props.match.params.id}`} type="submit" name="submit" value="Create New Appt" className="submit">Submit </ Link> 
          
//           </button>
//           </span>
//       </form>
//       </div>
    )
  }
}
export default PostForm;