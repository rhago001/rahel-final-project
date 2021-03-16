import React, {Component} from 'react'
import ApptCard from './ApptCard'

class Appointment extends Component {

  render() {
    return(

      <div>
        <h2 style={{paddingTop: "30px"}}>Appointments </h2>
        <hr></hr>
       { (this.props.loaded && this.props.tutors)?(this.props.tutors.map(tutor => 
       <ApptCard tutor={tutor} 
        appts={tutor.appointments} 
        user={this.props.user}
        handleClick={this.props.handleClick}
        deleteAppt={this.props.deleteAppt}
         /> )):null
        }
        </div>
        
          
    )
  }
} export default Appointment;