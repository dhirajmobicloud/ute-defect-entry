import React from "react";
import { SurfaceRh1Styled } from "../Styled-Components/SurfaceRh1Styled";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Add_SurfaceRH1_defect,
  Remove_SurfaceRH1_defect,
} from "../../Redux/Reducers/SurfaceRH1_defects";

const SurfaceRH1 = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [defects, setDefects] = useState([]);

  const surfaceRH1_defects = useSelector((state) => state.surfaceRH1_defects);
  console.log(surfaceRH1_defects);

  const AddDefect = (defect) => {
    dispatch(Add_SurfaceRH1_defect(defect));
  };

  const RemoveDefect = (id) => {
    dispatch(Remove_SurfaceRH1_defect(id));
  };

  const getData = () => {
    fetch(`http://localhost:5000/${props.segement}`, {
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
    // eslint-disable-next-line
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
        {/* <h5 className="heading">defect list</h5> */}
        <div className="section-three">
          <h5 className="heading">defect list</h5>
          <div className="defect-list container">
            {defects.map((element) => {
              return (
                <div className="container" onClick={() => AddDefect(element)}>
                  <h5>{element.Descrizione}</h5>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="selected">
        <div className="heading">
          <h5>selected defects</h5>
        </div>
        <div className="container">
          {surfaceRH1_defects.filter((items) => items.Segement == props.station)
            .map((element) => {
              return (
                <div className="a-defect" key={element}>
                  <h6>{element.Descrizione}</h6>
                  <span
                    className="btn btn-sm btn-danger"
                    onClick={() => RemoveDefect(element._id)}
                  >
                    Remove
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </SurfaceRh1Styled>
  );
};

export default SurfaceRH1;
