import React from 'react'
import { Outlet } from 'react-router-dom'
function Comp_layout() {
        return (
                <>

                <div>Company layout</div>
                <Outlet/>
                
                </>
                
        )
}

export default Comp_layout
