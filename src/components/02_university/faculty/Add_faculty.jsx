import { React, useState } from "react";
import "./_add_faculty_02.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

function AddFaculty() {
  const [facultyDetails, setfacultyDetails] = useState({
    name: "",
    stream: "",
    mob: "",
    dob: "",
    salary: "",
    email: "",
    gender: "",
    address: "",
    profile_pic: "",
  });
  const [isFacultySuccess , setisFacultySuccess]=useState(false)
  const [isBoxVisible, setIsBoxVisible] = useState(false);
  const[isFacultyForm_seen , setisFacultyForm_seen]=useState(true)

  const changeInputValue = (e) => {
    setfacultyDetails({ ...facultyDetails, [e.target.name]: e.target.value });
  };

  const printFacultyDetais = (e) => {
    e.preventDefault();
    console.log(facultyDetails);
    const {
      name,
      stream,
      mob,
      dob,
      salary,
      email,
      gender,
      address,
      profile_pic,
    } = facultyDetails;
    if (
      name === "" ||
      stream === "" ||
      mob === "" ||
      dob === "" ||
      salary === "" ||
      email === "" ||
      gender === "" ||
      address === "" ||
      profile_pic === ""
    ) {
      alert("🚫 Please fill out all fields.😡");
      setisFacultySuccess(false)
    }
    else{
      setisFacultySuccess(true)
      setisFacultyForm_seen(false)
     
    }
  };


  const openAddCard = () => {
    setIsBoxVisible(true);
  };

  const closeAddCard = () => {
    setIsBoxVisible(false);
  };

  const boxStyle = {
    display: isBoxVisible ? "block" : "none",
    position: "fixed",
    top: 0,
    right: 0,
  };

  return (
    <>
      <div className="faculty-add">
        <div className="faculty-add-con">
          <div className="faculty-heading" onClick={openAddCard}>
            <h2>Add Faculty</h2>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
        <div className="faculty-whole-form-container" style={boxStyle}>
          {isFacultyForm_seen  && (
             <div className="faculty-add-form">
             <div className="faculty-form-header">
               <div className="faculty-image">
                 <div className="faculty-person">
                   <img
                     src="https://i.ibb.co/vBQzCmM/teachers-day.png"
                     alt="teachers-day"
                     border="0"
                   />
                 </div>
                 <div className="faculty-right-arrow">
                   <img
                     src="https://i.ibb.co/5c9RpMD/right-arrow.png"
                     alt="arrow"
                   />
                 </div>
                 <div className="faculty-university">
                   <img
                     src="https://i.ibb.co/1nJZg0T/university-building.png"
                     alt="university"
                   />
                 </div>
               </div>
               <div className="faculty-off-card">
                 <button onClick={closeAddCard}>
                   <FontAwesomeIcon icon={faXmark} />
                 </button>
               </div>
             </div>
             <hr />
             <div className="faculty-form">
               <div className="faculty-form-con">
                 <div className="faculty-con1">
                   <div className="faculty-input-field">
                     <input
                       type="text"
                       required
                       spellCheck="false"
                       name="name"
                       value={facultyDetails.name}
                       onChange={changeInputValue}
                     />
                     <label>Faculty Name</label>
                   </div>
                   <div className="faculty-input-field">
                     <select
                       name="stream"
                       value={facultyDetails.stream}
                       onChange={changeInputValue}
                     >
                       <option>CSE</option>
                       <option>ECE</option>
                       <option>EE</option>
                       <option>ME</option>
                       <option>CIVIL</option>
                     </select>
                   </div>
 
                   <div className="faculty-input-field">
                     <input
                       type="text"
                       required
                       spellCheck="false"
                       name="mob"
                       value={facultyDetails.mob}
                       onChange={changeInputValue}
                     />
                     <label>Mobile No:</label>
                   </div>
                   <div className="faculty-input-field">
                     <input
                       type="text"
                       required
                       spellCheck="false"
                       name="dob"
                       value={facultyDetails.dob}
                       onChange={changeInputValue}
                     />
                     <label>DOB</label>
                   </div>
                 </div>
                 <div className="faculty-con2">
                   <div className="faculty-input-field">
                     <input
                       type="text"
                       required
                       spellCheck="false"
                       name="salary"
                       value={facultyDetails.salary}
                       onChange={changeInputValue}
                     />
                     <label>Salary:</label>
                   </div>
 
                   <div className="faculty-input-field">
                     <input
                       type="email"
                       required
                       spellCheck="false"
                       name="email"
                       value={facultyDetails.email}
                       onChange={changeInputValue}
                     />
                     <label>Email:</label>
                   </div>
 
                   <div className="faculty-input-field">
                     <select
                       name="gender"
                       value={facultyDetails.gender}
                       onChange={changeInputValue}
                     >
                       <option>Male</option>
                       <option>Female</option>
                     </select>
                   </div>
                 </div>
               </div>
               <div className="faculty-input-field" id="faculty_address">
                 <input
                   type="text"
                   required
                   spellCheck="false"
                   name="address"
                   value={facultyDetails.address}
                   onChange={changeInputValue}
                 />
                 <label>Local Address:</label>
               </div>
               <div className="faculty-input-field" id="faculty_profile-url">
                 <input
                   type="text"
                   required
                   spellCheck="false"
                   name="profile_pic"
                   value={facultyDetails.profile_pic}
                   onChange={changeInputValue}
                 />
                 <label>
                   <img
                     src="https://cdn-icons-png.flaticon.com/128/7610/7610196.png"
                     width={"15px"}
                     style={{ position: "relative", left: "20px" }}
                     alt="profile icon"
                   />
                   Profile-Url
                 </label>
               </div>
               <div className="faculty-submit">
                 <button onClick={printFacultyDetais}>Submit</button>
               </div>
             </div>
           </div>

          )}
         
          {/* success */}

          {isFacultySuccess && (
            <div className="facultyadd-confirm-container">
            <div className="facultyadd-confirm-card">
              <div className="facultyadd-checkmark-container">
                <img
                  src="https://img.icons8.com/?size=48&id=Mw4ZtZQHm38P&format=gif"
                  alt="Success"
                  className="facultyadd-checkmark-gif"
                />
              </div>
              <div className="facultyadd-message">
                <h2>Success!</h2>
                <p>Faculty data has been created successfully.</p>
              </div>
            </div>
          </div>
          )}
           {/* success */}
        </div>
      </div>
    </>
  );
}

export default AddFaculty;
