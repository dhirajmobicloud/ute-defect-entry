import React from "react";
import { SurfaceRh1Styled } from "../Styled-Components/SegementStyled";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  add_vehicle_defect,
  remove_vehicle_defect,
} from "../../Redux/Reducers/vehicle";

const Segement = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [defects, setDefects] = useState([]);
  const [vehicle_data, setVehicle_data] = useState({
    model: " ",
    win_number: "",
    defect: [],
    repaired: [],
  });

  // fetching vehicle data

  // const vehicle_data = useSelector((state) => state.vehicle);
  const getVehicleData = () => {
    fetch("https://easy-gray-camel-sock.cyclic.app/get-vehicle-data/ev276818", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((vehicle) => {
        console.log(vehicle);
        setVehicle_data(vehicle);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("hello");
  };

  const AddDefect = (defect) => {
    fetch("http://localhost:5000/add-vehicle-defect/ev276818", {
      method: "PUT",
      body: JSON.stringify(defect),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.status === 200) {
        getVehicleData();
        // alert("Success")
      }
    });
  };

  const RemoveDefect = (defect) => {
    fetch("http://localhost:5000/remove-vehicle-defect/ev276818", {
      method: "PUT",
      body: JSON.stringify(defect),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.status === 200) {
        getVehicleData();
        // alert("Success")
      }
    });
  };

  const getData = () => {
    fetch(`https://easy-gray-camel-sock.cyclic.app/${props.segement}`, {
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
    getVehicleData();
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
            <span className="btn" onClick={() => navigate("/defect-dashboard")}>
              Back
            </span>
          </div>
          <div className="segement-name">
            <h3>{props.station}</h3>
          </div>
          <div className="Add-button">
            <span className="btn btn-outline-info text-white">
              Add new defect
            </span>
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
                className="form-control text-center"
                id="exampleInputEmail1"
                placeholder="SEARCH"
              />
            </form>
          </div>
        </div>
        {/* <h5 className="heading">defect list</h5> */}
        <div className="section-three">
          <span className="heading">
            <h5>defect list</h5>
          </span>
          <div className="defect-list container">
            {defects.map((element, index) => {
              return (
                <div
                  key={index}
                  className="container"
                  onClick={() => AddDefect(element)}
                >
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
          {vehicle_data.defect.length > 0
            ? vehicle_data.defect
                .filter((items) => items.Segement === props.station)
                .map((element, index) => {
                  return (
                    <div className="a-defect" key={index}>
                      <h6>{element.Descrizione}</h6>
                      <span
                        className="btn btn-sm btn-danger"
                        onClick={() => RemoveDefect(element)}
                      >
                        Remove
                      </span>
                    </div>
                  );
                })
            : ""}
        </div>
      </div>
    </SurfaceRh1Styled>
  );
};

export default Segement;
