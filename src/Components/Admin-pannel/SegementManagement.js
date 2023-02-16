import React, { useRef } from "react";
import { SegmentManagementStyle } from "../Styled-Components/SegmentManagementStyle";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";


const SegementManagement = () => {

  // const navigate=useNavigate();
  const SegmentData = [
    "Surface-RH-139",
    "Surface-FTR-139",
    "Bluetooth-139",
    "Electrical-1-140",
    "Surface-LH-140",
    "Rear-Int-140",
    "Rear-EXT-141",
    "RH-Exterior-141",
    "LH-Exterior-141",
    "Electrical-2-142",
    "Front-EXT-142",
    "Door-Closing-142",
  ];
  let [userdata, setUserdata] = useState([]);
  let [tableEntry,setTableEntry]=useState({username:'',segement_assigned:[],work:[]});
  let [flag, setflag] = useState(false);
  let[segementCollection, setSegementCollection] = useState([]);
  let [newname,setnewname]=useState('');
  let [status,setStatus]=useState(true);
  let [counter,setCounter]=useState(0);

  

  function FetchSegmentData()
  {
    axios
    .get("https://easy-gray-camel-sock.cyclic.app/assigned-segement-data")
    .then((response) => {
      setSegementCollection(response.data);
    })
    .catch((err) => {
      console.log(err);
    });

  }
  useEffect(() => {

    FetchSegmentData();

    axios
      .get("https://easy-gray-camel-sock.cyclic.app/users")
      .then((values) => {
        setUserdata(values.data);
      })
      .catch((err) => {
        console.log(err);
      });
  
  }, []);


  function Mydata(values) {
    let valuedata = values;
    

    return (
      <div className="showdata">
        {valuedata.map((values, index) => {
          if (index < valuedata.length - 1) {
            return <h5 className="description h5 form-label">{values},</h5>;
          } else {
            return <h5 className="description h5 form-label">{values}</h5>;
          }
        })}
      </div>
    );
  }

  const workType = ["Repair Defect", "Add Defect"];
  const [selectedSegment, setSelectedSegment] = useState([]);
  const [username, setUsername] = useState("");
  const [defectWork, setDefectWork] = useState([]);
  const [newusername,setNewUserName]=useState('');
  const [newuserpassword,setNewUserPassword]=useState('');

  const UserNameEnter = (e) => {
    setUsername(e.target.value);
    let value = e.target.value;
    if (value.length > 0) {
      setflag(true);
    } else {
      setflag(false);
    }
  };

  const ModalData=(index)=>{
    setTableEntry(segementCollection[index]);
  
  }

 

console.log("Table Entry is",tableEntry);


  const EnterSearch = (value) => {
    setUsername(value);
    setflag(false);
  };

  function AutoComplete() {
    if (
      userdata.filter((values) => values.username.search(username) >= 0)
        .length > 0
    ) {
      return (
        <div className="autocomplete">
          {userdata
            .filter((values) => values.username.search(username) >= 0)
            .map((data) => (
              <div>
                <h5
                  className="mainvalues h5 form-label"
                  onClick={() => EnterSearch(data.username)}
                >
                  {data.username}
                </h5>
              </div>
            ))}
        </div>
      );
    } else {
      return (
        <div>
          <h5 className="description h5 form-label">Not Found</h5>
        </div>
      );
    }
  }

  const AddSegment = (e) => {
    if (e.target.checked === true) {
      setSelectedSegment([...selectedSegment, e.target.value]);
    } else if (e.target.checked === false) {
      setSelectedSegment(
        selectedSegment.filter((values) => values !== e.target.value)
      );
    }
  };

  const AddRole = (e) => {
    if (e.target.checked === true) {
      setDefectWork([...defectWork, e.target.value]);
    } else if (e.target.checked === false) {
      setDefectWork(defectWork.filter((values) => values !== e.target.value));
    }
  };

  const changeSegementAssigned=(e)=>{
    if(e.target.checked===true)
    {
       setTableEntry({...tableEntry,segement_assigned:[...tableEntry.segement_assigned,e.target.value]});
    }
    else if(e.target.checked===false)
    {
      setTableEntry({...tableEntry,segement_assigned:tableEntry.segement_assigned.filter((value)=>value!==e.target.value)})
    }
    
  }

  const changeWorkAssigned=(e)=>{
    if(e.target.checked===true)
    {
      setTableEntry({...tableEntry,work:[...tableEntry.work,e.target.value]});
    }
    else if(e.target.checked===false)
    {
      setTableEntry({...tableEntry,work:tableEntry.work.filter((values)=>values!==e.target.value)});
    }
  }

  const Mysubmit = (e) => {
    e.preventDefault();
    let jsondata = {
      username: username,
      segement_assigned: selectedSegment,
      work: defectWork,
    };
    axios
      .post(
        "https://easy-gray-camel-sock.cyclic.app/assigned-segement",
        jsondata
      )
      .then((response) => {
        console.log(response);
        if (response) {
          alert("Data Inserted Successfully");
          FetchSegmentData();

        }
      })
      .catch((err) => {
        console.log(err);
      });

    
  };

  const UpdateSubmit=(e)=>{
    e.preventDefault();
    console.log(JSON.stringify(tableEntry));
    
  }
                

  return (
    <SegmentManagementStyle className="container-fluid">
      <div className="segmanage container-fluid">
        <div className="title">
          <h3 className="titledata h3 text-center">SEGMENT MANAGEMENT</h3>
        </div>
        <div className="form-section container-fluid">
          <form onSubmit={Mysubmit}>
            <div className="formdata">
              <div className="inputText ">
                <div className="textinputdata">
                <h5 className="description h5 form-label">
                  Enter the username
                </h5>
                <button type="button" className="AddButton btn btn-primary"  data-bs-toggle="modal" data-bs-target="#myModal">Add User</button>
                </div>
                <input
                  type="text"
                  placeholder="Enter the name"
                  className=" form-control"
                  onChange={(e) => UserNameEnter(e)}
                  value={username}
                ></input>
                {flag === true ? AutoComplete() : null}
              </div>

              <div className="checkboxData ">
                <h5 className="description  form-label">
                  Select the defect work to assign:
                </h5>
                <div className="mycheckboxvalues row">
                  {SegmentData.map((values) => (
                    <div className="checkboxDiv col-sm-6">
                      <input
                        type="checkbox"
                        defaultValue={values}
                        className="mycheckbox form-check-input"
                        onChange={(e) => AddSegment(e)}
                      ></input>
                      <span className="mycheckboxvalues h5 text-center">
                        {values}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="checkboxData container-fluid">
                <h5 className="description h5 form-label">
                  Select the Segments to assign:
                </h5>
                <div className="mycheckboxvalues row">
                  {workType.map((values) => (
                    <div className="checkboxDiv col-sm">
                      <input
                        type="checkbox"
                        defaultValue={values}
                        className="mycheckbox form-check-input"
                        onChange={(e) => AddRole(e)}
                      ></input>
                      <span className="mycheckboxvalues h5">{values}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="submit-button">
                <button type="submit" className=" Mybutton btn btn-success">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* table/////////////////////////// */}

        <div className="table-section">
          <table className="tabledata table">
            <thead className="myhead">
              <tr>
                <th scope="col">
                  <h5 className="description h5 form-label">USERNAME</h5>
                </th>
                <th scope="col">
                  <h5 className="description h5 form-label">
                    SEGEMENT_ASSIGNED
                  </h5>
                </th>
                <th scope="col">
                  <h5 className="description h5 form-label">WORK</h5>
                </th>
                <th scope="col">
                  <h5 className="description h5 form-label"></h5>
                </th>
              </tr>
            </thead>
            <tbody>
              {segementCollection.map((values,index) => {
                return (
                  <tr scope="row">
                    <td>
                      <h5 className="description h5 form-label">
                        {values.username}
                      </h5>
                    </td>
                    {/* <td>{Mydata(values.segement_assigned)}</td>
                  <td>{Mydata(values.work)}</td> */}
                    <td>{Mydata(values.segement_assigned)}</td>
                    <td>{Mydata(values.work)} 

                    <div class="modal fade" id="myModal1">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">NEW USER ENTRY</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div class=" modaluser modal-body">
      <form onSubmit={UpdateSubmit}>
        <div className="userdata">
        <h6 className="description h6 form-label">Username:</h6>
        <input type='text' className=" formname form-control" value={tableEntry.username} disabled></input>
        </div>
        <div className="checkboxData ">
        <h5 className="description  form-label">
                  Select the defect work to assign:
                </h5>
                
                <div className="mycheckboxvalues row">
        {

          SegmentData.map((values,index)=>{
          
          
            if(tableEntry.segement_assigned.includes(values)===true)
            {
            
             return(
              <>
               <div className="checkboxDiv col-sm-6">
                      <input
                        type="checkbox"
                        defaultValue={values}
                        checked={tableEntry.segement_assigned.includes(values)}
                        onChange={(e)=>changeSegementAssigned(e)}
                        className="mycheckboxpopup form-check-input"
                      ></input>
                      <span className="mycheckboxvalues h5">{values}</span>
                    </div>
              
              </>
             )
            
              
            }
            if(tableEntry.segement_assigned.includes(values)===false){
              return(
                <>
                <div className="checkboxDiv col-sm-6">
                      <input
                        type="checkbox"
                        value={values}
                        checked={tableEntry.segement_assigned.includes(values)}
                        onChange={(e)=>changeSegementAssigned(e)}
                        className="mycheckboxpopup form-check-input"
                      ></input>
                      <span className="mycheckboxvalues h5">{values}</span>
                    </div>
                </>
              )
            }
          })
        }
        </div>
        </div>
        <div className="checkboxData">
                <h5 className="description h5 form-label">
                  Select the Segments to assign:
                </h5>
                <div className="mycheckboxvalues row">
                  {workType.map((values) => {
                    if(tableEntry.work.includes(values)===true)
                    {
                      return(
                    <div className="checkboxDiv col-sm-6">
                      <input
                        type="checkbox"
                      value={values}
                        checked={tableEntry.work.includes(values)}
                        onChange={(e)=>changeWorkAssigned(e)}
                        className="mycheckboxwork form-check-input"
                      ></input>
                      <span className="mycheckboxvalues h5">{values}</span>
                    </div>
                      )
                  }
                  else{
                    return(
                      <div className="checkboxDiv col-sm-6">
                      <input
                        type="checkbox"
                        value={values}
                        checked={tableEntry.work.includes(values)}
                        onChange={(e)=>changeWorkAssigned(e)}
                        className="mycheckboxwork form-check-input"
                      ></input>
                      <span className="mycheckboxvalues h5">{values}</span>
                    </div>
                    )
                  }
                }
                  )}
                </div>
              </div>
              <div className="submit-button">
                <button type="submit" className=" Mybutton btn btn-success">SUBMIT</button>
                </div>
      </form>
      </div>

    
      </div>
      </div>
      </div>
      

                 
                    </td>
                    <td> 
                      <div className="buttondata">
                                          
                       <button className="Mybutton btn btn-secondary"  data-bs-toggle="modal" data-bs-target="#myModal1" onClick={()=>ModalData(index)}>Edit</button>
                    <button className="Mybutton btn btn-danger">Delete</button>
                    </div>
                  </td>
                  
                    
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div class="modal fade" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">NEW USER ENTRY</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div class=" modaluser modal-body">
        <form>
          <div className="userdata">
        <h6 className="description h6 form-label">Enter the username</h6>
        <input type='text' className=" formname form-control" value={newusername} onChange={(e)=>setNewUserName(e.target.value)}></input>
        </div>
        <div className="userdata">
        <h6 className="description h6 form-label">Enter the password:</h6>
        <input type='password' className=" formname form-control" value={newusername} onChange={(e)=>setNewUserName(e.target.value)}></input>
        </div>
                <button type="submit" className=" Mybutton btn btn-success" data-bs-dismiss>Submit</button>
        </form>
      </div>


    </div>
  </div>
</div>




      </div>
    </SegmentManagementStyle>
  );
};

export default SegementManagement;
