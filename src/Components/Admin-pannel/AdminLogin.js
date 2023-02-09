import React from "react";
import { useNavigate } from "react-router-dom";
import { AdminPannelStyled } from "../Styled-Components/AdminPannelStyled";

const AdminLogin = () => {
  const navigate = useNavigate();
  const onSubmitHandler =(e)=>{
    e.preventDefault();
  }
  return (
    <AdminPannelStyled className="cantainer d-flex">
      <div className="LoginCart">
        <div className="Login-creaditnal">
      <form onSubmit={onSubmitHandler}>
        <div className="mb-1">
          <label for="exampleInputUserName" className="form-label"
          ></label>
          <input
            type="username"
            className="form-control text-center"
            id="exampleInputUserNsame"
            aria-describedby="emailHelp"
            placeholder="ENTER USER NAME"
          />
        </div>
        <div className="mb-1">
          <label for="exampleInputPassword1"
          className="form-label"
          ></label>
          <input 
            type="password"
            className="form-control text-center"
            id="exampleInputPassword1"
            placeholder="PASSWORD"
          />
        </div>
        <div className="buttons d-flex py-4 ">
        <button type="button" className="btn btn-primary m-auto" role='button' onClick={() => navigate("/admin-pannel")} >
          LOGIN
        </button>
        </div>
      </form>
      </div>
      </div>
    </AdminPannelStyled>
  );
};

export default AdminLogin;
