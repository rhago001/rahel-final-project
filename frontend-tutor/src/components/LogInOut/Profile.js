import React, {Component} from 'react'
import {Card} from "semantic-ui-react"
// import ApptCard from '../appt/ApptCard'

const Profile =(props) => {
   return (
   props.user? (
     <div>
     {props.user.username} 
     </div>   
   ):null
   )
 }



export default Profile;

