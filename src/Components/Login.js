import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const navigate = useNavigate();

  return (
    <Logstyle className="cantainer d-flex">
      <div className="LoginCart">
        <div className="Login-creaditnal">
          <form>
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
            </div>
          </form>
        </div>
      </div>
    </Logstyle>
  );
};

export default Login;

const Logstyle = styled.div`
  height: 100vh;
  display: flex;

  .LoginCart {
    height: 390px;
    width: 430px;
    border-radius: 15px;
    background-color: #d9d9d9;
    margin: auto;
  }
 form{
  padding-left: 5vh;
  padding-right: 5vh;
  padding-top: 9vh;
  align-items: center;
  button{
   margin: auto;
   margin-top: 3vh;
   
  }
 }
`;
