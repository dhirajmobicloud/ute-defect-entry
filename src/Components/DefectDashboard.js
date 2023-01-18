import React from "react";
import { DefectDashboardStyle } from "./Styled-Components/DefectDashboardStyle";

const DefectDashboard = () => {
  return (
    <DefectDashboardStyle className="container-fuild">
      <div className="defects-repaired">
        {/* -------------------- Defects List -------------------- */}
        <div className="defects-list">
          <div className="defects-heading">
            <h2>Defects</h2>
          </div>
          <div className="defect">
            <div className="defect-name">
              <h5>defect xyz</h5>
            </div>
            <div className="done">
              <span className="btn btn-sm btn-success">Done</span>
            </div>
          </div>

          <div className="defect">
            <div className="defect-name">
              <h5>defect xyz</h5>
            </div>
            <div className="done">
              <span className="btn btn-sm btn-success">Done</span>
            </div>
          </div>
          <div className="defect">
            <div className="defect-name">
              <h5>defect xyz</h5>
            </div>
            <div className="done">
              <span className="btn btn-sm btn-success">Done</span>
            </div>
          </div>
          <div className="defect">
            <div className="defect-name">
              <h5>defect xyz</h5>
            </div>
            <div className="done">
              <span className="btn btn-sm btn-success">Done</span>
            </div>
          </div>
          <div className="defect">
            <div className="defect-name">
              <h5>defect xyz</h5>
            </div>
            <div className="done">
              <span className="btn btn-sm btn-success">Done</span>
            </div>
          </div>
        </div>
        {/* -------------------- Repaired List -------------------- */}
        <div className="repaired-list">
          <div className="repaired-heading">
            <h2>Repaired</h2>
          </div>
          <div className="repaired">
            <div className="repaired-name">
              <h5>Repaired xyz</h5>
            </div>
          </div>
          <div className="repaired">
            <div className="repaired-name">
              <h5>Repaired xyz</h5>
            </div>
          </div>
          <div className="repaired">
            <div className="repaired-name">
              <h5>Repaired xyz</h5>
            </div>
          </div>
          <div className="repaired">
            <div className="repaired-name">
              <h5>Repaired xyz</h5>
            </div>
          </div>
          <div className="repaired">
            <div className="repaired-name">
              <h5>Repaired xyz</h5>
            </div>
          </div>
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
            <h2>Add Defect</h2>
          </div>
          <div className="segments  ">
            <div className="inner-segment d-flex container row g-3">
              <div className="a-segment col-md-3">
                <h5>Surface RH 1</h5>
              </div>
              <div className="a-segment col-md-3">
                <h5>Surface RH 2</h5>
              </div>
              <div className="a-segment col-md-3">
                <h5>Surface RH 3</h5>
              </div>
              <div className="a-segment col-md-3">
                <h5>Surface RH 4</h5>
              </div>
              <div className="a-segment col-md-3">
                <h5>Surface RH 5</h5>
              </div>
              <div className="a-segment col-md-3">
                <h5>Surface RH 6</h5>
              </div>
              <div className="a-segment col-md-3">
                <h5>Surface RH 7</h5>
              </div>
              <div className="a-segment col-md-3">
                <h5>Surface RH 8</h5>
              </div>
              <div className="a-segment col-md-3">
                <h5>Surface RH 9</h5>
              </div>
              <div className="a-segment col-md-3">
                <h5>Surface RH 10</h5>
              </div>
              <div className="a-segment col-md-3">
                <h5>Surface RH 11</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefectDashboardStyle>
  );
};

export default DefectDashboard;
