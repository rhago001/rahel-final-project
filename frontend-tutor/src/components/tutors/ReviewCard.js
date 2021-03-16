import React, {Component} from 'react'
import './ReviewCard.css'
import EditReview from '../Form/EditReview'


// import ApptForm from '../Form/ApptForm'



class ReviewCard extends Component {

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
  
    let {deleteReview, review, handleReviewEdit} =this.props
    
    return(
      <>
    
    <div className="card-deck">
      <br />
      <br />
      <div class="content">

            <p class="round">  {this.props.review.comment} <br />
               { this.props.review.user_id === this.props.user.id ?
               <span>
               
               {this.state.display ?
        <EditReview handleReviewEdit ={handleReviewEdit} review={this.props.review} trainer_id={this.props.tutor_id} review={review}/>
        : null }
               <button onClick={this.handleClick}  class="delete">  
               <i class="fas fa-edit"></i> 
                </button>
              
           <button onClick={() => deleteReview(review) } class="delete" > <i class="fa fa-trash" aria-hidden="true"></i> 
          </button>
          </span>:null}
          <br />
          </p>
        
         
        </div>
        
        </div>

    

    
    
  
    </>
    )
  }
}
export default ReviewCard;