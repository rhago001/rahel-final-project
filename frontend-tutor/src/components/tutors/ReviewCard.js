import React, {Component} from 'react'
import './ReviewCard.css'

// import ApptForm from '../Form/ApptForm'



class ReviewCard extends Component {



  render() {
    let {deleteReview, review} =this.props
 
    return(
      <>
     
    <div className="card-deck">
      <br />
      <br />
      <div class="content">
          
            <h4 class="round">  {this.props.review.comment} 
               { this.props.review.user_id === this.props.user.id ?
           <button onClick={() => deleteReview(review) } class="delete"> <i class="fa fa-trash" aria-hidden="true"></i> delete
          </button>:null}
          <br />
          </h4>
        
         
        </div>
        </div>

    

    
    
  
    </>
    )
  }
}
export default ReviewCard;