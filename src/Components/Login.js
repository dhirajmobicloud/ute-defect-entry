// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginStyled } from "./Styled-Components/LoginStyled";
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
      <div className="LoginCart">
        <div className="Login-creaditnal">
          <form onSubmit={onSubmitHandler}>
            {/* <div className="mb-1">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label"
              ></label>
              <input
                type="text"
                className="form-control"
                placeholder="Vehicle Name"
                onChange={onChangeHandler}
                name="model"
                value={vehicle.model}
              />
            </div> */}
            {/* <div className="mb-1">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label"
              ></label>
              <input
                type="text"
                placeholder="Vehicle Id"
                className="form-control"
                onChange={onChangeHandler}
                name="win_number"
                value={vehicle.win_number}
              />
            </div> */}
            
            <div className="d-flex ">
              <button type="submit" className="btn btn-primary">
                Go to defect entry
              </button>
              <button
                type="submit"
                className="btn btn-danger"
                onClick={() => navigate("/Dashboard")}
              >
                Go to defects history
              </button>
            </div>
          </form>
        </div>
      </div>
    </LoginStyled>
  );
};

export default Login;
