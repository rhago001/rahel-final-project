
import React from 'react'
import { Link } from 'react-router-dom'



  class EditReview extends React.Component { 





    render() {
      return (


        <div className="container">

   
         <form onSubmit={this.handleSubmit}className="add-toy-form">
          <h3>Edit Review</h3>
          <input onChange = {this.changeHandler} type="text" name="name" placeholder="your comment" className="input-text"/>
          <br/>
         
          {/* <input type="submit" name="submit" value="submit update" className="submit"/> */}
          <span>
        <button class="btn-appt" onClick={()=> this.props.handleReviewEdit(this.props.review)}>
        <Link to={`/tutors/${this.props. trainer_id}`} type="submit" name="submit" value="Create New Appt" className="submit">Submit </ Link> 
          
          </button>
          </span>
        </form> 
      </div>


      )

    }
  } export default EditReview