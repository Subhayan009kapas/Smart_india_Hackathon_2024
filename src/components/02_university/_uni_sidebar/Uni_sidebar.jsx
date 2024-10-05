import React from "react";

import { Link, NavLink } from "react-router-dom";
import Uni_banner from "../_uni_banner/Uni_banner";

import './_uni_sidebar_02.css'


function Uni_sidebar() {
  return (
    <>
      
      <div class="sidenav">

<div class="imagecontainer">
  <img id="university_img" src="/src/assets/st_icon_bright.png"  />
</div>

<div class="nav-itmes">
  <label class="label">Students</label>
  <hr class="hr" />
  <NavLink to="/university/add_student"  ><p class="ff">Add New Student</p></NavLink>
  <NavLink to="/university/view_student"><p class="ff">View Student Details</p></NavLink>
</div>

<div class="nav-itmes">
  <label class="label">Faculty</label>
  <hr class="hr" />
  <NavLink to="/university/add_faculty"  ><p class="ff" >Add New Faculty</p></NavLink>
  <NavLink to="/university/view_faculty" ><p class="ff" >View Faculty Details</p></NavLink>
</div>

<div class="nav-itmes">
  <label class="label">Courses</label>
  <hr class="hr" />
  <NavLink to="/university/view_course" > <p class="ff">View Courses</p></NavLink>
  <NavLink to="/university/add_course" ><p class="ff">Create Courses</p></NavLink>  
</div >
<div class="nav-itmes"> 
  <label class="label">Certificate</label>
  
<hr class="hr" />
  <NavLink to="/university/upload_certificate" ><p class="ff">Upload Certificate</p></NavLink>
</div>

</div>


     
    </>
  );
}

export default Uni_sidebar;
