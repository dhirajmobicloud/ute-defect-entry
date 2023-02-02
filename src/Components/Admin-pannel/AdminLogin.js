import React from 'react'
import { useNavigate } from 'react-router-dom'


const AdminLogin = () => {
    const navigate = useNavigate()
  return (
    <div onClick={()=>navigate('/admin-pannel')}>AdminLogin</div>
  )
}

export default AdminLogin