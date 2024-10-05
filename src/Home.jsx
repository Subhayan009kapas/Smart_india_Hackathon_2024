import React from 'react'
import { Link , NavLink } from 'react-router-dom'
import './Home_02.css'
function Home() {
          return (
            <>
            <h1>This is a landing page </h1>
            <div id="parties">
                <div class="client_container">   
                      <NavLink to="/university" >
                                           University
                         </NavLink>
                </div>
                <div class="client_container">   
                      <NavLink to="/student" >
                                          Student
                         </NavLink>
                </div>
                <div class="client_container">   
                      <NavLink to="/aicte" >
                                          Aicte
                         </NavLink>
                </div>
                <div class="client_container">   
                      <NavLink to="/company" >
                                         Company
                         </NavLink>
                </div>
                </div>
            </>
        
          )
}

export default Home
