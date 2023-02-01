import React from "react";
import { SurfaceRh1Styled } from "../Styled-Components/SegementStyled";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_vehicle_defect, remove_vehicle_defect } from "../../Redux/Reducers/vehicle";

const Segement = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [defects, setDefects] = useState([]);

  const segement_defects = useSelector((state) => state.vehicle);
  console.log(segement_defects);

  const AddDefect = (defect) => {
    dispatch(add_vehicle_defect(defect));
  };

  const RemoveDefect = (id) => {
    dispatch(remove_vehicle_defect(id));
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

  // useEffect(()=>{
  //   fetch('https://easy-gray-camel-sock.cyclic.app/add_vehicle', {method:"POST", body:segement_defects[0]})
  //   .then((res)=>{
  //     console.log(res)
  //   })
  //   },[AddDefect, RemoveDefect])

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
          <div className="segement-name">
            <h3>{props.station}</h3>
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
            {defects.map((element, index) => {
              return (
                <div key={index} className="container" onClick={() => AddDefect(element)}>
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
          {segement_defects[0].defect.length > 0 ? segement_defects[0].defect.filter((items) => items.Segement === props.station)
            .map((element, index) => {
              return (
                <div className="a-defect" key={index}>
                  <h6>{element.Descrizione}</h6>
                  <span
                    className="btn btn-sm btn-danger"
                    onClick={() => RemoveDefect(element._id)}
                  >
                    Remove
                  </span>
                </div>
              );
            }): ""}
        </div>
      </div>
    </SurfaceRh1Styled>
  );
};

export default Segement;
