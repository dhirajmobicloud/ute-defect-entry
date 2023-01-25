import React from "react";
import { useNavigate } from "react-router-dom";
import { LoginStyled } from "./Styled-Components/LoginStyled";
const Login = () => {
  const navigate = useNavigate();

  return (
    <LoginStyled className="cantainer d-flex">
      <div className="LoginCart">
        <div className="Login-creaditnal">
          <form onSubmit={()=> navigate('/defect-dashboard')}>
            <div className="mb-1">
              <label htmlFor="exampleInputEmail1" className="form-label">   
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Vehicle Name"
                
              />
            </div>
            <div className="mb-1">
              <label htmlFor="exampleInputPassword1" className="form-label">
              </label>
              <input
                type="password"
                placeholder="Vehicle Id"
                className="form-control"
                
              />
            </div>
            <div className="d-flex ">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="submit" className="btn btn-danger" onClick={()=> navigate('/Dashboard')}>
              ADD DEFECT
            </button>
            </div>
          </form>
        </div>
      </div>
    </LoginStyled>
  );
};

export default Login;


