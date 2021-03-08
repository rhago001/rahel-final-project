import React from 'react'
// import '../../App.css'
import {Button} from './Button'
import './MainBackground.css'

function MainBackground () {

  return(

    <div className="mainbackground-container">
      <video src='/rotate.mp4' autoPlay loop muted/>
      <h1> You need help? </h1>
      <p> We are here for you</p>
      <div className="mainbackground-butns">
        <Button className='butns'
        buttonStyle='butns--outline'
        buttonSize='butns--large'
        >
          Get Started
        </Button>
        </div> 
    </div>
  )
}
export default MainBackground;