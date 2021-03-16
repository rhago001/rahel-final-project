import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {
  // let {location: {pathname} } =props
  let logged_in = props.Logged_in;
  // debugger

  

  let logout =() => {
    localStorage.removeItem("token")
    props.updateCurrentUser(null)

  }

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Flatiron Tutors  
          {/* <p>{"      "}</p> */}
            <i class="fab fa-affiliatetheme"></i>          
        </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link
                to='/tutors'
                className='nav-links'
                onClick={closeMobileMenu}
              >Tutors
                
              </Link>
            </li>


            <li className='nav-item'>
              <Link
                to='/discussion'
                className='nav-links'
                onClick={closeMobileMenu}

              >Ask Question
                
              </Link>
            </li>

            {props.logged_in ? (
                
              <li className='nav-item'>
              <Link
                to='/tutors/user/schedule'
                className='nav-links'
                onClick={closeMobileMenu}

              >Schedules
                
              </Link> 
              </li>):null
              }
      
              {props.logged_in ? (
                <div>        
               <li className='nav-item'>
               <Link
                 to='/login'
                 className='nav-links'
                 onClick={closeMobileMenu}
                 onClick={logout}

 
               >logout
                 
               </Link>
             </li>
             </div>      

              ):               
            <Link
              to='/login'
              // className='nav-links-mobile'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Login
            </Link>
            
               
            }

                  
            
          </ul>


          {/* {button && <Button buttonStyle='btn--outline'>SIGN IN</Button>}  */}
            {/* {props.logged_in ? (

              {button && <Button buttonStyle='btn--outline'>Logout</Button>}):
          

            } */}
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;