import React, {Component} from 'react'
import './ApptCard.css'
import {Link } from 'react-router-dom'



class ApptCard extends Component {


  
  render() {


    return(
      
      
      <>
      
         {this.props.appt.appointments.map( appoint => 
              
          <div>
            {
              (appoint.user_id === this.props.user.id) ?
              
              <div class="column">
              <div class= "card">
                
                 <img src= {this.props.appt.image }/>
                 <h4>you have appointment with <br />{this.props.appt.name}</h4>
                 <h5>on: {appoint.date} </h5>
                 <h5 style={{boarderleft: '20px'}}>at: {appoint.time} </h5>
                 

                <button class="btnAppt"> 
                    <span  onClick={this.props.handleClick}>
                       Edit </span>

                {/* <Link to={`/appointments/${this.props.appt.id}/edit`}> Edit </Link> */}
                </button>
          
               <button class="btnAppt">
                <span> <i class="fa fa-trash" ></i> 
                   
                </span>
               </button>
              </div>
              </div>
            :null
            }
            </div>
            )}
           
    </>
    )
   }
} export default ApptCard;