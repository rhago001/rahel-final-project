import React, {Component} from 'react'
import ApptCard from './ApptCard'

class Appointment extends Component {

  render() {
    return(

      <div>
        {this.props.loaded && this.props.appt.map(appt => <ApptCard appt={appt} 
        tutor={this.props.tutor} 
        user={this.props.user}
        handleClick={this.props.handleClick}
         /> )}


      </div>
    )
  }
} export default Appointment;