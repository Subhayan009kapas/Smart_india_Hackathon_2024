import React, { useState } from "react";
import "./_add_course_02.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus } from "@fortawesome/free-solid-svg-icons";

const AddCourse = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [iscardvisisble, setisCardVisible] = useState(true);
  const[confirmCardVisible , setConfirmcardVisisble]=useState(false)

  const handleClose = () => {
    setIsVisible(false);
  };
  const handleOpen = () => {
    setIsVisible(true);
  };

  const [courseData, setCourseData] = useState({
    courseName: "",
    courseCode: "",
    description: "",
    duration: "",
    instructor: "",
    category: "",
  });

  const handleChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(courseData); // Handle course creation logic
    setCourseData({
      courseName: "",
      courseCode: "",
      description: "",
      duration: "",
      instructor: "",
      category: "",
    });
    const { courseName, courseCode, description, duration, instructor, category } = courseData;

    if(courseName === "" ||
      courseCode === "" ||
      description === "" ||
      duration === "" ||
      instructor === "" ||
      category === ""){
        alert("🚫 Please fill out all fields.😡")
        setConfirmcardVisisble(false);
      }
      else{
        setConfirmcardVisisble(true);
       
        setisCardVisible(false);
      }

    
   
  };

  return (
    <>
      <div className="add_course_box" onClick={handleOpen}>
        <h1>Add Course</h1>
        <FontAwesomeIcon icon={faPlus} />
      </div>
      {isVisible && (
        <div className="add-course-container">
          <h2 className="add-course-title"></h2>
          {iscardvisisble && (
            <div className="add-course-card">
              <div className="add-course-form-header">
                <div className="image">
                  <div className="student">
                    <img
                      src="https://i.ibb.co/zhwR4dh/book-1.png"
                      alt="book-1"
                      border="0"
                    />
                  </div>
                  <div className="right-arrow">
                    <img src="https://i.ibb.co/5c9RpMD/right-arrow.png" />
                  </div>
                  <div className="university">
                    <img src="https://i.ibb.co/1nJZg0T/university-building.png" />
                  </div>
                </div>
                <div className="off_card">
                  <button onClick={handleClose}>
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </div>
              </div>
              <hr />
              <form className="course-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="courseName"
                    value={courseData.courseName}
                    onChange={handleChange}
                    required
                  />
                  <label>Course Name</label>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="courseCode"
                    value={courseData.courseCode}
                    onChange={handleChange}
                    required
                  />
                  <label>Course Code</label>
                </div>

                <div className="form-group">
                  <textarea
                    name="description"
                    value={courseData.description}
                    onChange={handleChange}
                    required
                  />
                  <label>Description</label>
                </div>

                <div className="form-group">
                  <input
                    type="number"
                    name="duration"
                    value={courseData.duration}
                    onChange={handleChange}
                    required
                  />
                  <label>Duration (weeks)</label>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="instructor"
                    value={courseData.instructor}
                    onChange={handleChange}
                    required
                  />
                  <label>Instructor</label>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="category"
                    value={courseData.category}
                    onChange={handleChange}
                    required
                  />
                  <label>Category</label>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  onClick={handleSubmit}
                >
                  Create Course
                </button>
              </form>
            </div>
          )}

          {/* for confirmation of submition */}

          {confirmCardVisible && (
            <div className="submit-confirm-card-container">
            <div className="submit-confirm-card">
              <div className="submit-confirm-checkmark-container">
                <img
                  src="https://img.icons8.com/?size=48&id=Mw4ZtZQHm38P&format=gif"
                  alt="Success"
                  className="submit-confirm-checkmark-gif"
                />
              </div>
              <div className="submit-confirm-message">
                <h2>Success!</h2>
                <p>Course has been Created successfully.</p>
              </div>
            </div>
          </div>
          )}
          {/* for confirmation of submition */}
        </div>
      )}
    </>
  );
};

export default AddCourse;
