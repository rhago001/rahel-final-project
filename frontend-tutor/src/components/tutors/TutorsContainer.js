import React, {Component} from 'react'
import TutorsCard from './TutorsCard'
import TutorReview from './TutorReview'


class TutorsContainer extends Component {

render(){
  return (
    <>

{/* this.props.property && this.props.property */}

    {this.props.tutors.map(tutor => <TutorsCard tutor={tutor}/>)}
    
    {/* {this.props.tutors.map(tutor => <TutorReview tutor={tutor} loaded={this.props.loaded}/>)} */}
    
    </>

  )
}
}
// console.log(this.props.tutors)
export default TutorsContainer;