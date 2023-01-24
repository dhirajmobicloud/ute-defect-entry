import React from "react";
import { DefectDashboardStyle } from "./Styled-Components/DefectDashboardStyle";
import { useNavigate } from "react-router-dom";

const DefectDashboard = () => {
  const navigate = useNavigate();

  return (
    <DefectDashboardStyle className="container-fuild">
      <div className="defects-repaired">
        {/* -------------------- Defects List -------------------- */}
        <div className="defects-list">
          <div className="defects-heading">
            <h3>Defects</h3>
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
            <h3>Repaired</h3>
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
            <h3>Add Defect</h3>
          </div>
          <div className="segments  ">
            <div className="inner-segment d-flex container row g-3">
              <div className="a-segment col-md-3" onClick={()=> navigate('/surface-rh-1')}>
                <h5>Surface RH 139</h5>
              </div>
              <div className="a-segment col-md-3" onClick={()=> navigate('/surface-rh-1')}>
                <h5>Surface FTR 139</h5>
              </div>
              <div className="a-segment col-md-3" onClick={()=> navigate('/surface-rh-1')}>
                <h5>Bluetooth 139</h5>
              </div>
              <div className="a-segment col-md-3" onClick={()=> navigate('/surface-rh-1')}>
                <h5>Electrical 1 140</h5>
              </div>
              <div className="a-segment col-md-3" onClick={()=> navigate('/surface-rh-1')}>
                <h5>Surface LH 140</h5>
              </div>
              <div className="a-segment col-md-3" onClick={()=> navigate('/surface-rh-1')}>
                <h5>Rear Int 140</h5>
              </div>
              <div className="a-segment col-md-3" onClick={()=> navigate('/surface-rh-1')}>
                <h5>Rear EXT 141</h5>
              </div>
              <div className="a-segment col-md-3" onClick={()=> navigate('/surface-rh-1')}>
                <h5>RH Exterior 141</h5>
              </div>
              <div className="a-segment col-md-3" onClick={()=> navigate('/surface-rh-1')}>
                <h5>LH Exterior 141</h5>
              </div>
              <div className="a-segment col-md-3" onClick={()=> navigate('/surface-rh-1')}>
                <h5>Electrical 2 142</h5>
              </div>
              <div className="a-segment col-md-3" onClick={()=> navigate('/surface-rh-1')}>
                <h5>Front EXT 142</h5>
              </div>
              <div className="a-segment col-md-3" onClick={()=> navigate('/surface-rh-1')}>
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
