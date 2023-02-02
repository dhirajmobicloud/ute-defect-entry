import React from "react";
import { DashboardStyled } from "../Styled-Components/DashboardStyled";
import data from "./vehicleinfo.json";
import { useState } from "react";
import moment from "moment/moment";
// import styles from "./dashboard.module.css";

const DashboardDM = () => {
  const [model, setModel] = useState('all');
  const [period, setPeriod] = useState("");
  const [startdate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [difectList, setDefectList] = useState(data);
  const [defectSegment, setDefectSegement] = useState("");
  const [weekDate, setWeekDate] = useState("");
  const [conditin, setCondition] = useState();

  // function DateChecker(valueData) {
  //   let booleanData = false;
  //   let todaydate = new Date();
  //   if (period === "Today") {
  //     const [day, month, year] = valueData.split("/");

  //     const dateValue = new Date(+year, month - 1, +day);

  //     const todayDate = new Date();

  //     if (dateValue.getDate() === todayDate.getDate()) {
  //       booleanData = true;
  //     }
  //   }

  //   if (period === "Weekly") {
  //     const [day, month, year] = valueData.split("/");

  //     const dateValue = new Date(+year, month - 1, +day);

  //     const weekbefore = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

  //     if (dateValue > weekbefore && dateValue < todaydate) {
  //       booleanData = true;
  //     }
  //   }
  //   if (period === "Monthly") {
  //     const [day, month, year] = valueData.split("/");

  //     const dateValue = new Date(+year, month - 1, +day);

  //     const weekbefore = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

  //     if (dateValue > weekbefore && dateValue < todaydate) {
  //       booleanData = true;
  //     }
  //   }

  //   return booleanData;
  // }

  // const dataSetting = (e) => {
  //   setFlag(1);
  //   setPeriod(e.target.value);
  // };

  // const myStartDate = (e) => {
  //   setStartDate(e.target.value);
  //   console.log("Date", startdate);
  // };
  // const myEndDate = (e) => {
  //   setFlag(2);
  //   setEndDate(e.target.value);
  //   console.log("End", endDate);
  // };

  // const segmentHandler = (e) => {
  //   setFlag(3);
  //   setDefectSegement(e.target.value);
  //   console.log("segement", defectSegment);
  //   // checkSegmentHandler()
  // };

  // // const checkSegmentHandler = () => {
  // //   let defects = data.filter((element)=>{
  // //     let result = element.repaired.filter((item)=> item.Segement === segment)
  // //     return result
  // //   })
  // //   console.log(defects)
  // // };

  // function DateSpanChecker(valueData) {
  //   let booleanData = false;
  //   const [day, month, year] = valueData.split("/");
  //   const dateValue = new Date(+year, month - 1, +day);
  //   let start = new Date(startdate);
  //   let end = new Date(endDate);
  //   console.log(start);
  //   console.log(end);

  //   if (dateValue >= start && dateValue <= end) {
  //     booleanData = true;
  //   }
  //   console.log(booleanData);
  //   return booleanData;
  // }

  // console.log("Flag", flag);
  // const [inputData, setinputData] = useState();

  // function ShowOnlyList() {
  //   return (
  //     <>
  //       {data.filter((value) => value.Segement === inputData).length > 0 ? (
  //         <div className="defectlist">
  //           {data
  //             .filter((value) => value.Segement === inputData)
  //             .map((info) =>
  //               info.repaired.map((defectdata) => (
  //                 <div className="listdata d-flex">
  //                   <div className="vinNumber mx-2 my-2">{info.vin}</div>
  //                   <div className="Segement mx-2 my-2">{info.Segement}</div>
  //                   <div className="description mx-2 my-2">
  //                     {defectdata.description}
  //                   </div>
  //                 </div>
  //               ))
  //             )}
  //         </div>
  //       ) : (
  //         <h1>Not Found</h1>
  //       )}
  //     </>
  //   );
  // }

  // function ShowOnlyListWithPeriod() {
  //   return (
  //     <>
  //       {data.filter(
  //         (value) =>
  //           value.Segement === inputData && DateChecker(value.date) === true
  //       ).length > 0 ? (
  //         <div className={"defectlist"}>
  //           {data
  //             .filter(
  //               (value) =>
  //                 value.Segement === inputData && DateChecker(value.date) === true
  //             )
  //             .map((info) =>
  //               info.repaired.map((defectdata) => (
  //                 <div className="listdata d-flex">
  //                   <div className="mx-2 my-2">{info.vin}</div>
  //                   <div className="mx-2 my-2">{info.Segement}</div>
  //                   <div className="mx-2 my-2">{defectdata.description}</div>
  //                 </div>
  //               ))
  //             )}
  //         </div>
  //       ) : (
  //         <h1>Not Found</h1>
  //       )}
  //     </>
  //   );
  // }
  // function ShowOnlyListWithStartAndEndDate() {
  //   return (
  //     <>
  //       {data.filter(
  //         (value) =>
  //           value.Segement === inputData && DateSpanChecker(value.date) === true
  //       ).length > 0 ? (
  //         <div className={"defectlist"}>
  //           {data
  //             .filter(
  //               (value) =>
  //                 value.Segement === inputData &&
  //                 DateSpanChecker(value.date) === true
  //             )
  //             .map((info) =>
  //               info.repaired.map((defectdata) => (
  //                 <div className="listdata d-flex">
  //                   <div className="mx-2 my-2">{info.vin}</div>
  //                   <div className="mx-2 my-2">{info.Segement}</div>
  //                   <div className="mx-2 my-2">{defectdata.description}</div>
  //                 </div>
  //               ))
  //             )}
  //         </div>
  //       ) : (
  //         <h1>Not Found</h1>
  //       )}
  //     </>
  //   );
  // }

  // function segementWiseRendering() {
  //   return (
  //     <>
  //       {data.filter((value) => value.Segement === inputData && DateSpanChecker(value.date) === true ).length > 0 ? (
  //         <div className={"defectlist"}>
  //           {data
  //             .filter(
  //               (value) =>
  //                 value.Segement === inputData &&
  //                 DateSpanChecker(value.date) === true
  //             )
  //             .map((info) =>
  //             info.repaired.filter((item)=> item.Segement === defectSegment)
  //             .map((defectdata) => {
  //                  return <div className="listdata d-flex">
  //                     <div className="mx-2 my-2">{info.vin}</div>
  //                     <div className="mx-2 my-2">{info.Segement}</div>
  //                     <div className="mx-2 my-2">{info.Segement}</div>
  //                     <div className="mx-2 my-2">{defectdata.description}</div>
  //                   </div>
  //                }
  //             //   info.repaired.map((defectdata) => {
  //             //     <div className="listdata d-flex">
  //             //       <div className="mx-2 my-2">{info.vin}</div>
  //             //       <div className="mx-2 my-2">{info.Segement}</div>
  //             //       <div className="mx-2 my-2">{info.Segement}</div>
  //             //       <div className="mx-2 my-2">{defectdata.description}</div>
  //             //     </div>
  //             //  }
  //              )
  //             )}
  //         </div>
  //       ) : (
  //         <h1>Not Found</h1>
  //       )}
  //     </>
  //   );
  // }

  // function Combiner() {
  //   if (flag === 0) {
  //     return <>{ShowOnlyList()}</>
  //   }
  //   else if (flag === 1) {
  //     return <>{ShowOnlyListWithPeriod()}</>
  //   }
  //   else if (flag === 2){
  //     return <>{ShowOnlyListWithStartAndEndDate()}</>
  //   }
  //   else if (flag === 3){
  //     return <>{segementWiseRendering()}</>
  //   }

  // }
  const modelHandler = (e) => {
    setModel(e.target.value);
    if(e.target.value === "all"){
      
      setDefectList(data);
    }
    else{
      let list = data.filter((element) => element.model === e.target.value);
      setDefectList(list);
      setCondition(1)
      checkPeriod();
    }
    
  };

  const checkPeriod = (TimePeriod)=>{
    if(TimePeriod === "Today"){
      let date =  moment().format("L")
      setWeekDate(date)
      console.log(date)
    }
    else if(TimePeriod === "Weekly"){
      let date =  moment().subtract(7, 'days').calendar()
      setWeekDate(date)
      console.log(date)
    }
    else if(TimePeriod === "Monthly"){
      let date =  moment().subtract(30, 'days').calendar()
      setWeekDate(date)
      console.log(date)
    }
    
  }

  const periodlHandler = (e) => {
    let date = e.target.value
    checkPeriod(date)
    setPeriod(e.target.value);
    if(date === 'Today'){
      let list = data.filter((element) =>{ 
        return element.model === model && element.date === weekDate  
      });
      console.log(list)
      setDefectList(list);
      setCondition(1)
    }
    else if(date === 'Weekly'){
      let list = data.filter((element) =>{ 
        return element.model === model && element.date >= weekDate  
      });
      console.log(list)
      setDefectList(list);
      setCondition(1)
    }
    else if(date === 'Monthly'){
      let list = data.filter((element) =>{ 
        return element.model === model && element.date >= weekDate  
      });
      console.log(list)
      setDefectList(list);
      setCondition(1)
    }
    else{
      console.log('something went wrong')
    }
   
  };


  return (
    <DashboardStyled className={"mainpart"}>
      <div className={"modeldescription"}>
        <div className="inputElement">
          <h5>MODEL</h5>
          <select className={"Model"} onChange={modelHandler} value={model}>
            <option value="all" >
              All models
            </option>
            {data.map((vehicle, index) => (
              <option key={index} value={vehicle.model}>
                {vehicle.model}
              </option>
            ))}
          </select>
        </div>
        <div className="inputElement">
          <h5>Period</h5>
          <select
            className="Model"
            value={period}
            onChange={periodlHandler}
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
            onChange={(e) => setDefectSegement(e.target.value)}
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
            onChange={(e) => setEndDate(e.target.value)}
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
              value="option1"
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              default
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              New
            </label>
          </div>
        </div>
        <div className="defects">
          <div className="defectlist">
            {difectList
              ? difectList.map((element) => {
                  return element.repaired.map((item) => {
                    return (
                      <div className="listdata d-flex">
                        <div className="vinNumber mx-2 my-2">{element.vin}</div>
                        <div className="Segement mx-2 my-2">
                          {element.model}
                        </div>
                        <div className="Segement mx-2 my-2">{item.Segement}</div>
                        <div className="description mx-2 my-2">
                          {item.description}
                        </div>
                      </div>
                    );
                  });
                })
              : ""}
          </div>
        </div>
      </div>
    </DashboardStyled>
  );
};

export default DashboardDM;
