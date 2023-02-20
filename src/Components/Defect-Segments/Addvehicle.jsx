import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addvehicle = () => {
  const [vehicle_data, setVehicle_data] = useState({
    vin: "",
    model: "",
  });
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setVehicle_data({...vehicle_data, [e.target.name]: e.target.value})
  };

  const submitHandler =(e)=>{
    e.preventDefault();
    fetch('https://easy-gray-camel-sock.cyclic.app/add_vehicle',{method:'POST' ,body:JSON.stringify(vehicle_data), headers: { "Content-Type": "application/json" }})
    .then(async(res)=>{
      if(res.status === 200){
        localStorage.setItem("vehicle_id", vehicle_data.vin)
        navigate("/defect-dashboard")
      }
      else if(res.status === 400){
        let err = await res.json()
        alert(err.err)
      }
    }).catch((errr)=>{
      alert(errr)
    })
    // localStorage.setItem("vehicle", JSON.stringify(vehicle_data))
   
  }

  return (
    <div className="d-flex" style={{height:"100vh"}}>
      <form onSubmit={submitHandler} className="m-auto ">
        <input type="text" name="vin" onChange={onChangeHandler} required className="form-control d-block my-2" placeholder="VIN" />
        <input type="text" name="model" onChange={onChangeHandler} required className="form-control d-block my-2" placeholder="MODEL" />
        <button type="submit" className="d-block btn btn-primary ">SUBMIT</button>
      </form>
    </div>
  );
};

export default Addvehicle;
