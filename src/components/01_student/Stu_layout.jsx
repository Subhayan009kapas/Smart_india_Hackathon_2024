import React from 'react'
import { Outlet } from 'react-router-dom'
function Stu_layout() {
          return (
                    <>
                     <div>Student layout</div>
                     <Outlet/>
                    </>
                   
          )
}

export default Stu_layout
