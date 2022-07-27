import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'



const Header = () => {
    return (
        <>
            <header className='header'>
                <div className='container d_flex'>
                    <div className='logo'>
                    <li><h3><NavLink to="/Home">FORM.</NavLink>
                    </h3> </li>
                        </div>

                    <div className='navlink'>
                        <ul className='link f_flex'>
                        
                           <li><NavLink to="/Signup">Sign Up</NavLink>
                           </li>

                            <li><NavLink to="/Signin" className="home-btn">Sign In</NavLink></li>

                        </ul>

      
                    </div>

                    </div>
            </header>   


        </>
    )
}

export default Header
