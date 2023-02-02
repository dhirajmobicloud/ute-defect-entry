import React, { useState } from "react";
import { NewDefectsStyled } from "../Styled-Components/NewDefectsStyled";
import data from "./vehicleinfo.json";

const NewDefects = () => {
  const [model, setModel] = useState("all");
  const [period, setPeriod] = useState("");
  const [startdate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [difectList, setDefectList] = useState(data);
  const [defectSegment, setDefectSegement] = useState("");
  const [weekDate, setWeekDate] = useState("");

  const modelHandler = (e) => {
    setModel(e.target.value);
    if (e.target.value === "all") {

     let list =  data.map((element) => {
        return {...element, repaired: element.repaired.filter((subElement) => subElement.new === "true")}
      })

      console.log(list)
      setDefectList(list);
    } else {
      let list = data.filter((element) => element.model === e.target.value);
      let list1 =  list.map((element) => {
        return {...element, repaired: element.repaired.filter((subElement) => subElement.new === "true")}
      })
      setDefectList(list1);

      checkPeriod();
    }
  };

  const checkPeriod = (TimePeriod) => {
    if (TimePeriod === "Today") {
      // let date =  moment().format("L")
      // setWeekDate(date)
      // console.log(date)
    } else if (TimePeriod === "Weekly") {
      // let date =  moment().subtract(7, 'days').calendar()
      // setWeekDate(date)
      // console.log(date)
    } else if (TimePeriod === "Monthly") {
      // let date =  moment().subtract(30, 'days').calendar()
      // setWeekDate(date)
      // console.log(date)
    }
  };

  const periodlHandler = (e) => {
    let date = e.target.value;
    checkPeriod(date);
    setPeriod(e.target.value);
    if (date === "Today") {
      let list = data.filter((element) => {
        return element.model === model && element.date === weekDate;
      });
      console.log(list);
      setDefectList(list);
    } else if (date === "Weekly") {
      let list = data.filter((element) => {
        return element.model === model && element.date >= weekDate;
      });
      console.log(list);
      setDefectList(list);
    } else if (date === "Monthly") {
      let list = data.filter((element) => {
        return element.model === model && element.date >= weekDate;
      });
      console.log(list);
      setDefectList(list);
    } else {
      console.log("something went wrong");
    }
  };

  return (
    <NewDefectsStyled className="mainpart">
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
          <select className="Model" value={period} onChange={periodlHandler}>
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
        {/* <div className="inputElement">
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
        </div> */}
      </div>
      <div className="defect-list-container container-fluid">
        <div className="defects">
          <div className="defectlist">
            {difectList
              ? difectList.map((element) => {
                  return element.repaired.map((item) => {
                    return (
                      <div className="listdata d-flex">
                        <div>
                          <form className="mx-2">
                            <input type="checkbox" />
                          </form>
                        </div>
                        <div className="vinNumber mx-2 my-2">{element.vin}</div>
                        <div className="Segement mx-2 my-2">
                          {element.model}
                        </div>
                        <div className="Segement mx-2 my-2">
                          {item.Segement}
                        </div>
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
    </NewDefectsStyled>
  );
};

export default NewDefects;
