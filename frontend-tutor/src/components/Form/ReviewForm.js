import React, {Component} from 'react'
import { Link } from 'react-router-dom'




class ReviewForm extends Component{
  
  // constructor(props) {
  //   super(props)
  //   this.state = {     
  //      comment: "",
  //      trainer_id: "",
  //      user_id: ""
  //     }
  //   this.handleSubmit = this.handleSubmit.bind(this)
  // }

  state = {     
    comment: "",
    trainer_id: "",
    user_id: ""
   }
  changeHandler = (e) => {
    console.log("value", e.target.value)
    console.log("name", e.target.name)

    // const {name: fieldName, value}= e.target
    // this.setState({
    //  [fieldName]: value
     this.setState({
       [e.target.name]: e.target.value
     })
    // })
  
    
  }


  handleSubmit=(e) => {
    e.preventDefault()


    let newReview={
      comment: this.state.comment,
      trainer_id: this.props.match.params.id,
      user_id: this.props.user.id


    }
    console.log(newReview)

    let reqPack={
      headers: {"content-type": " application/json"},
      method: "POST",
      body: JSON.stringify(newReview)

    }

    fetch("http://localhost:3000/reviews", reqPack)
    .then (res => res.json())
    .then (data =>{
      this.props.location.params.addReview(data)    })

  }

  render() {
    return(

      <div>
        
      
      <form  onSubmit={this.handleSubmit} className="container" >
      
      <h3>Write a review </h3>
      
      <br />
        <input class="w3-input w3-border w3-animate-input w3-input w3-hover-gray" 
         onChange={this.changeHandler} 
         style={{width: '60%'}}
          type="text"
          value= {this.state.value}
          name="comment"
          placeholder="Review goes here"
        />
     
    
          <span>
        <button class="btn-appt" onClick={this.handleSubmit}>
        <Link to={`/tutors/${this.props.match.params.id}`} type="submit" name="submit" value="Create New Appt" className="submit">Submit </ Link> 
          
          </button>
          </span>
      </form>
      </div>
    )
  }
}
export default ReviewForm;