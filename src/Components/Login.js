// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginStyled } from "./Styled-Components/LoginStyled";
import logo from '../Images/FCA_logo-removebg-preview.png'
// import { useDispatch, useSelector } from "react-redux";
// import { Add_vehicle } from "../Redux/Reducers/vehicle";

const Login = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch()

  // const [vehicle , setVehicle] =useState({
  //   model:"", win_number :"",defect:[] , repaired:[]
  // })

  // const onChangeHandler =(e)=>{
  //       let name = e.target.name;
  //       let value = e.target.value
  //      setVehicle({ ...vehicle, [name]: value })
  // }

  const onSubmitHandler =(e)=>{
      e.preventDefault();
      // dispatch(Add_vehicle(vehicle))
      navigate('/defect-dashboard')
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
              
              />
            </div>
            
            <div className="buttons d-flex ">
              <button type="button" className="btnStyle" role="button" onClick={() => navigate("/defect-dashboard")}>LOGIN</button>
              <span className="span-heding"
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
