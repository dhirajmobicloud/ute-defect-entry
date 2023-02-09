import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar.js'


const AdminDashboard = () => {

    const navigate = useNavigate();

    useEffect(()=>{
        navigate('admin-dashboard')
    },[])

  return (
    <div>
    <Sidebar/>
    <Outlet/>
    </div>
  )
}

export default AdminDashboard