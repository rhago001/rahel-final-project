import React, {Component} from 'react'
import './ApptForm.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'

class ApptForm extends Component {
  //  let trainer_id= this.props.match.params.id
   //user_id: this.props.user.id
   //  user_id: "",
   //  trainer_id: ""

   constructor(props) {
    super(props)
    this.state = { 
      time: '',
       date: "",
       user_id: "",
       trainer_id: ""
      }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

        // state = { 
        // time: '',
        //  date: "",
        //  user_id: ""
        // }
   

    changeHandler = (e) => {
      console.log("value", e.target.value)
      console.log("name", e.target.name)

      const {name: fieldName, value}= e.target
      this.setState({
       [fieldName]: value
      })
    
      // this.setState({
      //   [e.target.name]: e.target.value
      // })
      
    }
    
    handleSubmit(e){
      e.preventDefault()
      // console.log(this.state)
      // debugger
      let newAppt = {
        time: this.state.time,
        user_id: this.props.user.id,
        trainer_id: this.props.match.params.id,
        date: this.state.date
      }
      console.log("this form ", newAppt)
      
     
    let reqPack={
      headers: {"content-type": " application/json"},
      method: "POST",
      body: JSON.stringify(newAppt)

    }

  fetch("http://localhost:3000/appointments", reqPack)
        .then(res => res.json())
        .then(data => {
          this.props.location.params.addAppt(data)   
          // e.target.reset()
        }       
        )
      }
  
  
  render(){
    
    return(
      
      <div>
        
      
      <form  onSubmit={this.handleSubmit} className="container" >
      
      <h3>Create New Appointment</h3>
      
      <br />
        <input class="w3-input w3-border w3-animate-input w3-input w3-hover-gray" 
         onChange={this.changeHandler} 
         style={{width: '30%'}}
          type="text"
          name="time"
          placeholder="time"
        />
        <br />
         <input onChange={this.changeHandler}  class="w3-input w3-border w3-animate-input w3-input w3-hover-gray"
         style={{width: '30%'}}
          type="date"
          name="date"
          placeholder="Date"
        />
    
    
        <button class="btn-appt" type="submit">
          <span>
            <Link to={`/tutors/user/schedule`} type="submit" name="submit" value="Create New Appt" className="submit">Submit </Link> 
          
          </span>
          </button>
      </form>
      </div>
    )
    }
} export default ApptForm;