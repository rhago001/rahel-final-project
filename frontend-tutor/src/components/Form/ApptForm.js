import React, {Component, useState} from 'react'
import './ApptForm.css'
import { BrowserRouter as Router, Link, Redirect, useHistory } from 'react-router-dom'

function ApptForm ({user, match, location}) {
  //  let trainer_id= this.props.match.params.id
   //user_id: this.props.user.id
   //  user_id: "",
   //  trainer_id: ""

  //  constructor(props) {
  //   super(props)
  //   this.state = { 
  //     time: '',
  //      date: "",
  //      user_id: "",
  //      trainer_id: ""
  //     }
  //   this.handleSubmit = this.handleSubmit.bind(this)

const [date, setDate] = useState("")
const [time, setTime] = useState("")
const [user_id, setUser_id] = useState("")
const [trainer_id, setTrainer_id] = useState("")
  
  
  let history= useHistory()

        // state = { 
        // time: '',
        //  date: "",
        //  user_id: ""
        // }
   

  //  const changeHandler = (e) => {
  //     console.log("value", e.target.value)
  //     console.log("name", e.target.name)

      // const {name: fieldName, value}= e.target
      // this.setState({
      //  [fieldName]: value
    
    
      // this.setState({
      //   [e.target.name]: e.target.value
      // })
      
    // }
    
    const handleSubmit =(e) =>{
      e.preventDefault()
      // console.log(this.state)
      // debugger
      let newAppt = {
        time: time,
        user_id: user.id,
        trainer_id: match.params.id,
        date: date
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
          location.params.addAppt(data)
          history.push(`/tutors/user/schedule`)   
          // e.target.reset()
        }       
        )
      }
  
  
    
    return(
      
      <div>
        
      
      <form  onSubmit={handleSubmit} className="container" >
      
      <h3>Create New Appointment</h3>
      
      <br />
        <input class="w3-input w3-border w3-animate-input w3-input w3-hover-gray" 
         onChange={(e)=> setTime(e.target.value)} 
         style={{width: '30%'}}
          type="text"
          name="time"
          placeholder="time"
        />
        <br />
         <input onChange={(e)=> setDate(e.target.value)}  class="w3-input w3-border w3-animate-input w3-input w3-hover-gray"
         style={{width: '30%'}}
          type="date"
          name="date"
          placeholder="Date"
        />
    
    
        
          <span>
           <button class="btn-appt" type="submit">Submit</button> 
          
          </span>
      </form>
      </div>
    )
    
} export default ApptForm;