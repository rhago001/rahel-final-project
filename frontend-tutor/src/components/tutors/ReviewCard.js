import React, {Component} from 'react'
import './ReviewCard.css'
import { BrowserRouter as Router, Link,Redirect } from 'react-router-dom'

// import ApptForm from '../Form/ApptForm'



class ReviewCard extends Component {



  render() {

 
    return(
      <>
     
    <div className="card-deck">
      <div class="content">
          <h4 class="round">{this.props.review.comment} </h4>  
        
        </div>
        </div>
      <button class="btn-review">
      <span>
        {this.props.user ?
              <Link to={{pathname: `/tutors/${this.props.review.trainer_id}/review`,
              params: {
               addReview: this.props.addReview }
              }}> write review </Link>:

         <Link to={`/login`}
           > write review </Link>
            } 
       
        </span>
        </button>

        <button class="btn-review">
          <span>
            {this.props.user ?
          <Link to={`/tutors/${this.props.review.trainer_id}/schedule`} >schedule </Link>:
          <Link to={`/login`}
          > schedule </Link>
           
        
        }
          </span>
        </button>
    

    
    
  
    </>
    )
  }
}
export default ReviewCard;