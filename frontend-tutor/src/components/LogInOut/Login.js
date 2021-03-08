import React, { Component } from "react";
import './LogIn.css'
import '../tutors/Tutorcard.css'
// import { withRouter } from "react-router";
// import {Button, Form, Segment, Message} from "semantic-ui-react"

class login extends Component {
 
  state = {
    email: "",
    password: "",
  };
 
  handleChange = (event) => {
 
    const { name, value } = event.target;
   
    this.setState({
      [name]: value,
    });
  };


  handleLoginSubmit = (event) => {
    event.preventDefault();

    event.target.reset();
    const { email, password } = this.state;
    const user = { email, password };
   
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        email: this.state.email,
        password: this.state.password
        
       }),
    })
      .then((r) => r.json())
      .then((data) => {
        if(data.authenticated) {
          this.props.updateCurrentUser(data.user)
          localStorage.token = data.token;
        }else
        alert("inccorrect email or password"
        )
        

        // this.props.setCurrentUser(response.user);
      });
  };

  render() {
    return (
      
      <div>
        
      
        <form className="w3-container"onSubmit={this.handleLoginSubmit} >
          
          <input class="w3-input w3-border w3-animate-input w3-input w3-hover-gray"
           style={{width: '30%'}}
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <br />
          <input class="w3-input w3-border w3-animate-input w3-input w3-hover-gray"
           style={{width: '30%'}}
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
         
          <button class="btn-login" type="submit">
            <span>
            Submit
            </span>
            </button>
        </form>
        </div>
    );
  }
}

export default login;

{/* <form class="w3-container">

<input class="w3-input w3-animate-input" type="text" style="width:135px"><br>
<input class="w3-input w3-border w3-animate-input" type="text" style="width:30%">
</form> */}