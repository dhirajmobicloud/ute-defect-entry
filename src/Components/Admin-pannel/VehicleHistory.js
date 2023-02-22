import React from "react";
import { VehicleHistoryStyled } from "../Styled-Components/VehicleHistoryStyled";
import { useState,useEffect } from "react";
import axios from "axios";
// import moment from "moment/moment";
// import styles from "./dashboard.module.css";

const VehicleHistory = () => {
  const [difectList, setDefectList] = useState([]);
  const [mylistdata,setMyListData]=useState([]);
  const [myanotherdata,setMyAnotherData]=useState([]);

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_API_URL}/all_vehicles`).then((response)=>{
      setDefectList(response.data);
      setMyListData(response.data);
      
    }).catch((err)=>{
      console.log(err);
    })

  },[])
  const vehicleModels=["Nexon Petrol", "Nexon Electric","Nexon Vxi","Compass Vxi","Compass Petrol", "Compass Electric","Compass Diesel","Meridien Electric","Meridien Vxi","Meridien Petrol","Meridien Diesel"];
  
 
  const [model, setModel] = useState("all");
 
  const [period, setPeriod] = useState("all");
  const [startdate, setStartDate] = useState();
  const [flagger,setflagger]=useState(0);
  const [endDate, setEndDate] = useState();
 
  const [defectSegment, setDefectSegement] = useState("all");
  const [weekDate, setWeekDate] = useState("");
  const [flag, setflag] = useState(0);
  const [newData,setNewData]=useState([]);
  const [newlist,setNewlist]=useState([]);
  let [jsondata,setJsonData]=useState({vin:'',model:'',repaired:[]});
  let [radiodata,setRadiodata]=useState("default");
  let [myFilteredSegment,setMyFilteredSegment]=useState([]);


  function MyDateCheckerToday(mydate) {
  
     let newDate=mydate.substring(0,mydate.indexOf("T"));

     return newDate;
  }

  function FilterDataBasedOnDate()
  {
    let myarray=new Array();
    for(let i=0;i<difectList.length;i++)
    {
     if(difectList[i].date!==undefined)
     {
      myarray.push(difectList[i]);
     }
    }

   return myarray;
  
  }

 const myanswerarray=FilterDataBasedOnDate();
 console.log("Answer is",myanswerarray);

 console.log("Answer Array is the",myanotherdata);

 console.log("Defect List is",difectList);

 


 

 
  
  console.log("Flag is", flag);

  
  const modelHandler = (e) => {
    setModel(e.target.value);
    if(e.target.value!=="all")
    {
      setMyListData(difectList.filter((values)=>values.model===e.target.value))
    }
    else{
      setMyListData(difectList);
    }
 
  };


 
  const periodHandler=(e)=>{
    setPeriod(e.target.value);
 
  
  }
  const EndDateFunction = (e) => {
    setEndDate(e.target.value);
    let start = new Date(startdate);
    let end = new Date(e.target.value);
    console.log(start);

    console.log(end);

    if (start > end) {
      alert("Invalid Date");
    }

  
      let listData = difectList.filter(
        (values) =>
          MyDateCheckerToday(values.date) >= start &&
          MyDateCheckerToday(values.date) <= end
      );
      setDefectList(listData);
    
  };

  const MySegmentFunction = (e) => {
    setDefectSegement(e.target.value);
    
    if(e.target.value!=='all')
    {
      let myarray=new Array();
      for(let i=0;i<mylistdata.length;i++)
    {
    
      for(let j=0;j<mylistdata[i].repaired.length;j++)
      {
        let mydata={vin:'',model:'',date:'',repaired:[]};
        let repairedarray=[];
        if(mylistdata[i].repaired[j].Segement===e.target.value)
        {
           repairedarray.push(difectList[i].repaired[j]);
          mydata.vin=mylistdata[i].vin;
          mydata.model=mylistdata[i].model;
          mydata.date=mylistdata[i].date;
          mydata.repaired=repairedarray;
          console.log("MyAnswer is", mydata);
          myarray.push(mydata);
        }

        console.log("My Array is",myarray);
        setMyListData(myarray);
      }
    }

  
      }
      else{
        setMyListData(difectList);
      }
    }

     
   
    




  const myNewFunction=(e)=>{
    setRadiodata(e.target.value);
    if(e.target.value==="new")
    {
      let myarray=new Array();
      for(let i=0;i<mylistdata.length;i++)
      {
        for(let j=0;j<mylistdata[i].repaired.length;j++)
        {
          let mydata={vin:'',model:'',repaired:[]};
          let repairedarray=[];
          console.log("New Data is",mylistdata[i].repaired[j].new);
          if(mylistdata[i].repaired[j].new===true)
          {
            repairedarray.push(mylistdata[i].repaired[j])
            mydata.vin=mylistdata[i].vin;
            mydata.model=mylistdata[i].model;
            mydata.repaired=repairedarray;

            console.log("My Data is",mydata);
            myarray.push(mydata);
          }
        }
      }
      setMyListData(myarray);

    }
    else{
      setMyListData(difectList)
    }
  }

  
 
  function ShowDataCondition() {
    return (
      <div className="defects">
        <div className="defectlist">
          {mylistdata.length > 0
            ? mylistdata.map((element) => {
                return element.repaired.map((item) => {
                  return (
                    <div className="listdata d-flex">
                      <div className="vinNumber mx-2 my-2">{element.vin}</div>
                      <div className="Segement mx-2 my-2">{element.model}</div>
                      <div className="Segement mx-2 my-2">{item.Segement}</div>
                      <div className="description mx-2 my-2">
                        {item.Descrizione}
                      </div>
                    </div>
                  );
                });
              })
            : ""}
        </div>
      </div>
    );
  }

  return (
    <VehicleHistoryStyled className="mainpart">
      <div className="modeldescription">
        <div className="inputElement">
          <h5>MODEL</h5>
          <select className={"Model"} onChange={(e)=>modelHandler(e)} value={model}>
            <option value="all">All models</option>
            {vehicleModels.map((vehicle, index) => (
              <option key={index} value={vehicle}>
                {vehicle}
              </option>
            ))}
          </select>
        </div>
        <div className="inputElement">
          <h5>Period</h5>
          <select
            className="Model"
            value={period}
            onChange={(e) => periodHandler(e)}
          >
            <option value="all" selected>
              all
            </option>
            <option value="Today">Today</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>
        <div className="inputElement">
          <h5>Segement</h5>
          <select
            className="Model"
            value={defectSegment}
            onChange={(e) => MySegmentFunction(e)}
          >
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
        </div>
        <div className="inputElement">
          <h5>Start Date</h5>
          <input
            type="date"
            className="startdate"
            value={startdate}
            onChange={(e) => setStartDate(e.target.value)}
          ></input>
        </div>
        <div className="inputElement">
          <h5>End Date</h5>
          <input
            type="date"
            className="enddate"
            value={endDate}
          ></input>
        </div>
      </div>
      <div className="defect-list-container container-fluid">
        <div className="result-filter">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="default"
              checked={radiodata==="default"}
              onChange={(e)=>myNewFunction(e)}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              DEFAULT
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="new"
              onChange={(e)=>myNewFunction(e)}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              NEW
            </label>
          </div>
        </div>
        {ShowDataCondition()}
      </div>
    </VehicleHistoryStyled>
  );
};

export default VehicleHistory;
