import React, { useState, useEffect } from "react";
import { DefectDashboardStyle } from "../Styled-Components/DefectDashboardStyle";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  remove_vehicle_defect,
  add_repaired_defect,
} from "../../Redux/Reducers/vehicle";
import logo from "../../Images/FCA_logo-removebg-preview.png";

const DefectDashboard = (props) => {
  const location = useLocation();

  const [inputSegement, setInputSegement] = useState("all");
  const [loginedUser, setLoginedUser] = useState();
  // Disable segement state
  const [Surface_RH_139, setSurface_RH] = useState(false);
  const [Surface_FTR_139, setSurface_FTR] = useState(false);
  const [Electrical_1_140, setElectrical_1] = useState(false);
  const [Bluetooth_139, setBluetooth_139] = useState(false);
  const [Surface_LH_140, setSurface_LH] = useState(false);
  const [Rear_Int_140, setRear_Int] = useState(false);
  const [Rear_EXT_141, setRear_EXT] = useState(false);
  const [RH_Exterior_141, setRH_Exterior] = useState(false);
  const [LH_Exterior_141, setLH_Exterior] = useState(false);
  const [Electrical_2_142, setElectrical_2] = useState(false);
  const [Front_EXT_142, setFront_EXT] = useState(false);
  const [Door_Closing_142, setDoor_Closing] = useState(false);

  // const [segments, setSegements] = useState({
  //   Surface_RH_139: false,
  //   Surface_FTR_139: false,
  //   Electrical_1_140: false,
  //   Bluetooth_139: false,
  //   Surface_LH_140: false,
  //   Rear_Int_140: false,
  //   Rear_EXT_141: false,
  //   RH_Exterior_141: false,
  //   LH_Exterior_141: false,
  //   Electrical_2_142: false,
  //   Front_EXT_142: false,
  //   Door_Closing_142: false,
  // });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const vehicle = useSelector((state) => state.vehicle);
  const vehicle_data = useSelector((state) => state.vehicle);

  const setSegement = (e) => {
    setInputSegement(e.target.value);
  };

  const Add_repaired = (defect) => {
    dispatch(add_repaired_defect(defect));
    dispatch(remove_vehicle_defect(defect._id));
    // save();
    // setSegements({...segments , [`${element}`] : true})
  };

  const segementAssigned = (LoginedUser) => {
    fetch(
      `https://easy-gray-camel-sock.cyclic.app/get-assigned-segement-data/${LoginedUser}`,
      { method: "GET" }
    )
      .then((res) => {
        return res.json();
      })
      .then((user) => {
        console.log(user);
        for (let i = 0; i < user.segement_assigned.length; i++) {
          console.log(user.segement_assigned[i]);
          if (user.segement_assigned[i] === "Surface_RH_139") {
            setSurface_RH(true);
          } else if (user.segement_assigned[i] === "Surface_FTR_139") {
            setSurface_FTR(true);
          } else if (user.segement_assigned[i] === "Electrical_1_140") {
            setElectrical_1(true);
          } else if (user.segement_assigned[i] === "Bluetooth_139") {
            setBluetooth_139(true);
          } else if (user.segement_assigned[i] === "Surface_LH_140") {
            setSurface_LH(true);
          } else if (user.segement_assigned[i] === "Rear_Int_140") {
            setRear_Int(true);
          } else if (user.segement_assigned[i] === "RH_Exterior_141") {
            setRH_Exterior(true);
          } else if (user.segement_assigned[i] === "LH_Exterior_141") {
            setLH_Exterior(true);
          } else if (user.segement_assigned[i] === "Electrical_2_142") {
            setElectrical_2(true);
          } else if (user.segement_assigned[i] === "Front_EXT_142") {
            setFront_EXT(true);
          } else if (user.segement_assigned[i] === "Door_Closing_142") {
            setDoor_Closing(true);
          } else if (user.segement_assigned[i] === "Rear_EXT_141") {
            setRear_EXT(true);
          }
        }
      })
      //   Surface_RH_139: false,
  //   Surface_FTR_139: false,
  //   Electrical_1_140: false,
  //   Bluetooth_139: false,
  //   Surface_LH_140: false,
  //   Rear_Int_140: false,
  //   Rear_EXT_141: false,
  //   RH_Exterior_141: false,
  //   LH_Exterior_141: false,
  //   Electrical_2_142: false,
  //   Front_EXT_142: false,
  //   Door_Closing_142: false,
      .catch((error) => {
        console.log(error.err);
      });
  };

  useEffect(() => {
    setLoginedUser(localStorage.getItem("username"));
    segementAssigned(localStorage.getItem("username"));
  }, []);

  // const save =()=>{
  //   fetch('https://easy-gray-camel-sock.cyclic.app/add_vehicle', {method:"POST", body:JSON.stringify(vehicle_data[0]), headers: { "Content-Type": "application/json" } })
  //   .then((res)=>{
  //     console.log(res)
  //   })
  // }

  // useEffect(()=>{

  //   save()
  //    // eslint-disable-next-line
  //   },[Add_repaired])

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
            {/* <option >Choose Segement</option> */}
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
              ? vehicle_data.defect.map((element, index) => {
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
              : vehicle_data.defect
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
            ? vehicle_data.repaired.map((element) => {
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
            : vehicle_data.repaired
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
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="info  ">
            <h4>MODEL : {vehicle_data.model}</h4>
            <h4> Vin Number : {vehicle_data.win_number}</h4>
          </div>
        </div>
        {/* Segments */}
        <div className="defect-segments container-fuild">
          <div className="add-defect-heading">
            <h3>Add Defect</h3>
          </div>
          <div className="segments  ">
            <div className="inner-segment d-flex container row g-3">
              <button
                className={`a-segment col-md-3 btn btn-primary ${
                  Surface_RH_139 ? "text-light" : "disabled"
                }`}
                onClick={() => navigate("/surface-RH-139-defects")}
              >
                <h5>Surface RH 139</h5>
              </button>
              <button
                className={`a-segment col-md-3 btn btn-primary ${
                  Surface_FTR_139 ? "text-light" : "disabled"
                }`}
                onClick={() => navigate("/surface-FTR-139-defects")}
              >
                <h5>Surface-FTR-139</h5>
              </button>
              <button
                className={`a-segment col-md-3 btn btn-primary ${
                  Electrical_1_140 ? "text-light" : "disabled"
                }`}
                onClick={() => navigate("/electrical-1-140-defects")}
              >
                <h5>Electrical-1-140</h5>
              </button>
              <button
                className={`a-segment col-md-3 btn btn-primary ${
                  Bluetooth_139 ? "text-light" : "disabled"
                }`}
                onClick={() => navigate("/bluetooth-139-defect")}
              >
                <h5>Bluetooth-139</h5>
              </button>
              <button
                className={`a-segment col-md-3 btn btn-primary ${
                  Surface_LH_140 ? "text-light" : "disabled"
                }`}
                onClick={() => navigate("/surface-LH-140-defect")}
              >
                <h5>Surface-LH-140</h5>
              </button>
              <button
                className={`a-segment col-md-3 btn btn-primary ${
                  Rear_Int_140 ? "text-light" : "disabled"
                }`}
                onClick={() => navigate("/rear-INT-140-defects")}
              >
                <h5>Rear-Int-140</h5>
              </button>
              <button
                className={`a-segment col-md-3 btn btn-primary ${
                  Rear_EXT_141 ? "text-light" : "disabled"
                }`}
                onClick={() => navigate("/rear-EXT-141-defects")}
              >
                <h5>Rear-EXT-141</h5>
              </button>
              <button
                className={`a-segment col-md-3 btn btn-primary ${
                  RH_Exterior_141 ? "text-light" : "disabled"
                }`}
                onClick={() => navigate("/rh-exterior-141-defects")}
              >
                <h5>RH-Exterior-141</h5>
              </button>
              <button
                className={`a-segment col-md-3 btn btn-primary ${
                  LH_Exterior_141 ? "text-light" : "disabled"
                }`}
                onClick={() => navigate("/lh-exterior-141-defects")}
              >
                <h5>LH-Exterior-141</h5>
              </button>
              <button
                className={`a-segment col-md-3 btn btn-primary ${
                  Electrical_2_142 ? "text-light" : "disabled"
                }`}
                onClick={() => navigate("/electrical-2-142-defects ")}
              >
                <h5>Electrical-2-142</h5>
              </button>
              <button
                className={`a-segment col-md-3 btn btn-primary ${
                  Front_EXT_142 ? "text-light" : "disabled"
                }`}
                onClick={() => navigate("/front-EXT-142-defects")}
              >
                <h5>Front EXT-142</h5>
              </button>
              <button
                className={`a-segment col-md-3 btn btn-primary ${
                  Door_Closing_142 ? "text-light" : "disabled"
                }`}
                onClick={() => navigate("/door-closing-142-defects")}
              >
                <h5>Door-Closing-142</h5>
              </button>
            </div>
          </div>
        </div>
      </div>
    </DefectDashboardStyle>
  );
};

export default DefectDashboard;
