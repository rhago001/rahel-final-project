// import React, {useState,useRef,useEffect} from 'react'
// // import './App.css'

// function LogInOut () {
//   const outside = useRef()
//   const [isOpen, setIsOpen] = useState(false)


//   const handleClick= e => {
//     if(outside.current.contains(e.target)) {
//       return
//     }
//     setIsOpen(false)
//   }

//   useEffect(()=> {
//     const getClick = document.addEventListener('click', handleClick)
    
//     return() => {
//       getClick() 

//     }
//   }, [])

// return (
// <div className='App' ref={outside}>
//   <button onLick ={(e) => setIsOpen(!isOpen)}> toggler modal</button>
//   {isOpen ? (
//   <div className="modal">
//    <p> modal is opennnn </p>
//   <h1> its opened</h1>

//   </div>
//   ) : null}
// </div>
// )

// }
// export default LogInOut;
