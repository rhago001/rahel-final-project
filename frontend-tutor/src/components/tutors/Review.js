import React, {Component} from 'react'
import ReviewCard from './ReviewCard'
import { BrowserRouter as Router, Link } from 'react-router-dom'



class Review extends Component {


  render() {

    return(
        // <>
      <div>
      {this.props.loaded &&
       this.props.review.map(review => 
       <ReviewCard 
        review={review} 
        user={this.props.user}
        tutor_id={this.props.tutor_id} 
        addReview={this.props.addReview}
        deleteReview={this.props.deleteReview}

        
       /> )}

             
<button class="btn-review">
          <span>
            {this.props.user ?
          <Link to={{pathname: `/tutors/${this.props.tutor_id}/schedule`,
          params: {
            addAppt: this.props.addAppt }
          }} >schedule </Link>:
          <Link to={`/login`}
          > schedule </Link>
       
        }
          </span>
        </button>
        
    <button class="btn-review">
      <span>
        {this.props.user ?
              <Link to={{pathname: `/tutors/${this.props.tutor_id}/review`,
              params: {
               addReview: this.props.addReview }
              }}> write review </Link>:

         <Link to={`/login`}
           > write review </Link>
            } 
       
        </span>
        </button>


    </div>
    )
  }
}
export default Review;