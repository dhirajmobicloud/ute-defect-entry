import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { NewDefectsStyled } from "../Styled-Components/NewDefectsStyled";
import data from "./vehicleinfo.json";

const NewDefects = () => {
  const [model, setModel] = useState("all");
  const [period, setPeriod] = useState("");
  const [startdate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [defectSegment, setDefectSegement] = useState("");
  const [timePeriod, setTimePeriod] = useState("");

  let list = data.map((element) => {
    return {
      ...element,
      repaired: element.repaired.filter(
        (subElement) => subElement.new === "true"
      ),
    };
  });
  console.log(list.filter((element) => element.repaired.length > 0));

  const [newDefectList, setNewDefectList] = useState(
    list.filter((element) => element.repaired.length > 0)
  );

  useEffect(() => {
    console.log(newDefectList);
  }, []);

  const modelHandler = (e) => {
    setModel(e.target.value);
    if (e.target.value === "all") {
      let list = data.map((element) => {
        return {
          ...element,
          repaired: element.repaired.filter(
            (subElement) => subElement.new === "true"
          ),
        };
      });

      console.log(list.filter((element) => element.repaired.length > 0));
      setNewDefectList(list.filter((element) => element.repaired.length > 0));
    } else {
      let list = data.filter((element) => element.model === e.target.value);
      let list1 = list.map((element) => {
        return {
          ...element,
          repaired: element.repaired.filter(
            (subElement) => subElement.new === "true"
          ),
        };
      });
      setNewDefectList(list1);

      checkPeriod();
    }
  };

  const checkPeriod = (TimePeriod) => {
    if (TimePeriod === "Today") {
      let date = moment().format("L");
      let today = new Date(date);
      setTimePeriod(today);
      console.log(today);
    } else if (TimePeriod === "Weekly") {
      let date = moment().subtract(7, "days").calendar();
      let week = new Date(date);
      setTimePeriod(week);
      console.log(week);
    } else if (TimePeriod === "Monthly") {
      let date = moment().subtract(30, "days").calendar();
      let month = new Date(date);
      setTimePeriod(month);
      console.log(month);
    }
  };

  const periodlHandler = (e) => {
    let date = e.target.value;
    // checkPeriod(date);
    setPeriod(e.target.value);
    console.log(timePeriod);
    if (date === "Today") {
      let date = moment().format("L");
      let today = new Date(date);
      setTimePeriod(today);
      console.log(today);
      let list = newDefectList.filter(
        (element) => new Date(element.date) === today
      );
      // let a = new Date(element.date)
      // console.log(new Date(element.date))
      // return  a === today;
      console.log(list);
      setNewDefectList(list);
    } else if (date === "Weekly") {
      let list = data.filter((element) => {
        let a = element.date;
        console.log(a);
        return element.model === model && a >= timePeriod;
      });
      console.log(list);
      setNewDefectList(list);
    } else if (date === "Monthly") {
      let list = data.filter((element) => {
        let a = new Date(element.date);
        return element.model === model && a >= timePeriod;
      });
      console.log(list);
      setNewDefectList(list);
    } else {
      console.log("something went wrong");
    }
  };

  const segementHandler = (e) => {
    console.log(e.target.value);
    setDefectSegement(e.target.value);
    let list = newDefectList.filter((element) => element.model === model);
    let list1 = list.map((element) => {
      return {
        ...element,
        repaired: element.repaired.filter(
          (subElement) => subElement.segement === e.target.value
        ),
      };
      // return {...element, repaired: element.repaired.filter((subElement) => subElement.new === "true")}
    });
    setNewDefectList(list1);
    console.log(list1);
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
            onChange={segementHandler}
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
            {newDefectList
              ? newDefectList.map((element) => {
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
                          {item.segement}
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

      <div className="section-2">
              <div className="management-section">
                
              </div>
      </div>

    </NewDefectsStyled>
  );
};


export default NewDefects;
