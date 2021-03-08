import React, {Component} from 'react'
import Review from './Review'
// import ReviewCard from './ReviewCard'
class TutorReview extends Component {

  state={
    tutors: [],
    loaded: false
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
    // debugger
        this.setState({tutors: [...this.state.tutors.reviews, rev]})

  }
  
  // debugger
  render() {
    return(
      
      <>
      {/* <ReviewCard /> */}
      <Review review={this.state.tutors.reviews} 
      loaded={this.state.loaded}
      user={this.props.user} 
      tutor_id={this.props.match.params.id} 
      addReview={this.addReview}
      />
    </>
    )
  }
}
export default TutorReview;