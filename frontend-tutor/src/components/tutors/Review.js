import React, {Component} from 'react'
import ReviewCard from './ReviewCard'


class Review extends Component {



  render() {

    return(

      <div>
      {this.props.loaded &&
       this.props.review.map(review => 
       <ReviewCard 
        review={review} 
        user={this.props.user}
        tutor_id={this.props.tutor_id} 
        addReview={this.props.addReview}
        
       /> )}
    </div>
    )
  }
}
export default Review;