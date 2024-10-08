import React from "react";

import { Link, NavLink } from "react-router-dom";
import Uni_banner from "../_uni_banner/Uni_banner";


import "./_uni_sidebar_02.css";
import { FaUserPlus, FaEye, FaUserFriends ,FaPlusCircle ,FaCertificate } from "react-icons/fa";

function Uni_sidebar() {
  return (
    <>
      <div class="sidenav">
        <div class="imagecontainer">
        <img src="https://i.ibb.co/mSKn62q/university-building.png" alt="university-building" border="0"/>
        </div>

        <div class="nav-itmes">
          <label class="label">Students</label>
          <hr class="hr" />
          <NavLink to="/university/add_student">
            <p class="ff">
              <FaUserPlus className="nav-icon" />
              <p className="inner-txt">Add New Student</p>
            </p>
          </NavLink>
          <NavLink to="/university/view_student">
            <p class="ff">
              <FaEye className="nav-icon" />
              <p className="inner-txt">View Student Details</p>
            </p>
          </NavLink>
        </div>

        <div class="nav-itmes">
          <label class="label">Faculty</label>
          <hr class="hr" />
          <NavLink to="/university/add_faculty">
            <p class="ff">
              <FaUserPlus className="nav-icon" />
              <p className="inner-txt">Add New Faculty</p>
            </p>
          </NavLink>
          <NavLink to="/university/view_faculty">
            <p class="ff">
              <FaUserFriends className="nav-icon" />
              <p className="inner-txt"> View Faculty Details</p>
            </p>
          </NavLink>
        </div>

        <div class="nav-itmes">
          <label class="label">Courses</label>
          <hr class="hr" />
          <NavLink to="/university/view_course">
            {" "}
            <p class="ff">
            <FaEye className="nav-icon" />
            <p className="inner-txt">View Course</p>
            </p>
          </NavLink>
          <NavLink to="/university/add_course">
            <p class="ff">
            <FaPlusCircle className="nav-icon" />
            <p className="inner-txt">Add Course</p>
            </p>
          </NavLink>
        </div>
        <div class="nav-itmes">
          <label class="label">Certificate</label>

          <hr class="hr" />
          <NavLink to="/university/upload_certificate">
            <p class="ff">
            <FaCertificate className="nav-icon"/>
        
            <p className="inner-txt">Add Certificate</p>
            </p>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Uni_sidebar;
