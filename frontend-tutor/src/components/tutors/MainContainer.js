import React, {Component} from 'react'
import TutorsContainer from './TutorsContainer'



class MainContainer extends Component {

  
  
      state={
  
        tutors: [],
        loaded: false
      }

  componentDidMount () {

    fetch('http://localhost:3000/tutors')
    .then( res => res.json())
    .then( data => this.setState({
      tutors: data,
      loaded: true
    }))
  }

  // tutor = tutors.map( tutor => {
  //   return (<TutorsCard key={tutor.id} tutor={tutor} > </TutorsCard>)
  // })
  
  
  render() {

    return(

      <div>
            <TutorsContainer tutors={this.state.tutors} loaded={this.state.loaded}/>
    </div>
    )
  }
}
export default MainContainer;

 