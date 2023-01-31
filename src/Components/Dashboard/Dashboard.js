import React from "react";
import { DashboardStyled } from "../Styled-Components/DashboardStyled";
import data from './vehicleinfo.json';
import { useState } from "react";
import styles from './dashboard.module.css';

const Dashboard = () => {
  const uniqueArr = [... new Set(data.map(value => value.model))];
  const [period, setPeriod] = useState();
  const [startdate,setStartDate]=useState();
  const [endDate,setEndDate]=useState();
  const [flag,setFlag]=useState(0);

  function DateChecker(valueData) {
    let booleanData = false;
    let month;
    let todaydate = new Date();
    if (period === 'Today') {
      const [day, month, year] = valueData.split('/');

      const dateValue = new Date(+year, month - 1, +day);


      const todayDate = new Date();

      if (dateValue.getDate() === todayDate.getDate()) {
        booleanData = true;
      }



    }

    if (period === 'Weekly') {
      const [day, month, year] = valueData.split('/');

      const dateValue = new Date(+year, month - 1, +day);

     

      const weekbefore = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

      if ((dateValue > weekbefore) && (dateValue < todaydate)) {
        booleanData = true;
      }
    }
      if (period === 'Monthly') {
        const [day, month, year] = valueData.split('/');
       

        const dateValue = new Date(+year, month - 1, +day);

    

        const weekbefore = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

        if ((dateValue > weekbefore) && (dateValue < todaydate)) {
          booleanData = true;
        }
      }



      return booleanData;

    }


  
   const dataSetting=(e)=>{
    setFlag(1);
    setPeriod(e.target.value);
   }

const myStartDate=(e)=>{
  setStartDate(e.target.value);
  console.log("Date",startdate);
}
const myEndDate=(e)=>{
  setFlag(2);
  setEndDate(e.target.value);
  console.log("End",endDate);
}

function DateSpanChecker(valueData){
  let booleanData=false;
  const [day, month, year] = valueData.split('/');
  const dateValue = new Date(+year, month - 1, +day);
  let start=new Date(startdate);
  let end=new Date(endDate);
  console.log(start);
  console.log(end);


  if((dateValue>=start)&&(dateValue<=end))
  {
    booleanData=true;
  }
  console.log(booleanData);
return booleanData;
}

    console.log("Flag",flag);
    const [inputData, setinputData] = useState();
   


    function ShowOnlyList()
    {
      return(
        <>
        {data.filter((value)=>value.model===inputData).length>0?
        <div className={styles.defectlist}>
        <div className={styles.mydata}>
        {
          data.filter((value)=>value.model===inputData).map((info)=>
          info.repaired.map((defectdata) =>
          <div className={styles.listdata}>
            <h5>{info.vin}  {info.model}  {defectdata.description}</h5>

          </div>

        )
          )
          
          
        }
          </div>
          </div>

        :
        <h1>Not Found</h1>
        
        }
        </>
      )
    }
    
    function ShowOnlyListWithPeriod()
    {
      return(
        <>
        {data.filter((value)=>(value.model === inputData)&&(DateChecker(value.date)===true)).length>0?
        <div className={styles.defectlist}>
        <div className={styles.mydata}>
        {
          data.filter((value)=>(value.model === inputData)&&(DateChecker(value.date)===true)).map((info)=>
          info.repaired.map((defectdata) =>
          <div className={styles.listdata}>
            <h5>{info.vin}  {info.model}  {defectdata.description}</h5>

          </div>

        )
          )
          
          
        }
          </div>
          </div>

        :
        <h1>Not Found</h1>
        
        }
        </>
      )
    }
    function ShowOnlyListWithStartAndEndDate()
    {
      return(
        <>
        {data.filter((value)=>(value.model === inputData)&&(DateSpanChecker(value.date)===true)).length>0?
        <div className={styles.defectlist}>
        <div className={styles.mydata}>
        {
          data.filter((value)=>(value.model === inputData)&&(DateSpanChecker(value.date)===true)).map((info)=>
          info.repaired.map((defectdata) =>
          <div className={styles.listdata}>
            <h5>{info.vin}  {info.model}  {defectdata.description}</h5>

          </div>

        )
          )
          
          
        }
          </div>
          </div>

        :
        <h1>Not Found</h1>
        
        }
        </>
      )
    }

    function Combiner()
   {
    if(flag===0)
    {
      return(
        <>
        {ShowOnlyList()}
        </>
      )
    }
    else if(flag===1)
  {
    return(
      <>
     
   
        {ShowOnlyListWithPeriod()}
        </>
      )
    }
    else if(flag===2)
    return(
      <>
      {ShowOnlyListWithStartAndEndDate()}
      </>
    )
      
    
  }
   


   

    return (
      <div className={styles.mainpart}>
        <div className={styles.anotherpart}>
          <div className={styles.modeldescription}>
            <div className={styles.modelname}>
              <h5>MODEL</h5>
              <select className={styles.Model} onChange={(e) => setinputData(e.target.value)} defaultValue={inputData}>
              <option value='Choose' selected>Choose</option>
                {uniqueArr.map((data) =>
                                        <option value={data}>{data}</option>
                    
                )}

              </select>
            </div>
            <div className={styles.inputsearchperiod}>
              <h5>Period</h5>
              <select className={styles.Model} onChange={(e) => dataSetting(e)} defaultValue={period}>
               <option value='Choose' selected>Choose</option>
                <option value="Today">Today</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
              </select>
            </div>
            <div className={styles.inputstartdate}>
              <h5 >Start Date</h5>
              <input type='date' className={styles.startdate} onChange={(e)=>myStartDate(e)}></input>
            </div>
            <div className={styles.inputenddate}>
              <h5 >End Date</h5>
              <input type='date' className={styles.enddate} onChange={(e)=>myEndDate(e)}></input>
            </div>
          </div>
      
{Combiner()}
        
          </div>
        </div>

       
        

    );
  };

  export default Dashboard;
