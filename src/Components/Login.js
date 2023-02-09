// import React, { useState } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginStyled } from "./Styled-Components/LoginStyled";
import axios from "axios";
import logo from '../Images/FCA_logo-removebg-preview.png'
// import { useDispatch, useSelector } from "react-redux";
// import logo from '../Images/FCA_logo-removebg-preview.png'
import { useDispatch, useSelector } from "react-redux";
// import { Add_vehicle } from "../Redux/Reducers/vehicle";


const Login = () => {

  const navigate = useNavigate();
  const [username,setUsername]=useState('');
  const [userpassword,setUserpassword]=useState('');
  const [error,setError]=useState('');
  

 

  
const onSubmitHandler=(e)=>{
  e.preventDefault();
 let mydata={username:username,password:userpassword};
 axios.post(' https://easy-gray-camel-sock.cyclic.app/login',mydata).then((response)=>{
  if(response)
  {
    localStorage.setItem('username',response.data.username);
    alert("Successfully logged in");
    navigate('/defect-dashboard');
  }
 }).catch((err)=>{
  console.log(err);
  let response=err.response.data;
  alert(response);
 });
 
 
 

}
  

  
  

  return (
    <LoginStyled className="cantainer d-flex">
      <div className="logo">
          <img src={logo} alt="logo" />
      </div>
      <div className="LoginCart">
        <div className="Login-creaditnal">
          <form onSubmit={onSubmitHandler}>
            <div className="mb-1">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label"
              ></label>
              <input
                type="text"
                className="form-control text-center"
                placeholder="USERNAME"
                onChange={(e)=>setUsername(e.target.value)}
                
                
              />
            </div>
            <div className="mb-1">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label"
              ></label>
              <input
                type="password"
                placeholder="PASSWORD"
                className="form-control text-center"
                onChange={(e)=>setUserpassword(e.target.value)}
              
              />
            </div>
            
            <div className="buttons d-flex ">
              <button type="submit" className="btnStyle" role="button">LOGIN</button>
              <span
                onClick={() => navigate("/admin-login")}
              >     
                ADMIN LOGIN
              </span>
            </div>
          </form>
        </div>
      </div>
    </LoginStyled>
  );
};

export default Login;
