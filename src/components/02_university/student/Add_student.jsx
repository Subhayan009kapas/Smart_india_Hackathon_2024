import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./_add_student_02.css";
// import profile from './src/assets/profile_icon.png'

function Add_student() {
  const [StudentData , setStudentData]=useState({
    name:"",
    stream:"",
    enrollment_no:"",
    mob:"",
    dob:"",
    registration_no:"",
    degree:"",
    email:"",
    admission_year:"",
    gender:"",
    address:"",
    profile_pic:"",

  })
  const [isSuccess , setisSuccess]=useState(false)
  const [isStudentAddForm_visible , setisStudentAddForm_visible]=useState(true)
  const [IsBoxVisible, setIsBoxVisisble] = useState(false);

  const handleInputChange=(e)=>{
    setStudentData({...StudentData ,[e.target.name]:e.target.value})

  }
  const submitData=()=>{
    console.log(StudentData)
    const {
      name,
      stream,
      enrollment_no,
      mob,
      dob,
      registration_no,
      degree,
      email,
      admission_year,
      gender,
      address,
      profile_pic
    } = StudentData;

    if(name === "" ||
      stream === "" ||
      enrollment_no === "" ||
      mob === "" ||
      dob === "" ||
      registration_no === "" ||
      degree === "" ||
      email === "" ||
      admission_year === "" ||
      gender === "" ||
      address === "" ||
      profile_pic === ""){
        alert("🚫 Please fill out all fields.😡");
        setisSuccess(false)
      }
      else{
        setisSuccess(true)
        setisStudentAddForm_visible(false)

      }
    
    
   
  }
 

  const open_addCard = () => {
    setIsBoxVisisble(true);
  };
  const off_addCard = () => {
    setIsBoxVisisble(false);
  };

  const boxStyle = {
    display: IsBoxVisible ? "block" : "none",
    // transform: IsBoxVisible  ? "scale(1.1)" : "scale(0.5)",
    // transition: "transform 0.5s ease, opacity 0.5s ease",
    // opacity: IsBoxVisible  ? 1 : 0,

    position: "fixed",
    top: 0,
    right: 0,
  };

  return (
    <>
      <div className="add">
        <div className="add-student-con">
          <div className="heading" onClick={open_addCard}>
            
            <h2>Add Student </h2>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
        <div className="whole-form-container" style={boxStyle}>
        {isStudentAddForm_visible && (
          <div className="student-add-form">
          <div className="form-header">
            <div className="image">
              <div className="student">
                <img src=" https://i.ibb.co/ZL4pPsx/student.png" />
              </div>
              <div className="right-arrow">
                <img src="https://i.ibb.co/5c9RpMD/right-arrow.png" />
              </div>
              <div className="university">
                <img src="https://i.ibb.co/1nJZg0T/university-building.png" />
              </div>
            </div>
            <div className="off_card">
              <button onClick={off_addCard}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          </div>
          <hr></hr>

          <div className="form">
            <div className="form-con" >
              <div className="con1">
                <div className="input-field">
                  <input
                    type="text"
                    required
                    spellCheck="false"
                    name="name"
                    value={StudentData.name}
                    onChange={handleInputChange} 
                  ></input>
                  <label>Student Name </label>
                </div>

                <div className="input-field">
                  {/* <input type="text" required spellCheck="false" name="stream"></input> */}
                  <select  name="stream"   
                   onChange={handleInputChange}
                   value={StudentData.stream} >
                     <option>Stream</option>
                    <option>CSE</option>
                    <option>ECE</option>
                    <option>EE</option>
                    <option>ME</option>
                    <option>CIVIL</option>
                  </select>
                </div>

                <div className="input-field">
                  <input
                    type="text"
                    required
                    spellCheck="false"
                    name="enrollment_no"
                    value={StudentData.enrollment_no}
                    onChange={handleInputChange} 
                  ></input>
                  <label>Enrollment No:</label>
                </div>

                <div className="input-field">
                  <input
                    type="text"
                    required
                    spellCheck="false"
                    name="mob"
                    value={StudentData.mob}
                    onChange={handleInputChange} 
                  ></input>
                  <label>Mobile No : </label>
                </div>

                <div className="input-field">
                  <input
                    type="date"
                    required
                    spellCheck="false"
                    name="dob"
                    value={StudentData.dob}
                    onChange={handleInputChange} 
                  ></input>
                  <label>DOB</label>
                </div>
              </div>
              <div className="con-2">
                <div className="input-field">
                  <input
                    type="text"
                    required
                    spellCheck="false"
                    name="registration_no"
                    value={StudentData.registration_no}
                    onChange={handleInputChange} 
                  ></input>
                  <label>Registration No: </label>
                </div>
                <div className="input-field">
                  <select  name="degree"    
                  onChange={handleInputChange}
                  value={StudentData.degree} >
                     <option> Degree</option>
                    <option>B.Tech</option>
                    <option>BCA</option>
                    <option>BBA</option>
                    <option>MBA</option>
                    <option>BPT</option>
                  </select>
                </div>

                <div className="input-field">
                  <input
                    type="email"
                    required
                    spellCheck="false"
                    name="email"
                    value={StudentData.email}
                    onChange={handleInputChange} 
                  ></input>
                  <label>Email: </label>
                </div>

                <div className="input-field">
                  <input
                    type="text"
                    required
                    spellCheck="false"
                    name="admission_year"
                    value={StudentData.admission_year}
                    onChange={handleInputChange} 
                  ></input>
                  <label>Admission Year: </label>
                </div>

                <div className="input-field">
                  <select name="gender"    
                  onChange={handleInputChange}
                  value={StudentData.gender} >
                     <option>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="input-field" id="address">
              <input
                type="text"
                required
                spellCheck="false"
                name="address"
                value={StudentData.address}
                onChange={handleInputChange} 
              ></input>
              <label>Local Address: </label>
            </div>

            <div className="input-field" id="profile-url">
              <input
                type="text"
                required
                spellCheck="false"
                name="profile_pic"
                value={StudentData.profile_pic}
                onChange={handleInputChange} 
              ></input>
              <label>
                {" "}
                <img
                  src="https://cdn-icons-png.flaticon.com/128/7610/7610196.png"
                  width={"15px"}
                  style={{ position: "relative", left: "20px" }}
                />
                Profile-Url
              </label>
            </div>

            <div className="submit">
              <button onClick={submitData}>Submit</button>
            </div>
          </div>
        </div>
        )}
         
        </div>

        {/* success msg */}
{isSuccess && (
  <div className="student-data-confirm-container">
    <div className="student-data-confirm-card">
      <div className="student-data-checkmark-container">
        <img
          src="https://img.icons8.com/?size=48&id=Mw4ZtZQHm38P&format=gif"
          alt="Success"
          className="student-data-checkmark-gif"
        />
      </div>
      <div className="student-data-message">
        <h2>Success!</h2>
        <p>Student data has been created successfully.</p>
      </div>
    </div>
  </div>
)}
{/* success msg */}

      </div>
    </>
  );
}

export default Add_student;
