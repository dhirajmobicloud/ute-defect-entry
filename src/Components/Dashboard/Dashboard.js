import React from "react";
import { DashboardStyled } from "../Styled-Components/DashboardStyled";
import data from './vehicleinfo.json';
import { useState } from "react";
import styles from './dashboard.module.css';

const Dashboard = () => {
  const uniqueArr = [... new Set(data.map(value => value.model))];
  const [period, setPeriod] = useState('Today')

  function DateChecker(valueData) {
    let booleanData = false;
    let month;
    let todaydate = new Date();
    if (period === 'Today') {
      const [day, month, year] = valueData.split('/');
      console.log(day);
      console.log(month);
      console.log(year);

      const dateValue = new Date(+year, month - 1, +day);

      console.log(dateValue);

      const todayDate = new Date();

      if (dateValue === todayDate) {
        booleanData = true;
      }



    }

    if (period === 'Weekly') {
      const [day, month, year] = valueData.split('/');
      console.log(day);
      console.log(month);
      console.log(year);

      const dateValue = new Date(+year, month - 1, +day);

      console.log(dateValue);

      const weekbefore = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

      if ((dateValue > weekbefore) && (dateValue < todaydate)) {
        booleanData = true;
      }
    }
      if (period === 'Monthly') {
        const [day, month, year] = valueData.split('/');
        console.log(day);
        console.log(month);
        console.log(year);

        const dateValue = new Date(+year, month - 1, +day);

        console.log(dateValue);

        const weekbefore = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

        if ((dateValue > weekbefore) && (dateValue < todaydate)) {
          booleanData = true;
        }
      }



      return booleanData;

    }

    console.log("Main", data.filter(array => DateChecker(array.date) === true));




    console.log(data);
    const [inputData, setinputData] = useState(uniqueArr[0]);

    console.log(inputData);
    return (
      <div className={styles.mainpart}>
        <div className={styles.anotherpart}>
          <div className={styles.modeldescription}>
            <div className={styles.modelname}>
              <h5>MODEL</h5>
              <select className={styles.Model} onChange={(e) => setinputData(e.target.value)} defaultValue={inputData}>
                {uniqueArr.map((data) =>

                  <option value={data}>{data}</option>
                )}

              </select>
            </div>
            <div className={styles.inputsearchperiod}>
              <h5>Period</h5>
              <select className={styles.Model} onChange={(e) => setPeriod(e.target.value)}>
                <option value="Today">Today</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
              </select>
            </div>
            <div className={styles.inputstartdate}>
              <h5 >Start Date</h5>
              <input type='date' className={styles.startdate}></input>
            </div>
            <div className={styles.inputenddate}>
              <h5 >End Date</h5>
              <input type='date' className={styles.enddate}></input>
            </div>
          </div>
          {data.filter(value => value.model === inputData).length > 0 ?
            <div className={styles.defectlist}>
              <div className={styles.mydata}>
                {data.filter(value => value.model === inputData).map((info) =>
                  info.repaired.map((defectdata) =>
                    <div className={styles.listdata}>
                      <h5>{info.vin}  {info.model}  {defectdata.description}</h5>

                    </div>

                  )


                )}

              </div>
            </div> :
            null


          }
        </div>
      </div>

    );
  };

  export default Dashboard;
