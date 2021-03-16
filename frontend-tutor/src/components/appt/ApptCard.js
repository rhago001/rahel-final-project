import React, {Component} from 'react'
import './ApptCard.css'
import {Link } from 'react-router-dom'



class ApptCard extends Component {


  
  render() {

let {deleteAppt, appts,tutor} =this.props
    return(
      
      
      <>
      
         {appts.map( appt => 
              
          <div>
            {
              (appt.user_id === this.props.user.id) ?
              
              <div class="column">
              <div class= "card">
                
                 <img src= {tutor.image }/>
                 <h4>you have an appointment with <br />{tutor.name}</h4>
                 <h5>on: {appt.date} </h5>
                 <h5 style={{boarderleft: '20px'}}>at: {appt.time} </h5>
                 

                <button class="btnAppt"> 
                    <span  onClick={this.props.handleClick}>
                    <i class="fas fa-edit"></i> </span>
              
                {/* <Link to={`/apptments/${this.props.appt.id}/edit`}> Edit </Link> */}
                </button>
          
               <button class="btnAppt" onClick={() => deleteAppt(appt) } >

                <span> <i class="fa fa-trash" ></i> 
                   
                </span>
               </button>
              </div>
              </div>
            :null
          }
          </div>
            )
        }
    </>
    )
   }
} export default ApptCard;