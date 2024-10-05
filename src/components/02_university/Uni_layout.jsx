import React from 'react'
import { Outlet } from 'react-router-dom'
import Uni_banner from './_uni_banner/Uni_banner';
import Uni_sidebar from './_uni_sidebar/Uni_sidebar';
import './_uni_layout_02.css'

function Uni_layout() {
    return (
    <>
   
        
        <div class="container">
          <Uni_sidebar/>
          <div class="right-container">
         
             <Uni_banner/>
             <div id="content"> 
                <Outlet/>
                <div class= "footer">
                  this is a footer 
                </div>
             </div>
          
          </div>
        
        </div>

    </>
    )
  }

export default Uni_layout;