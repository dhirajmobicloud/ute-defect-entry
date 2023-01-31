import React, { useState, useEffect } from "react";
import { DefectDashboardStyle } from "./Styled-Components/DefectDashboardStyle";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Add_SurfaceRH1_repaired } from "../Redux/Reducers/SurfaceRH1_repaired";
import { Remove_SurfaceRH1_defect } from "../Redux/Reducers/SurfaceRH1_defects";

const DefectDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const defects = useSelector((state) => state.surfaceRH1_defects);
  const repaired = useSelector((state) => state.surfaceRH1_repaired);

  const [inputSegement, setInputSegement] = useState(false);

  const setSegement = (e) => {
    setInputSegement(e.target.value);
  };

  // useEffect(()=>{
  
  //   // let data = await fetch('http://localhost:5000/add_vehicle', {method:"GET"})
  //   // let result = await data.json()
  //   // console.log(result)
  //   fetch('http://localhost:5000/add_vehicle', {method:"GET"})
  //   .then((res)=>{
  //     return res.json()
  //   }).then((res1)=>{
  //       console.log(JSON.stringify(res1))
  //   })

  // },[])

  const Add_repaired = (defect) => {
    dispatch(Add_SurfaceRH1_repaired(defect));
    dispatch(Remove_SurfaceRH1_defect(defect._id));
  };

  return (
    <DefectDashboardStyle className="container-fuild">
      <div className="defects-repaired">
        {/* -------------------- Defects List -------------------- */}
        <div className="defects-list">
          <div className="defects-heading">
            <h3>Defects</h3>
          </div>
          <select
            value={inputSegement}
            onChange={setSegement}
            className="form-select form-select-sm"
            aria-label=".form-select-sm example"
          >
            <option defaultValue={false}>Choose Segement</option>
            <option value="all">All defects</option>
            <option value="Surface-RH-139">Surface RH 139</option>
            <option value="Surface-FTR-139">Surface FTR 139</option>
            <option value="Bluetooth-139">Bluetooth 139</option>
            <option value="Electrical-1-140">Electrical 1 140</option>
            <option value="Surface-LH-140">Surface LH 140</option>
            <option value="Rear-Int-140">Rear Int 140</option>
            <option value="Rear-EXT-141">Rear EXT 141</option>
            <option value="RH-Exterior-141">RH Exterior 141</option>
            <option value="LH-Exterior-141">LH Exterior 141</option>
            <option value="Electrical-2-142">Electrical 2 142</option>
            <option value="Front EXT-142">Front EXT 142</option>
            <option value="Door-Closing-142">Door Closing 142</option>
          </select>
          <div className="defect-outer">
            {inputSegement === "all"
              ? defects.map((element, index) => {
                  console.log(inputSegement);
                  return (
                    <div className="defect" key={index}>
                      <div className="defect-name">
                        <h5>
                          {element.Descrizione} <span>{element.Segement}</span>{" "}
                        </h5>
                      </div>
                      <div className="done">
                        <span
                          className="btn btn-sm btn-success"
                          onClick={() => Add_repaired(element)}
                        >
                          OK
                        </span>
                      </div>
                    </div>
                  );
                })
              : defects
                  .filter((element) => {
                    return element.Segement === inputSegement;
                  })
                  .map((element, index) => {
                    console.log(inputSegement);
                    return (
                      <div className="defect" key={index}>
                        <div className="defect-name">
                          <h5>
                            {element.Descrizione}{" "}
                            <span>{element.Segement}</span>{" "}
                          </h5>
                        </div>
                        <div className="done">
                          <span
                            className="btn btn-sm btn-success"
                            onClick={() => Add_repaired(element)}
                          >
                            OK
                          </span>
                        </div>
                      </div>
                    );
                  })}
          </div>
        </div>
        {/* -------------------- Repaired List -------------------- */}
        <div className="repaired-list">
          <div className="repaired-heading">
            <h3>Repaired</h3>
          </div>
          {inputSegement === "all"
            ? repaired.map((element) => {
                return (
                  <div className="repaired">
                    <div className="repaired-name">
                      <h5>
                        {element.Descrizione} <span>{element.Segement}</span>{" "}
                      </h5>
                    </div>
                  </div>
                );
              })
            : repaired
                .filter((items) => items.Segement === inputSegement)
                .map((element) => {
                  return (
                    <div className="repaired">
                      <div className="repaired-name">
                        <h5>
                          {element.Descrizione} <span>{element.Segement}</span>{" "}
                        </h5>
                      </div>
                    </div>
                  );
                })}
        </div>
      </div>
      {/* -------------------- Add Defect section -------------------- */}
      <div className="add-defects">
        <div className="vehicle-information">
          <div className="info">vehicle information</div>
        </div>
        {/* Segments */}
        <div className="defect-segments container-fuild">
          <div className="add-defect-heading">
            <h3>Add Defect</h3>
          </div>
          <div className="segments  ">
            <div className="inner-segment d-flex container row g-3">
              <div
                className="a-segment col-md-3"
                onClick={() => navigate("/surface-RH-139-defects")}
              >
                <h5>Surface RH 139</h5>
              </div>
              <div
                className="a-segment col-md-3"
                onClick={() => navigate("/surface-FTR-139-defects")}
              >
                <h5>Surface FTR 139</h5>
              </div>
              <div
                className="a-segment col-md-3"
                onClick={() => navigate("/bluetooth-139-defect")}
              >
                <h5>Bluetooth 139</h5>
              </div>
              <div
                className="a-segment col-md-3"
                onClick={() => navigate("/electrical-1-140-defects")}
              >
                <h5>Electrical 1 140</h5>
              </div>
              <div
                className="a-segment col-md-3"
                onClick={() => navigate("/surface-LH-140-defect")}
              >
                <h5>Surface LH 140</h5>
              </div>
              <div
                className="a-segment col-md-3"
                onClick={() => navigate("/rear-INT-140-defects")}
              >
                <h5>Rear Int 140</h5>
              </div>
              <div
                className="a-segment col-md-3"
                onClick={() => navigate("/rear-EXT-141-defects")}
              >
                <h5>Rear EXT 141</h5>
              </div>
              <div
                className="a-segment col-md-3"
                onClick={() => navigate("/rh-exterior-141-defects")}
              >
                <h5>RH Exterior 141</h5>
              </div>
              <div
                className="a-segment col-md-3"
                onClick={() => navigate("/lh-exterior-141-defects")}
              >
                <h5>LH Exterior 141</h5>
              </div>
              <div
                className="a-segment col-md-3"
                onClick={() => navigate("/electrical-2-142-defects")}
              >
                <h5>Electrical 2 142</h5>
              </div>
              <div
                className="a-segment col-md-3"
                onClick={() => navigate("/front-EXT-142-defects")}
              >
                <h5>Front EXT 142</h5>
              </div>
              <div
                className="a-segment col-md-3"
                onClick={() => navigate("/door-closing-142-defects")}
              >
                <h5>Door Closing 142</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefectDashboardStyle>
  );
};

export default DefectDashboard;
