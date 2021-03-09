import React, {Component} from 'react'
import Appointment from './Appointment'
import ApptForm from'../Form/ApptForm'



class ApptContainer extends Component {

  state={
    tutors: [],
    loaded: false
  }
  

  componentDidMount () {
    // const id= this.props.match.params.id
    fetch(`http://localhost:3000/tutors`)
    .then( res => res.json())
    .then( data => this.setState({
      tutors: data,
      loaded: true
    }))
  }
  
  // addAppt=() => {

  //   fetch(`http://localhost:3000/tutors`)
  //   .then( res => res.json())
  //   .then( data => this.setState({
  //     tutors: data,
  //     loaded: true
  //   }))
    
  //    }  
      
  
  // debugger
  render() {
    return (
      
      <>
      <Appointment appt={this.state.tutors}
       loaded={this.state.loaded} 
       tutor={this.state.tutors} 
       user={this.props.user}
       handleClick={this.props.handleClick}
     
       /> 
       {/* <ApptForm   addAppt={this.addAppt} /> */}
    </>
    )
  }
}
export default ApptContainer;