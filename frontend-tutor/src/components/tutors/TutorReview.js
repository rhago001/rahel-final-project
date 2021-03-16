import React, {Component} from 'react'
import Review from './Review'
// import ReviewCard from './ReviewCard'
class TutorReview extends Component {

  state={
    tutors: [],
    loaded: false,
    display: false
  }


  componentDidMount () {
    const id= this.props.match.params.id
    fetch(`http://localhost:3000/tutors/${id}`)
    .then( res => res.json())
    .then( data => this.setState({
      tutors: data,
      loaded: true
    }))
  }
  
  // this.state.loaded && this.state.tutors.map()
  
  addReview= (rev) => {
    console.log("review clicked", rev)
   
        this.setState({tutors: [...this.state.tutors.reviews, rev]})

  }

  addAppt= (appt) => {
    console.log("review clicked", appt)
        this.setState({tutors: [...this.state.tutors.appointments, appt]})

  }
  
  

  deleteReview = (review) => {
    console.log("am clicked delete", review)

    let reqPack={
        method: "DELETE"
    }

    fetch(`http://localhost:3000/reviews/${review.id}`, reqPack)
    .then(res => res.json())
    .then(data => this.setState({
      tutors: {...this.state.tutors, reviews: this.state.tutors.reviews.filter((rev)=> rev !== review)}}))
      // tutors: this.state.tutors.
    
  }

  handleReviewEdit =(review) => {
   
    console.log("edit clicked", review)

    let newReview={
      comment: review.comment
    }
    console.log(newReview)
    let reqPack={
       headers: {"content-type": "application/json"},
       method: "PATCH",
       body: JSON.stringify(newReview)
    }
    // debugger
    fetch("http://localhost:3000/reviews/"+ review.id, reqPack)
    .then(res => res.json())
    .then(reviewData => {
      let newArray = {...this.state.tutors, reviews: this.state.tutors.reviews.map(review=>review.id === reviewData.id ? reviewData : review)}
      
      this.setState({ 
        tutors: newArray
      })
    }
    )

  }
     


  
  render() {
    return(
      <>    

      <Review review={this.state.tutors.reviews} 
      loaded={this.state.loaded}
      user={this.props.user} 
      tutor_id={this.props.match.params.id} 
      addReview={this.addReview}
      addAppt={this.addAppt}
      deleteReview={this.deleteReview}
      handleReviewEdit={this.handleReviewEdit}


      />
      
    </>
    )
  }
}
export default TutorReview;