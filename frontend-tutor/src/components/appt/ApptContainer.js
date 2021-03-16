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

  
  deleteAppt = (selectedAppt) => {
    console.log("am clicked delete", selectedAppt)

    let reqPack={
        method: "DELETE"
    }

    // debugger
    fetch(`http://localhost:3000/appointments/${selectedAppt.id}`, reqPack)
    .then(res => res.json())
    // .then(data => console.log({...this.state.tutors, appointments: this.state.tutors.appointments}))
    // this.setState({
    //   tutors: {...this.state.tutors, appointments: this.state.tutors.appointments.filter((appt)=> appt !== selectedAppt)}}))

    .then(data=>{
      let newTutors = [...this.state.tutors]
      let x= newTutors.map(tutor=>{
          return {...tutor, appointments: tutor.appointments.filter(appt=>appt!==selectedAppt)}
      })
      this.setState({
          tutors: x
      })
  })
  
  }
      
  
  // debugger
  render() {
    return (
      
      <>
      <Appointment 
       loaded={this.state.loaded} 
       tutors={this.state.tutors} 
       user={this.props.user}
       handleClick={this.props.handleClick}
       deleteAppt={this.deleteAppt}
     
       /> 
       {/* <ApptForm   addAppt={this.addAppt} /> */}
    </>
    )
  }
}
export default ApptContainer;