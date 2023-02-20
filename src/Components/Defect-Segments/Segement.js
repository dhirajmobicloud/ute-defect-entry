import React from "react";
import { SegementStyled } from "../Styled-Components/SegementStyled";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Segement = (props) => {
  const navigate = useNavigate();
  const [defects, setDefects] = useState([]);
  const [vin_no, setVin_no] = useState(localStorage.getItem("vehicle_id"))
  const [fetchData, setFetchData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [vehicle_data, setVehicle_data] = useState({
    model: " ",
    win_number: "",
    defect: [],
    repaired: [],
  });

  const [newDefect, setNewDefect] = useState({
    Descrizione: "",
  });

  // console.log( fetchData[0].Digit_13)

  // fetching vehicle data

  // const vehicle_data = useSelector((state) => state.vehicle);
  const getVehicleData = () => {
    fetch(`https://easy-gray-camel-sock.cyclic.app/get-vehicle-data/${vin_no}`, {
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
    fetch(`https://easy-gray-camel-sock.cyclic.app/add-vehicle-defect/${vin_no}`, {
      method: "PUT",
      body: JSON.stringify(defect),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setVehicle_data(data);
        // getVehicleData()
      });
  };

  const RemoveDefect = (defect) => {
    fetch(`https://easy-gray-camel-sock.cyclic.app/remove-vehicle-defect/${vin_no}`, {
      method: "PUT",
      body: JSON.stringify(defect),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.info);
        setVehicle_data(data.info);
        // getVehicleData()

        
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
        console.log(data[1].Digit_13);
        setFetchData(data);
        setDefects(data);
      });
  };

  const seachHandler = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value.length > 0) {
      setDefects(
        fetchData.filter((element) =>
          element.Descrizione.includes(e.target.value.toUpperCase())
        )
      );
    } else {
      setDefects(fetchData);
    }
  };

  const newDefectOnChange = (e) => {
    setNewDefect({
      Descrizione: e.target.value,
      EOL_Station: fetchData[0].EOL_Station,
      Station_No: fetchData[0].Station_No,
      Segement: fetchData[0].Segement,
      new : true
    });
  };

  const addNewDefect=(e)=>{
    e.preventDefault()
    console.log(newDefect)
    fetch(`https://easy-gray-camel-sock.cyclic.app/add_${props.segement}`,{method:"POST" , body:JSON.stringify(newDefect), headers: { "Content-Type": "application/json" }}).then((res)=>{
      if(res.status === 200){
        alert("Added successfully")
       getData()
      }else{
        return 
      }
   })
  }

  useEffect(() => {
    getData();
    getVehicleData();
    // eslint-disable-next-line
  }, []);

  return (
    <SegementStyled>
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
            <span
              className="btn btn-outline-info text-white"
              data-bs-toggle="modal"
              data-bs-target="#addNewUserModal"
            >
              Add new defect
            </span>
            {/* modal */}
            <div
              className="modal fade"
              id="addNewUserModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Add new defect
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form
                      class="row g-3 needs-validation"
                      novalidate
                      onSubmit={addNewDefect}
                    >
                      <div class="col-md-12">
                        <label htmlFor="validationCustom03" class="form-label">
                          Description
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="validationCustom03"
                          required
                          name="Descrizione"
                          onChange={newDefectOnChange}
                        />
                        <div class="invalid-feedback">
                          Please provide a valid city.
                        </div>
                      </div>

                      <div class="submit-btn col-12">
                        <button class=" btn btn-warning" type="submit">
                          ADD
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                    >
                      Save changes
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-two">
          <div className="search">
            <form>
              {/* <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label> */}
              <input
                value={searchQuery}
                onChange={seachHandler}
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
    </SegementStyled>
  );
};

export default Segement;
