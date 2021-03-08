import React,{Component} from 'react'
import './Tutorcard.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'
// import Review from './Review'


class TutorsCard extends Component {

  render () {
    
    return(
      
      <>
      {/* <Review reviews={this.props}/> */}
      <div class="column">
      <div class= "card">
        <h3>{this.props.tutor.name}</h3>
        <img src={this.props.tutor.image}/>
        <h6>years of Experience: {this.props.tutor.years_experience}</h6>
        <h6>FlatIron Alum?  {this.props.tutor.flatiron_alum}</h6>
        <h6>Price: $ {this.props.tutor.price}/hr</h6>
        <button class="btnRev">
          
          
        <span> 
            <Link to={`/tutors/${this.props.tutor.id}`}> Select </Link> 
            
         </span>
        
        
        </button>


      </div>
      </div>
    </>
  )
  

    
  }
}
export default TutorsCard;


