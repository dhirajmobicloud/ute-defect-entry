import React, { useState, useEffect ,} from "react";
import { DefectDashboardStyle } from "../Styled-Components/DefectDashboardStyle";
import { useNavigate,useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { remove_vehicle_defect, add_repaired_defect } from "../../Redux/Reducers/vehicle";
import logo from '../../Images/FCA_logo-removebg-preview.png';
import data from '../DefectInformation.json'


const DefectDashboard = () => {
  const location=useLocation();
  const arraydata=["Surface RH 139","Surface FTR 139","Bluetooth 139","Electrical 1 140","Surface LH 140","Rear Int 140","Rear EXT 141","RH Exterior 141","LH Exterior 141","Electrical 2 142","Front EXT 142","Door Closing 142"];
  let userdata=location.state.username;
  console.log("UserData is",userdata);
  function Myfunction1(userdata)
  {
    let myvalues;
    for(let i=0;i<data.length;i++)
    {
      if(data[i].username===userdata)
      {
        myvalues=data[i].defect_check_permission;
      }
    }
    return myvalues;
  }
   let UserSegments=Myfunction1(userdata);
   console.log(UserSegments);

  function MyvaluesCheck(values)
  {
   let value= UserSegments.includes(values)
   return value;
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const vehicle = useSelector((state) => state.vehicle);
  const vehicle_data = useSelector((state) => state.vehicle);

  const [inputSegement, setInputSegement] = useState('all');
 
  const setSegement = (e) => {
    setInputSegement(e.target.value);
  };


  const Add_repaired =  (defect) => {
    dispatch(add_repaired_defect(defect));
    dispatch(remove_vehicle_defect(defect._id));
    // save();
  };

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
              ? vehicle_data[0].defect.map((element, index) => {
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
              : vehicle_data[0].defect
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
            ? vehicle_data[0].repaired
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
              })
            : vehicle_data[0].repaired
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
            <h4>MODEL : {vehicle_data[0].model}</h4>
            <h4> Vin Number : {vehicle_data[0].win_number}</h4>
          </div>
        </div>
        {/* Segments */}
        <div className="defect-segments container-fuild">
          <div className="add-defect-heading">
            <h3>Add Defect</h3>

          </div>
          <div className="segments  ">
            <div className="inner-segment d-flex container row g-3">
            {arraydata.map((values)=>{
              if(MyvaluesCheck(values)===true)
              {
                return(
                  <button
                  className="a-segment col-md-3 border border-info"
                  onClick={() => navigate("/surface-RH-139-defects")}
                >
                
                <h5 >{values}</h5>
              </button>
                )
              }
              else if(MyvaluesCheck(values)===false)
              {
                return(
                  <button
                  className="a-segment col-md-3 border border-info"
                  disabled
                >
                  <h5 >{values}</h5>
                </button>

                )
              }
            })}
            </div>
          </div>
        </div>
      </div>
    </DefectDashboardStyle>
  );
};

export default DefectDashboard;