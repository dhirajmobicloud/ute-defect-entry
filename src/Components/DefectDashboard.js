import React from "react";
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
  console.log(defects);

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
          {defects.map((element) => {
            return (
              <div className="defect">
                <div className="defect-name">
                  <h5>{element.Descrizione}</h5>
                </div>
                <div className="done">
                  <span
                    className="btn btn-sm btn-success"
                    onClick={() => Add_repaired(element)}
                  >
                    Done
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        {/* -------------------- Repaired List -------------------- */}
        <div className="repaired-list">
          <div className="repaired-heading">
            <h3>Repaired</h3>
          </div>
          {repaired.map((element) => {
            return (
              <div className="repaired">
                <div className="repaired-name">
                  <h5>{element.Descrizione}</h5>
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
