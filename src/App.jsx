import { useState } from "react";

import "./App.css";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import LandingPage from "./LandingPage";
import Stu_layout from "./components/01_student/Stu_layout";
import Aic_layout from "./components/03_aicte/Aic_layout";
import Comp_layout from "./components/04_company/Comp_layout";

// university purpose
import Upload_certificate from "./components/02_university/certification/Upload_certificate";
import Add_course from "./components/02_university/course/Add_course";
import View_course from "./components/02_university/course/View_course";
import Add_faculty from "./components/02_university/faculty/Add_faculty";
import View_faculty from "./components/02_university/faculty/View_faculty";
import Add_student from "./components/02_university/student/Add_student";
import View_student from "./components/02_university/student/View_student";
import Uni_layout from "./components/02_university/Uni_layout";
import Home from "./Home";

//Aicte purpose
import Add_university from "./components/03_aicte/add_university/Add_university";
import Monitoring from "./components/03_aicte/monitoring/Monitoring";
import Verify_university from "./components/03_aicte/verify_university/Verify_university";

// Company purpose
import Verify_degree from "./components/04_company/verify_degree/Verify_degree";

// Student Purpose
import Calender from "./components/01_student/calender/Calender";
import Admit_card from "./components/01_student/exams/Admit_card";
import Exam_form from "./components/01_student/exams/Exam_form";
import Exam_routine from "./components/01_student/exams/Exam_routine";
import Marks from "./components/01_student/marks/Marks";
import Password from "./components/01_student/password/Password";
import Payment from "./components/01_student/payment/Payment";
import Routine from "./components/01_student/routine/Routine";
import Student_detail from "./components/01_student/student_detail/Student_detail";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LandingPage />}>
        <Route path="" element={<Home />} />

        {/* student */}

        <Route path="student/" element={<Stu_layout />}>
          <Route path="calender" element={<Calender />} />
          <Route path="admit_card" element={<Admit_card />} />
          <Route path="exam_form" element={<Exam_form />} />
          <Route path="exam_routine" element={<Exam_routine />} />
          <Route path="marks" element={<Marks />} />
          <Route path="password" element={<Password />} />
          <Route path="payment" element={<Payment />} />
          <Route path="routine" element={<Routine />} />
          <Route path="student_detail" element={<Student_detail />} />
          
        </Route>


        {/* university */}
        <Route path="university/" element={<Uni_layout />}>
          <Route path="upload_certificate" element={<Upload_certificate />} />
          <Route path="add_course" element={<Add_course />} />
          <Route path="view_course" element={<View_course />} />
          <Route path="add_faculty" element={<Add_faculty />} />
          <Route path="view_faculty" element={<View_faculty />} />
          <Route path="add_student" element={<Add_student />} />
          <Route path="view_student" element={<View_student />} />
        </Route>
        {/* university */}

        {/* Aicte */}

        <Route path="aicte/" element={<Aic_layout />}>
          <Route path="add_university" element={<Add_university />}></Route>
          <Route path="monitoring" element={<Monitoring />}></Route>
          <Route
            path="verify_university"
            element={<Verify_university />}
          ></Route>
        </Route>

        {/* Aicte */}

        {/* company */}

        <Route path="company/" element={<Comp_layout />}>
          <Route path="verify_degree" element={<Verify_degree />}></Route>
        </Route>

        {/* company */}
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
