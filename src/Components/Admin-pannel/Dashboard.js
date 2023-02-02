import React from "react";
import { DashboardStyled } from "../Styled-Components/VehicleHistoryStyled";
import data from "./vehicleinfo.json";
import { useState } from "react";
// import styles from "./dashboard.module.css";

const Dashboard = () => {
  const uniqueArr = [...new Set(data.map((value) => value.Segement))];
  const [period, setPeriod] = useState();
  const [startdate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [flag, setFlag] = useState(0);
  const [defectSegment, setDefectSegement] = useState("");

  function DateChecker(valueData) {
    let booleanData = false;
    let todaydate = new Date();
    if (period === "Today") {
      const [day, month, year] = valueData.split("/");

      const dateValue = new Date(+year, month - 1, +day);

      const todayDate = new Date();

      if (dateValue.getDate() === todayDate.getDate()) {
        booleanData = true;
      }
    }

    if (period === "Weekly") {
      const [day, month, year] = valueData.split("/");

      const dateValue = new Date(+year, month - 1, +day);

      const weekbefore = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

      if (dateValue > weekbefore && dateValue < todaydate) {
        booleanData = true;
      }
    }
    if (period === "Monthly") {
      const [day, month, year] = valueData.split("/");

      const dateValue = new Date(+year, month - 1, +day);

      const weekbefore = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

      if (dateValue > weekbefore && dateValue < todaydate) {
        booleanData = true;
      }
    }

    return booleanData;
  }

  const dataSetting = (e) => {
    setFlag(1);
    setPeriod(e.target.value);
  };

  const myStartDate = (e) => {
    setStartDate(e.target.value);
    console.log("Date", startdate);
  };
  const myEndDate = (e) => {
    setFlag(2);
    setEndDate(e.target.value);
    console.log("End", endDate);
  };

  const segmentHandler = (e) => {
    setFlag(3);
    setDefectSegement(e.target.value);
    console.log("segement", defectSegment);
    // checkSegmentHandler()
  };

  // const checkSegmentHandler = () => {
  //   let defects = data.filter((element)=>{
  //     let result = element.repaired.filter((item)=> item.Segement === segment)
  //     return result
  //   })
  //   console.log(defects)
  // };

  function DateSpanChecker(valueData) {
    let booleanData = false;
    const [day, month, year] = valueData.split("/");
    const dateValue = new Date(+year, month - 1, +day);
    let start = new Date(startdate);
    let end = new Date(endDate);
    console.log(start);
    console.log(end);

    if (dateValue >= start && dateValue <= end) {
      booleanData = true;
    }
    console.log(booleanData);
    return booleanData;
  }

  console.log("Flag", flag);
  const [inputData, setinputData] = useState();

  function ShowOnlyList() {
    return (
      <>
        {data.filter((value) => value.Segement === inputData).length > 0 ? (
          <div className="defectlist">
            {data
              .filter((value) => value.Segement === inputData)
              .map((info) =>
                info.repaired.map((defectdata) => (
                  <div className="listdata d-flex">
                    <div className="vinNumber mx-2 my-2">{info.vin}</div>
                    <div className="Segement mx-2 my-2">{info.Segement}</div>
                    <div className="description mx-2 my-2">
                      {defectdata.description}
                    </div>
                  </div>
                ))
              )}
          </div>
        ) : (
          <h1>Not Found</h1>
        )}
      </>
    );
  }

  function ShowOnlyListWithPeriod() {
    return (
      <>
        {data.filter(
          (value) =>
            value.Segement === inputData && DateChecker(value.date) === true
        ).length > 0 ? (
          <div className={"defectlist"}>
            {data
              .filter(
                (value) =>
                  value.Segement === inputData &&
                  DateChecker(value.date) === true
              )
              .map((info) =>
                info.repaired.map((defectdata) => (
                  <div className="listdata d-flex">
                    <div className="mx-2 my-2">{info.vin}</div>
                    <div className="mx-2 my-2">{info.Segement}</div>
                    <div className="mx-2 my-2">{defectdata.description}</div>
                  </div>
                ))
              )}
          </div>
        ) : (
          <h1>Not Found</h1>
        )}
      </>
    );
  }
  function ShowOnlyListWithStartAndEndDate() {
    return (
      <>
        {data.filter(
          (value) =>
            value.Segement === inputData && DateSpanChecker(value.date) === true
        ).length > 0 ? (
          <div className={"defectlist"}>
            {data
              .filter(
                (value) =>
                  value.Segement === inputData &&
                  DateSpanChecker(value.date) === true
              )
              .map((info) =>
                info.repaired.map((defectdata) => (
                  <div className="listdata d-flex">
                    <div className="mx-2 my-2">{info.vin}</div>
                    <div className="mx-2 my-2">{info.Segement}</div>
                    <div className="mx-2 my-2">{defectdata.description}</div>
                  </div>
                ))
              )}
          </div>
        ) : (
          <h1>Not Found</h1>
        )}
      </>
    );
  }

  function segementWiseRendering() {
    return (
      <>
        {data.filter(
          (value) =>
            value.Segement === inputData && DateSpanChecker(value.date) === true
        ).length > 0 ? (
          <div className={"defectlist"}>
            {data
              .filter(
                (value) =>
                  value.Segement === inputData &&
                  DateSpanChecker(value.date) === true
              )
              .map((info) =>
                info.repaired
                  .filter((item) => item.Segement === defectSegment)
                  .map(
                    (defectdata) => {
                      return (
                        <div className="listdata d-flex">
                          <div className="mx-2 my-2">{info.vin}</div>
                          <div className="mx-2 my-2">{info.Segement}</div>
                          <div className="mx-2 my-2">{info.Segement}</div>
                          <div className="mx-2 my-2">
                            {defectdata.description}
                          </div>
                        </div>
                      );
                    }
                    //   info.repaired.map((defectdata) => {
                    //     <div className="listdata d-flex">
                    //       <div className="mx-2 my-2">{info.vin}</div>
                    //       <div className="mx-2 my-2">{info.Segement}</div>
                    //       <div className="mx-2 my-2">{info.Segement}</div>
                    //       <div className="mx-2 my-2">{defectdata.description}</div>
                    //     </div>
                    //  }
                  )
              )}
          </div>
        ) : (
          <h1>Not Found</h1>
        )}
      </>
    );
  }

  function Combiner() {
    if (flag === 0) {
      return <>{ShowOnlyList()}</>;
    } else if (flag === 1) {
      return <>{ShowOnlyListWithPeriod()}</>;
    } else if (flag === 2) {
      return <>{ShowOnlyListWithStartAndEndDate()}</>;
    } else if (flag === 3) {
      return <>{segementWiseRendering()}</>;
    }
  }

  return (
    <DashboardStyled className={"mainpart"}>
      <div className={"modeldescription"}>
        <div className="inputElement">
          <h5>MODEL</h5>
          <select
            className={"Model"}
            onChange={(e) => setinputData(e.target.value)}
            defaultValue={inputData}
          >
            <option value="Choose" selected>
              Choose
            </option>
            {uniqueArr.map((data) => (
              <option value={data}>{data}</option>
            ))}
          </select>
        </div>
        <div className="inputElement">
          <h5>Period</h5>
          <select
            className={"Model"}
            onChange={(e) => dataSetting(e)}
            defaultValue={period}
          >
            <option value="Choose" selected>
              Choose
            </option>
            <option value="Today">Today</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>
        <div className="inputElement">
          <h5>Segement</h5>
          <select className={"Model"} onChange={(e) => segmentHandler(e)}>
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
            className={"startdate"}
            onChange={(e) => myStartDate(e)}
          ></input>
        </div>
        <div className="inputElement">
          <h5>End Date</h5>
          <input
            type="date"
            className={"enddate"}
            onChange={(e) => myEndDate(e)}
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
            <label className="form-check-label" for="inlineRadio1">
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
            <label className="form-check-label" for="inlineRadio2">
              New
            </label>
          </div>
        </div>
        <div className="defects">{Combiner()}</div>
      </div>
    </DashboardStyled>
  );
};

export default Dashboard;
