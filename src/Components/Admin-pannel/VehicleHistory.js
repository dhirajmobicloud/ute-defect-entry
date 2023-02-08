import React from "react";
import { VehicleHistoryStyled } from "../Styled-Components/VehicleHistoryStyled";
import data from "./vehicleinfo.json";
import { useState } from "react";
// import moment from "moment/moment";
// import styles from "./dashboard.module.css";

const VehicleHistory = () => {
  const [model, setModel] = useState("all");
  const [period, setPeriod] = useState("all");
  const [startdate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [difectList, setDefectList] = useState(data);
  const [defectSegment, setDefectSegement] = useState("all");
  const [weekDate, setWeekDate] = useState("");
  const [flag, setflag] = useState(0);

  console.log("difectlist", difectList);
  console.log("Flag is", flag);

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
    if (e.target.value === "all") {
      setflag(1);
      setDefectList(data);
    } else {
      setflag(1);
      let list = data.filter((element) => element.model === e.target.value);
      setDefectList(list);
    }
    console.log("Hello", difectList);
  };

  function MyDateCheckerToday(mydate) {
    let booleanData = false;
    const [day, month, year] = mydate.split("/");
    let myValue = new Date(+year, month - 1, +day);
    return myValue;
  }

  const periodHandler = (e) => {
    setPeriod(e.target.value);
    alert(e.target.value + "Model:" + model + "Flag:" + flag);
    if (flag === 0) {
      if (model === "all") {
        if (e.target.value === "Today" && difectList.length > 0) {
          let mydate = new Date();
          console.log(mydate);
          let listData = difectList.filter(
            (values) =>
              MyDateCheckerToday(values.date).getDate() === mydate.getDate() &&
              MyDateCheckerToday(values.date).getMonth() ===
                mydate.getMonth() &&
              MyDateCheckerToday(values.date).getFullYear() ===
                mydate.getFullYear()
          );
          setDefectList(listData);
          setflag(2);
        }
        if (e.target.value === "Weekly" && difectList.length > 0) {
          let mydate = new Date();
          let datelast = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
          let listData = difectList.filter(
            (values) =>
              MyDateCheckerToday(values.date) >= datelast &&
              MyDateCheckerToday(values.date) <= mydate
          );
          setDefectList(listData);

          setflag(2);
        }
        if (e.target.value === "Monthly" && difectList.length > 0) {
          let mydate = new Date();
          let datelast = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
          let listData = difectList.filter(
            (values) =>
              MyDateCheckerToday(values.date) >= datelast &&
              MyDateCheckerToday(values.date) <= mydate
          );
          setDefectList(listData);

          setflag(2);
        }
      }
    }
    if (flag === 2) {
      if (model === "all") {
        if (e.target.value === "Today" && difectList.length > 0) {
          alert("Hello 2");
          let mydate = new Date();
          let listData = difectList.filter(
            (values) =>
              MyDateCheckerToday(values.date).getDate() === mydate.getDate() &&
              MyDateCheckerToday(values.date).getMonth() ===
                mydate.getMonth() &&
              MyDateCheckerToday(values.date).getFullYear() ===
                mydate.getFullYear()
          );
          setDefectList(listData);
          setflag(2);
        }
        if (e.target.value === "Weekly" && difectList.length === 0) {
          alert("Hello 3");
          let mydate = new Date();
          let datelast = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
          let listData = data.filter(
            (values) =>
              MyDateCheckerToday(values.date).getDate() === mydate.getDate() &&
              MyDateCheckerToday(values.date).getMonth === mydate.month &&
              MyDateCheckerToday(values.date).getFullYear() ===
                mydate.getFullYear
          );
          setDefectList(listData);
          setflag(2);
        }
        if (e.target.value === "Weekly" && difectList.length > 0) {
          alert("Hello 4");
          let mydate = new Date();
          let datelast = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
          let listData = data.filter(
            (values) =>
              MyDateCheckerToday(values.date) >= datelast &&
              MyDateCheckerToday(values.date) <= mydate
          );
          setDefectList(listData);
          setflag(2);
        }

        if (e.target.value === "Monthly" && difectList.length > 0) {
          alert("Hello4");
          let mydate = new Date();
          let datelast = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
          let listData = difectList.filter(
            (values) =>
              MyDateCheckerToday(values.date) >= datelast &&
              MyDateCheckerToday(values.date) <= mydate
          );
          setDefectList(listData);

          setflag(2);
        }
        if (e.target.value === "Weekly" && difectList.length === 0) {
          let mydate = new Date();
          let datelast = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
          let listData = data.filter(
            (values) =>
              MyDateCheckerToday(values.date) >= datelast &&
              MyDateCheckerToday(values.date) <= mydate
          );
          setDefectList(listData);

          setDefectList(listData);
          setflag(2);
        }
        if (e.target.value === "Monthly" && difectList.length > 0) {
          let mydate = new Date();
          let datelast = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
          let listData = data.filter(
            (values) =>
              MyDateCheckerToday(values.date) >= datelast &&
              MyDateCheckerToday(values.date) <= mydate
          );
          setDefectList(listData);

          setflag(2);
        }
        if (e.target.value === "Monthly" && difectList.length === 0) {
          let mydate = new Date();
          let datelast = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
          let listData = data.filter(
            (values) =>
              MyDateCheckerToday(values.date) >= datelast &&
              MyDateCheckerToday(values.date) <= mydate
          );
          setDefectList(listData);

          setflag(2);
        }
      }
    }
    if (flag === 1) {
      if (model === "all") {
        if (e.target.value === "Today" && difectList.length > 0) {
          let mydate = new Date();
          let listData = difectList.filter(
            (values) =>
              MyDateCheckerToday(values.date).getDate() === mydate.getDate() &&
              MyDateCheckerToday(values.date).getMonth() ===
                mydate.getMonth() &&
              MyDateCheckerToday(values.date).getFullYear() ===
                mydate.getFullYear()
          );
          setDefectList(listData);
          setflag(2);
        }
        if (e.target.value === "Weekly" && difectList.length > 0) {
          let mydate = new Date();
          let datelast = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
          let listData = difectList.filter(
            (values) => MyDateCheckerToday(values.date) >= datelast
          );
          setDefectList(listData);

          setflag(2);
        }
        if (e.target.value === "Monthly" && difectList.length > 0) {
          let mydate = new Date();
          let datelast = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
          let listData = difectList.filter(
            (values) => MyDateCheckerToday(values.date) >= datelast
          );
          setDefectList(listData);

          setflag(2);
        }
      }
    }
    if (flag === 1) {
      if (model !== "all") {
        if (e.target.value === "Today" && difectList.length > 0) {
          alert("Part 1");
          let mydate = new Date();
          let listData = difectList.filter(
            (values) =>
              MyDateCheckerToday(values.date).getDate() === mydate.getDate() &&
              MyDateCheckerToday(values.date).getMonth() ===
                mydate.getMonth() &&
              MyDateCheckerToday(values.date).getFullYear() ===
                mydate.getFullYear() &&
              values.model === model
          );
          setDefectList(listData);
          setflag(2);
        }
        if (e.target.value === "Weekly" && difectList.length > 0) {
          alert("Part2");
          let mydate = new Date();
          let datelast = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
          let listData = data.filter(
            (values) =>
              MyDateCheckerToday(values.date) >= datelast &&
              values.model === model
          );
          setDefectList(listData);

          setflag(2);
        }
        if (e.target.value === "Weekly" && difectList.length === 0) {
          alert("Part8");
          let mydate = new Date();
          let datelast = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
          let listData = data.filter(
            (values) =>
              MyDateCheckerToday(values.date) >= datelast &&
              values.model === model
          );
          setDefectList(listData);

          setflag(2);
        }
        if (e.target.value === "Monthly" && difectList.length > 0) {
          alert("Part 3");
          let mydate = new Date();
          let datelast = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
          let listData = data.filter(
            (values) =>
              MyDateCheckerToday(values.date) >= datelast &&
              values.model === model
          );
          setDefectList(listData);

          setflag(2);
        }
        if (e.target.value === "Monthly" && difectList.length === 0) {
          alert("Part 3");
          let mydate = new Date();
          let datelast = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
          let listData = data.filter(
            (values) =>
              MyDateCheckerToday(values.date) >= datelast &&
              values.model === model
          );
          setDefectList(listData);

          setflag(2);
        }
      }
    }

    if (flag === 2) {
      if (model !== "all") {
        if (e.target.value === "Today" && difectList.length > 0) {
          alert("Part4");
          let mydate = new Date();
          let listData = difectList.filter(
            (values) =>
              MyDateCheckerToday(values.date).getDate() === mydate.getDate() &&
              MyDateCheckerToday(values.date).getMonth() ===
                mydate.getMonth() &&
              MyDateCheckerToday(values.date).getFullYear() ===
                mydate.getFullYear() &&
              values.model === model
          );
          setDefectList(listData);
          setflag(2);
        }

        if (e.target.value === "Weekly" && difectList.length > 0) {
          alert("part6");
          let mydate = new Date();
          let datelast = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
          let listData = data.filter(
            (values) =>
              values.model === model &&
              MyDateCheckerToday(values.date) >= datelast &&
              MyDateCheckerToday(values.date) <= mydate
          );
          setDefectList(listData);
          console.log(listData);

          setflag(2);
        }
        if (e.target.value === "Weekly" && difectList.length === 0) {
          alert("part6");
          let mydate = new Date();
          let datelast = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
          let listData = data.filter(
            (values) =>
              values.model === model &&
              MyDateCheckerToday(values.date) >= datelast &&
              MyDateCheckerToday(values.date) <= mydate
          );
          setDefectList(listData);

          setflag(2);
        }
        if (e.target.value === "Monthly" && difectList.length > 0) {
          alert("Part8");
          let mydate = new Date();
          let datelast = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
          let listData = data.filter(
            (values) =>
              values.model === model &&
              MyDateCheckerToday(values.date) >= datelast &&
              MyDateCheckerToday(values.date) <= mydate
          );
          setDefectList(listData);

          setflag(2);
        }
        if (e.target.value === "Monthly" && difectList.length === 0) {
          alert("Part8");
          let mydate = new Date();
          let datelast = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
          let listData = data.filter(
            (values) =>
              values.model === model &&
              MyDateCheckerToday(values.date) >= datelast &&
              MyDateCheckerToday(values.date) <= mydate
          );
          setDefectList(listData);

          setflag(2);
        }
      }
    }
  };

  const EndDateFunction = (e) => {
    setEndDate(e.target.value);
    let start = new Date(startdate);
    let end = new Date(e.target.value);
    console.log(start);

    console.log(end);

    if (start > end) {
      alert("Invalid Date");
    }

    if (model === "all") {
      alert("Hello Part End");
      let listData = data.filter(
        (values) =>
          MyDateCheckerToday(values.date) >= start &&
          MyDateCheckerToday(values.date) <= end
      );
      setDefectList(listData);
    }
  };

  const MySegmentFunction = (e) => {
    let val = e.target.value;
    setDefectSegement(e.target.value);
    setflag(4);
    if (model === "all" && val != "all" && difectList.length > 0) {
      alert("Hello 123");
      let valueData = difectList.filter(
        (item) => item.repaired.filter((c) => c.Segement == val).length > 0
      );
      console.log("Value is", valueData);
    }
  };

  /*
  function DateSpanChecker(values)
  {
    const [day,month,year]=values.split('/');
    const date=new Date(+year,month-1,+day);
    console.log(date);
    return date;
  }

  const DefectSegmentDecider=(e)=>{
    setflag(2);
    setDefectSegement(e.target.value);

  }

  const DateCheckerSpanFunction=(e)=>{
    setEndDate(e.target.value);
    let endDater=new Date(endDate);
    let startdater=new Date(startdate);
    if(startdater>endDater)
    {
      alert("Start Date entered wrong");
    }
    else{
      let listdata=difectList.filter((value)=>(DateSpanChecker(value.date)>=startdater)&&(DateSpanChecker(value.date)<=endDater));
      setDefectList(listdata);
    }
  }

  
 
*/

  function ShowDataCondition() {
    return (
      <div className="defects">
        <div className="defectlist">
          {difectList.length > 0
            ? difectList.map((element) => {
                return element.repaired.map((item) => {
                  return (
                    <div className="listdata d-flex">
                      <div className="vinNumber mx-2 my-2">{element.vin}</div>
                      <div className="Segement mx-2 my-2">{element.model}</div>
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
    );
  }

  return (
    <VehicleHistoryStyled className="mainpart">
      <div className="modeldescription">
        <div className="inputElement">
          <h5>MODEL</h5>
          <select className={"Model"} onChange={modelHandler} value={model}>
            <option value="all">All models</option>
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
            onChange={(e) => EndDateFunction(e)}
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
              DEFAULT
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
