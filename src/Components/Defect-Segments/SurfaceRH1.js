import React from "react";
import { SurfaceRh1Styled } from "../Styled-Components/SurfaceRh1Styled";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const SurfaceRH1 = () => {
  const navigate = useNavigate();

  const [defects, setDefects] = useState([]);

  const getData = () => {
    fetch("http://localhost:5000/", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDefects(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SurfaceRh1Styled>
      <div className="select-defect">
        <div className="section-one">
          <div className="back-button ">
            <span
              className="btn btn-dark"
              onClick={() => navigate("/defect-dashboard")}
            >
              Back
            </span>
          </div>
          <div className="Add-button">
            <span className="btn btn-success">Add new defect</span>
          </div>
        </div>
        <div className="section-two">
          <div className="search">
            <form>
              {/* <label for="exampleInputEmail1" className="form-label">
                Email address
              </label> */}
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Search"
              />
            </form>
          </div>
        </div>
        <div className="section-three">
          <h5 className="heading">defect list</h5>
          <div className="defect-list container">
            {
              defects.map((element)=>{
                return <div className="container">
                <h5>{element.Descrizione}</h5>
              </div>
              })
              
            }
          </div>
        </div>
      </div>
      <div className="selected">
        <div className="heading">
          <h5>selected defects</h5>
        </div>
        <div className="container">
          <div className="a-defect">
            <h6>defect zyzzz</h6>
            <span className="btn btn-sm btn-danger">Remove</span>
          </div>
          <div className="a-defect">
            <h6>defect zyzzz</h6>
            <span className="btn btn-sm btn-danger">Remove</span>
          </div>
          <div className="a-defect">
            <h6>defect zyzzz</h6>
            <span className="btn btn-sm btn-danger">Remove</span>
          </div>
          <div className="a-defect">
            <h6>defect zyzzz</h6>
            <span className="btn btn-sm btn-danger">Remove</span>
          </div>
        </div>
      </div>
    </SurfaceRh1Styled>
  );
};

export default SurfaceRH1;
