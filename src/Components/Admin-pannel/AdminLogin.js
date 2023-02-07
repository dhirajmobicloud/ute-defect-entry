import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AdminPannelStyled } from '../Styled-Components/AdminPannelStyled'


const AdminLogin = () => {
    const navigate = useNavigate()
  return (
    <AdminPannelStyled>

    <h1 className='text-center' onClick={()=>navigate('/admin-pannel')}>AdminLogin</h1>

    </AdminPannelStyled>
  )
}

export default AdminLogin