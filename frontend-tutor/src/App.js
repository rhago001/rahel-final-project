
import React, {Component} from 'react'
import Navbar from './components/Header/Navbar';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Header/pages/Home'
import Login from './components/LogInOut/Login'
// import Profile from './components/LogInOut/Profile'
import TutorReview from './components/tutors/TutorReview'
import MainContainer from './components/tutors/MainContainer';
import DisComments from './components/Discussion/DisComments'
import ApptForm from './components/Form/ApptForm'
import EditAppt from './components/Form/EditAppt'
import ReviewForm from './components/Form/ReviewForm'
import ApptContainer from './components/appt/ApptContainer'






class App extends React.Component {


  state ={
    currentUser: null,
    logged_in: false,
    display: false,
    loaded:false,
    tutors:[]

  }


  componentDidMount(){
    {
    let token= localStorage.getItem("token")
    if(token){
      fetch('http://localhost:3000/profile', {headers: {"Authentication": `Bearer ${token}`}})
      .then( res => res.json())
      .then(user => this.updateCurrentUser(user))
    }}

   { fetch(`http://localhost:3000/tutors`)
    .then( res => res.json())
    .then( data => this.setState({
      tutors: data,
      loaded: true
    })
    )
  }
  }

    updateCurrentUser =(user) => {
      this.setState({
        currentUser: user,
        logged_in: true
      })
    }

    handleClick = () => {
      let newBoolean = !this.state.display
      this.setState({
        display: newBoolean
      })
    }

  
   
      // addAppt=(appt) => {
      //   console.log(appt)
      //   this.setState({tutors: [...this.state.tutors.appointments, appt]})

        // fetch(`http://localhost:3000/tutors`)
        // .then( res => res.json())
        // .then( data => this.setState({
        //   tutors: data,
        //   loaded: true
        // }))
        
        //  }  
          


    

  render() {

    return (
      
      <>
      <Router>

          <Navbar logged_in={this.state.logged_in} updateCurrentUser={this.updateCurrentUser} handleClick={this.handleClick}/>
          <Switch>
            <Route path='/' exact component= {Home} />
            <Route path='/tutors' exact component= {MainContainer} />
            {/* <Route exact path="/tutors/:id/schedule/profile" render={() => < Profile />}/> */}
            
            <Route exact path="/tutors/:id" render={(routerProps) => < TutorReview {...routerProps} user={this.state.currentUser}/>}/>

            {this.state.display 
            ?
            // < EditAppt handleClick={this.handleClick}/>
            <Route exact path="/appointments/:id/edit" render= {(routerprops) => < EditAppt handleClick={this.handleClick}/>}/>
            : 
            null
          }
            <Route exact path="/discussion" render={(routerProps) => < DisComments user={this.state.currentUser}/>}/>

            <Route exact path="/tutors/user/schedule" render={(routerProps) => < ApptContainer {...routerProps} 
            // tutors={this.state.tutors}
            // loaded={this.state.loaded}
            // addAppt={this.addAppt}
            handleClick={this.handleClick} user={this.state.currentUser}/>}/>

            <Route exact path="/tutors/:id/schedule" render={(routerProps) => < ApptForm {...routerProps} 
            // addAppt={this.addAppt}
            user={this.state.currentUser}/>}/>

            <Route exact path="/tutors/:id/review" render={(routerProps) => < ReviewForm {...routerProps} 
            user={this.state.currentUser} />}/>
            
            <Route exact path="/login" render={() => {
              return this.state.currentUser !== null ?
              <Redirect to="/"/>:
              <Login updateCurrentUser={this.updateCurrentUser} handleClick={this.handleClick}/>
              
            }
          }/>
            
          </Switch>
        </Router>
        
     </> 

    )

  }
}

export default App;
