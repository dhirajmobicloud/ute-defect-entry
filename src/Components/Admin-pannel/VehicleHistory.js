import React from "react";
import { VehicleHistoryStyled } from "../Styled-Components/VehicleHistoryStyled";
import { useState,useEffect } from "react";
import axios from "axios";
// import moment from "moment/moment";
// import styles from "./dashboard.module.css";

const VehicleHistory = () => {
  const [booleanFlag,setBooleanFlag]=useState(false);
  const [myarraydata,setmyarraydata]=useState([]);
  let [mylistdata,setMyListData]=useState([])
  let [myanotherdata,setMyAnotherData]=useState([]);
  let [radiodata,setRadiodata]=useState("default");

  useEffect(()=>{
    axios.get('https://easy-gray-camel-sock.cyclic.app/all_vehicles').then((response)=>{
      setBooleanFlag(true);
      setmyarraydata(response.data);
      setMyListData(response.data);
      setMyAnotherData(response.data);
     


   
      
    }).catch((err)=>{
      setBooleanFlag(true);
      console.log(err);
    })

  },[])

 

  const vehicleModels=["Nexon Petrol", "Nexon Electric","Nexon Vxi","Compass Vxi","Compass Petrol", "Compass Electric","Compass Diesel","Meridien Electric","Meridien Vxi","Meridien Petrol","Meridien Diesel","compass"];



      

  const [model, setModel] = useState("all");
 const [flag1,setflag1]=useState(0);
 const [flag2,setflag2]=useState(0);
 const [flag3,setflag3]=useState(0);
  const [period, setPeriod] = useState("all");
  const [startdate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
 
  const [defectSegment, setDefectSegement] = useState("all");
  const [weekDate, setWeekDate] = useState("");
  const [newData,setNewData]=useState([]);
  const [newlist,setNewlist]=useState([]);
  let [jsondata,setJsonData]=useState({vin:'',model:'',repaired:[]});
 
  let [myFilteredSegment,setMyFilteredSegment]=useState([]);


  function MyDateCheckerToday(mydate) {
  
     let newDate=mydate.substring(0,mydate.indexOf("T"));

     return newDate;
  }


function MyDateConverter(mydate)
{
  const [year, month, day] = mydate.split("-");
  let myValue = new Date(+year, month - 1, +day);
  return myValue;
}

function StartDateFunction(mydate)
{
  const [year, month, day]=mydate.split("-");
  let newDate=new Date(+year,month-1,day-1);
  return newDate;
}


const modelHandler=(e)=>{
  let modeldata=e.target.value;
  setModel(modeldata);
  let mydatavalues=mylistdata.filter((values)=>values.model===modeldata);
  setMyListData(mydatavalues);
  setMyAnotherData(mydatavalues);
}


const periodHandler=(e)=>{
  let periodData=e.target.value;
  setPeriod(periodData);
  if(periodData==='Today')
  {
    let newDate=new Date();
   let mydatavalues= mylistdata.filter((values)=>((MyDateConverter(MyDateCheckerToday(values.createdAt)).getFullYear()===newDate.getFullYear())&&(MyDateConverter(MyDateCheckerToday(values.createdAt)).getMonth()===newDate.getMonth())&&(MyDateConverter(MyDateCheckerToday(values.createdAt)).getDate()===newDate.getDate())));

   setMyListData(mydatavalues);
   setMyAnotherData(mydatavalues);
 

  }
  if(periodData==='Weekly')
  {
    let newDate=new Date(Date.now()+1*24*60*60*1000);
    let sevenDayBackDate=new Date(Date.now()-8*24*60*60*1000);
    let mydatavalues=mylistdata.filter((values)=>(MyDateConverter(MyDateCheckerToday(values.createdAt))<newDate&&MyDateConverter(MyDateCheckerToday(values.createdAt))>sevenDayBackDate));

    setMyListData(mydatavalues);
    setMyAnotherData(mydatavalues);
    
    
    
  }
  if(periodData==="Monthly")
  {
  
    
      let newDate=new Date(Date.now()+1*24*60*60*1000);
      let sevenDayBackDate=new Date(Date.now()-31*24*60*60*1000);
      let mydatavalues=mylistdata.filter((values)=>(MyDateConverter(MyDateCheckerToday(values.createdAt))<newDate&&MyDateConverter(MyDateCheckerToday(values.createdAt))>sevenDayBackDate));

      setMyListData(mydatavalues);
      setMyAnotherData(mydatavalues);
    
  
      
      
  
  }
  
}



    


const SegmentHandler=(e)=>{
  let SegmentData=e.target.value;
  setDefectSegement(SegmentData);
 alert(SegmentData);

 let myarray=new Array();

 for(let i=0;i<mylistdata.length;i++)
 {
  if(mylistdata[i].repaired.length>0)
  {
    myarray.push(mylistdata[i]);
  }
 }

 let myarray1=new Array();

 for(let i=0;i<myarray.length;i++)
 {
    let mydata={vin:myarray[i].vin,model:myarray[i].model,createdAt:myarray[i].createdAt,repaired:[]};
    for(let j=0;j<myarray[i].repaired.length;j++)
    {
      if(myarray[i].repaired[j].Segement===SegmentData)
      {
        mydata.repaired.push(myarray[i].repaired[j]);
      }
    }
    if(mydata.repaired.length>0);
    myarray1.push(mydata);
 }
 
 console.log("MY ARRAY AFTER FILTER IS=",myarray);
 console.log("MY ARRAY AFTER ARRAY1 IS=", myarray1);

let myfinalarray=new Array();

for(let i=0;i<myarray1.length;i++)
{
  if(myarray1[i].repaired.length>0)
  {
    myfinalarray.push(myarray1[i]);
  }
}

console.log(myfinalarray);
setMyListData(myfinalarray);
setMyAnotherData(myfinalarray);


 }

const NewDataHandler=(e)=>{
  setRadiodata(e.target.value);
  let mydata=e.target.value;
  alert(mydata);

  if(e.target.value==="new")
  {
    let myarray=new Array();

    for(let i=0;i<mylistdata.length;i++)
    {
      let mydata={vin:mylistdata[i].vin,model:mylistdata[i].model,createdAt:mylistdata[i].createdAt,repaired:[]}
      for(let j=0;j<mylistdata[i].repaired.length;j++)
      {
        if(mylistdata[i].repaired[j].new===true)
        {
          mydata.repaired.push(mylistdata[i].repaired[j]);
      }
    }

    if(mydata.repaired.length>0)
    {
      myarray.push(mydata);
    }
  }

  console.log("The Final Answer is mainly=",myarray);
 if(myarray.length===0)
 {
  mylistdata.length=0;
 }
 else if(myarray.length>0)
 {
  setMyListData(myarray);
 }
 
}
else if(e.target.value==="default")
{
  setMyListData(myanotherdata);
}
}

function MyCheckData(array1,array2)
{
  if(array1.length===0)
  {
    if(array2.length===0)
    {
      console.log("No Data needed to add");
    }
    else if(array2.length>0)
    {
      console.log("Needed to ADD DATA");
      setMyListData(array2);
      setMyAnotherData(array2);
    }
  }
  else if(array1.length>0)
  {
    if(array1.length===array2.length)
      {
           let k=0;
           for(let i=0;i<array2.length;i++)
           {
            if(array1[i].vin===array2[i].vin)
            {
              k=k+1;
            }
           }
           if(k===array1.length);
           {
            console.log("No Needed to add data");
           }
           if(k!==array1.length)
            {
               setMyListData(array2);
               setMyAnotherData(array2);
            }
           }

      }
      else if(array1.length!==array2.length)
      {
        console.log("Data Needed to Insert");
        setMyListData(array2);
        setMyAnotherData(array2);
      }
  }

  function PeriodData()
  {
    if(model!=="all"&&period==="all"&&defectSegment==="all"&&radiodata==="default")
    {
      console.log("Condiiton 1");
      let mydatavalues=myarraydata.filter((values)=>values.model===model);
     MyCheckData(mylistdata,mydatavalues);
    }
    if(model==="all"&&period!=="all"&&defectSegment==="all")
    {
      console.log("Condition 2");
      if(period==="Today")
      {
        console.log("Condition 2.1")
        let newDate=new Date();
        let mydatavalues= myarraydata.filter((values)=>((MyDateConverter(MyDateCheckerToday(values.createdAt)).getFullYear()===newDate.getFullYear())&&(MyDateConverter(MyDateCheckerToday(values.createdAt)).getMonth()===newDate.getMonth())&&(MyDateConverter(MyDateCheckerToday(values.createdAt)).getDate()===newDate.getDate())));

        MyCheckData(mylistdata,mydatavalues);

      }
      if(period==="Weekly")
      {
        console.log("Condition 2.2");
        let newDate=new Date(Date.now()+1*24*60*60*1000);
        let sevenDayBackDate=new Date(Date.now()-8*24*60*60*1000);
        let mydatavalues=myarraydata.filter((values)=>(MyDateConverter(MyDateCheckerToday(values.createdAt))<newDate&&MyDateConverter(MyDateCheckerToday(values.createdAt))>sevenDayBackDate));

        MyCheckData(mylistdata,mydatavalues);
      }
      if(period==="Monthly")
      {
        console.log("Condition 2.3");
        let newDate=new Date(Date.now()+1*24*60*60*1000);
        let sevenDayBackDate=new Date(Date.now()-31*24*60*60*1000);
        let mydatavalues=myarraydata.filter((values)=>(MyDateConverter(MyDateCheckerToday(values.createdAt))<newDate&&MyDateConverter(MyDateCheckerToday(values.createdAt))>sevenDayBackDate));

        MyCheckData(mylistdata,mydatavalues);
      }
    }
    if(model==="all"&&period==="all"&&defectSegment!=="all"&&radiodata==="default")
    {
      console.log("Condition 3");

      let myarray=new Array();

      for(let i=0;i<myarraydata.length;i++)
      {
       if(myarraydata[i].repaired.length>0)
       {
         myarray.push(myarraydata[i]);
       }
      }
     
      let myarray1=new Array();
     
      for(let i=0;i<myarray.length;i++)
      {
         let mydata={vin:myarray[i].vin,model:myarray[i].model,createdAt:myarray[i].createdAt,repaired:[]};
         for(let j=0;j<myarray[i].repaired.length;j++)
         {
           if(myarray[i].repaired[j].Segement===defectSegment)
           {
             mydata.repaired.push(myarray[i].repaired[j]);
           }
         }
         if(mydata.repaired.length>0);
         myarray1.push(mydata);
      }
      
      console.log("MY ARRAY AFTER FILTER IS=",myarray);
      console.log("MY ARRAY AFTER ARRAY1 IS=", myarray1);
     
     let myfinalarray=new Array();
     
     for(let i=0;i<myarray1.length;i++)
     {
       if(myarray1[i].repaired.length>0)
       {
         myfinalarray.push(myarray1[i]);
       }
     }
     MyCheckData(mylistdata,myfinalarray);
    }
    if(model==="all"&&period!=="all"&&defectSegment!=="all"&&radiodata==="default")
    {
      console.log("Condition 4");
      if(period==="Today")
      {
        console.log("Condition 4.1")
        let newDate=new Date();
        let mydatavalues= myarraydata.filter((values)=>((MyDateConverter(MyDateCheckerToday(values.createdAt)).getFullYear()===newDate.getFullYear())&&(MyDateConverter(MyDateCheckerToday(values.createdAt)).getMonth()===newDate.getMonth())&&(MyDateConverter(MyDateCheckerToday(values.createdAt)).getDate()===newDate.getDate())));

        let myarray=new Array();

        for(let i=0;i<mydatavalues.length;i++)
        {
         if(mydatavalues[i].repaired.length>0)
         {
           myarray.push(mydatavalues[i]);
         }
        }
       
        let myarray1=new Array();
       
        for(let i=0;i<myarray.length;i++)
        {
           let mydata={vin:myarray[i].vin,model:myarray[i].model,createdAt:myarray[i].createdAt,repaired:[]};
           for(let j=0;j<myarray[i].repaired.length;j++)
           {
             if(myarray[i].repaired[j].Segement===defectSegment)
             {
               mydata.repaired.push(myarray[i].repaired[j]);
             }
           }
           if(mydata.repaired.length>0);
           myarray1.push(mydata);
        }
        
        console.log("MY ARRAY AFTER FILTER IS=",myarray);
        console.log("MY ARRAY AFTER ARRAY1 IS=", myarray1);
       
       let myfinalarray=new Array();
       
       for(let i=0;i<myarray1.length;i++)
       {
         if(myarray1[i].repaired.length>0)
         {
           myfinalarray.push(myarray1[i]);
         }
       }
       MyCheckData(mylistdata,myfinalarray);

      }
      if(period==="Weekly")
      {
        console.log("Condition 4.2");
        let newDate=new Date(Date.now()+1*24*60*60*1000);
        let sevenDayBackDate=new Date(Date.now()-8*24*60*60*1000);
        let mydatavalues=myarraydata.filter((values)=>(MyDateConverter(MyDateCheckerToday(values.createdAt))<newDate&&MyDateConverter(MyDateCheckerToday(values.createdAt))>sevenDayBackDate));

        let myarray=new Array();

        for(let i=0;i<mydatavalues.length;i++)
        {
         if(mydatavalues[i].repaired.length>0)
         {
           myarray.push(mydatavalues[i]);
         }
        }
       
        let myarray1=new Array();
       
        for(let i=0;i<myarray.length;i++)
        {
           let mydata={vin:myarray[i].vin,model:myarray[i].model,createdAt:myarray[i].createdAt,repaired:[]};
           for(let j=0;j<myarray[i].repaired.length;j++)
           {
             if(myarray[i].repaired[j].Segement===defectSegment)
             {
               mydata.repaired.push(myarray[i].repaired[j]);
             }
           }
           if(mydata.repaired.length>0);
           myarray1.push(mydata);
        }
        
        console.log("MY ARRAY AFTER FILTER IS=",myarray);
        console.log("MY ARRAY AFTER ARRAY1 IS=", myarray1);
       
       let myfinalarray=new Array();
       
       for(let i=0;i<myarray1.length;i++)
       {
         if(myarray1[i].repaired.length>0)
         {
           myfinalarray.push(myarray1[i]);
         }
       }
       MyCheckData(mylistdata,myfinalarray);
      }
      if(period==="Monthly")
      {
        console.log("Condition 4.3");
        let newDate=new Date(Date.now()+1*24*60*60*1000);
        let sevenDayBackDate=new Date(Date.now()-31*24*60*60*1000);
        let mydatavalues=myarraydata.filter((values)=>(MyDateConverter(MyDateCheckerToday(values.createdAt))<newDate&&MyDateConverter(MyDateCheckerToday(values.createdAt))>sevenDayBackDate));

        let myarray=new Array();

        for(let i=0;i<mydatavalues.length;i++)
        {
         if(mydatavalues[i].repaired.length>0)
         {
           myarray.push(mydatavalues[i]);
         }
        }
       
        let myarray1=new Array();
       
        for(let i=0;i<myarray.length;i++)
        {
           let mydata={vin:myarray[i].vin,model:myarray[i].model,createdAt:myarray[i].createdAt,repaired:[]};
           for(let j=0;j<myarray[i].repaired.length;j++)
           {
             if(myarray[i].repaired[j].Segement===defectSegment)
             {
               mydata.repaired.push(myarray[i].repaired[j]);
             }
           }
           if(mydata.repaired.length>0);
           myarray1.push(mydata);
        }
        
        console.log("MY ARRAY AFTER FILTER IS=",myarray);
        console.log("MY ARRAY AFTER ARRAY1 IS=", myarray1);
       
       let myfinalarray=new Array();
       
       for(let i=0;i<myarray1.length;i++)
       {
         if(myarray1[i].repaired.length>0)
         {
           myfinalarray.push(myarray1[i]);
         }
       }
       MyCheckData(mylistdata,myfinalarray);
      }
    }

    if(model!=="all"&&period==="all"&&defectSegment!=="all")
    {
      console.log("Condition 5")
      let mydatavalues=myarraydata.filter((values)=>values.model===model);

      let myarray=new Array();

      for(let i=0;i<mydatavalues.length;i++)
      {
       if(mydatavalues[i].repaired.length>0)
       {
         myarray.push(mydatavalues[i]);
       }
      }
     
      let myarray1=new Array();
     
      for(let i=0;i<myarray.length;i++)
      {
         let mydata={vin:myarray[i].vin,model:myarray[i].model,createdAt:myarray[i].createdAt,repaired:[]};
         for(let j=0;j<myarray[i].repaired.length;j++)
         {
           if(myarray[i].repaired[j].Segement===defectSegment)
           {
             mydata.repaired.push(myarray[i].repaired[j]);
           }
         }
         if(mydata.repaired.length>0);
         myarray1.push(mydata);
      }
      
      console.log("MY ARRAY AFTER FILTER IS=",myarray);
      console.log("MY ARRAY AFTER ARRAY1 IS=", myarray1);
     
     let myfinalarray=new Array();
     
     for(let i=0;i<myarray1.length;i++)
     {
       if(myarray1[i].repaired.length>0)
       {
         myfinalarray.push(myarray1[i]);
       }
     }
     MyCheckData(mylistdata,myfinalarray);
    }
    if(model!=="all"&&period!=="all"&&defectSegment==="all")
    {
      console.log("Condition 6");
      let mydatavalues=myarraydata.filter((values)=>values.model===model);
      if(period==="Today")
      {
        console.log("Condition 6.1")
        let newDate=new Date();
        let mydata= mydatavalues.filter((values)=>((MyDateConverter(MyDateCheckerToday(values.createdAt)).getFullYear()===newDate.getFullYear())&&(MyDateConverter(MyDateCheckerToday(values.createdAt)).getMonth()===newDate.getMonth())&&(MyDateConverter(MyDateCheckerToday(values.createdAt)).getDate()===newDate.getDate())));
        MyCheckData(mylistdata,mydata);
      }
      if(period==="Weekly")
      {
        console.log("Condition 6.2");
        let newDate=new Date(Date.now()+1*24*60*60*1000);
        let sevenDayBackDate=new Date(Date.now()-8*24*60*60*1000);
        let mydata=mydatavalues.filter((values)=>(MyDateConverter(MyDateCheckerToday(values.createdAt))<newDate&&MyDateConverter(MyDateCheckerToday(values.createdAt))>sevenDayBackDate));
        MyCheckData(mylistdata,mydata);

      }
      if(period==="Monthly")
      {
        console.log("Condition 6.3");
        let newDate=new Date(Date.now()+1*24*60*60*1000);
        let sevenDayBackDate=new Date(Date.now()-31*24*60*60*1000);
        let mydata=mydatavalues.filter((values)=>(MyDateConverter(MyDateCheckerToday(values.createdAt))<newDate&&MyDateConverter(MyDateCheckerToday(values.createdAt))>sevenDayBackDate));
        MyCheckData(mylistdata,mydata);

      }
  }
  if(model==="all"&&period==="all"&&defectSegment==="all")
  {
    console.log("Condition 7");
    let mydatavalues=myarraydata;
    MyCheckData(mylistdata,mydatavalues);
  }

  if(model!=="all"&&period!="all"&&defectSegment!=="all")
  {
    console.log("Condition 8");
    let mydatavalues=myarraydata.filter((values)=>values.model===model);
    if(period==="Today")
      {
        console.log("Condition 8.1")
        let newDate=new Date();
        let mydata= mydatavalues.filter((values)=>((MyDateConverter(MyDateCheckerToday(values.createdAt)).getFullYear()===newDate.getFullYear())&&(MyDateConverter(MyDateCheckerToday(values.createdAt)).getMonth()===newDate.getMonth())&&(MyDateConverter(MyDateCheckerToday(values.createdAt)).getDate()===newDate.getDate())));

       let myarray=new Array();
 
        for(let i=0;i<mydata.length;i++)
        {
         if(mydata[i].repaired.length>0)
         {
           myarray.push(mydata[i]);
         }
        }
       
        let myarray1=new Array();
       
        for(let i=0;i<myarray.length;i++)
        {
           let mydata={vin:myarray[i].vin,model:myarray[i].model,createdAt:myarray[i].createdAt,repaired:[]};
           for(let j=0;j<myarray[i].repaired.length;j++)
           {
             if(myarray[i].repaired[j].Segement===defectSegment)
             {
               mydata.repaired.push(myarray[i].repaired[j]);
             }
           }
           if(mydata.repaired.length>0);
           myarray1.push(mydata);
        }
        
        console.log("MY ARRAY AFTER FILTER IS=",myarray);
        console.log("MY ARRAY AFTER ARRAY1 IS=", myarray1);
       
       let myfinalarray=new Array();
       
       for(let i=0;i<myarray1.length;i++)
       {
         if(myarray1[i].repaired.length>0)
         {
           myfinalarray.push(myarray1[i]);
         }
       }
       MyCheckData(mylistdata,myfinalarray);
      }
if(period==="Weekly")
{
  console.log("Condition 8.2");
  let newDate=new Date(Date.now()+1*24*60*60*1000);
  let sevenDayBackDate=new Date(Date.now()-8*24*60*60*1000);
  let mydata=mydatavalues.filter((values)=>(MyDateConverter(MyDateCheckerToday(values.createdAt))<newDate&&MyDateConverter(MyDateCheckerToday(values.createdAt))>sevenDayBackDate));

  let myarray=new Array();
 
        for(let i=0;i<mydata.length;i++)
        {
         if(mydata[i].repaired.length>0)
         {
           myarray.push(mydata[i]);
         }
        }
       
        let myarray1=new Array();
       
        for(let i=0;i<myarray.length;i++)
        {
           let mydata={vin:myarray[i].vin,model:myarray[i].model,createdAt:myarray[i].createdAt,repaired:[]};
           for(let j=0;j<myarray[i].repaired.length;j++)
           {
             if(myarray[i].repaired[j].Segement===defectSegment)
             {
               mydata.repaired.push(myarray[i].repaired[j]);
             }
           }
           if(mydata.repaired.length>0);
           myarray1.push(mydata);
        }
        
        console.log("MY ARRAY AFTER FILTER IS=",myarray);
        console.log("MY ARRAY AFTER ARRAY1 IS=", myarray1);
       
       let myfinalarray=new Array();
       
       for(let i=0;i<myarray1.length;i++)
       {
         if(myarray1[i].repaired.length>0)
         {
           myfinalarray.push(myarray1[i]);
         }
       }
       MyCheckData(mylistdata,myfinalarray);
}
if(period==="Monthly")
{
  console.log("Condition 8.3");
  let newDate=new Date(Date.now()+1*24*60*60*1000);
  let sevenDayBackDate=new Date(Date.now()-31*24*60*60*1000);
  let mydata=mydatavalues.filter((values)=>(MyDateConverter(MyDateCheckerToday(values.createdAt))<newDate&&MyDateConverter(MyDateCheckerToday(values.createdAt))>sevenDayBackDate));

  let myarray=new Array();
 
        for(let i=0;i<mydata.length;i++)
        {
         if(mydata[i].repaired.length>0)
         {
           myarray.push(mydata[i]);
         }
        }
       
        let myarray1=new Array();
       
        for(let i=0;i<myarray.length;i++)
        {
           let mydata={vin:myarray[i].vin,model:myarray[i].model,createdAt:myarray[i].createdAt,repaired:[]};
           for(let j=0;j<myarray[i].repaired.length;j++)
           {
             if(myarray[i].repaired[j].Segement===defectSegment)
             {
               mydata.repaired.push(myarray[i].repaired[j]);
             }
           }
           if(mydata.repaired.length>0);
           myarray1.push(mydata);
        }
        
        console.log("MY ARRAY AFTER FILTER IS=",myarray);
        console.log("MY ARRAY AFTER ARRAY1 IS=", myarray1);
       
       let myfinalarray=new Array();
       
       for(let i=0;i<myarray1.length;i++)
       {
         if(myarray1[i].repaired.length>0)
         {
           myfinalarray.push(myarray1[i]);
         }
       }
       MyCheckData(mylistdata,myfinalarray);
}
      }

  }

   


PeriodData();


function ShowDataCondition() {
  return (
    <div className="defects">
      <div className="defectlist">
        {mylistdata.length > 0
          ? mylistdata.map((element) => {
             if(element.repaired.length>0)
             {
              return(
                <>
              {
                        element.repaired.map((values)=>{
                          return(
                            <div className="listdata d-flex">
                            <div className="vinNumber mx-2 my-2">{element.vin}</div>
                            <div className="Segement mx-2 my-2">{element.model}</div>
                            
                                <div className="Segement mx-2 my-2">{values.Segement}</div>
                      <div className="description mx-2 my-2">
                        {values.Descrizione}
                      </div>
                    </div>
                            
                            
                          )
                        })
                      }
                      
                     

                  </>

              )
             }
             else if(element.repaired.length===0)
             {
              return(
                <div className="listdata d-flex">
                      <div className="vinNumber mx-2 my-2">{element.vin}</div>
                      <div className="Segement mx-2 my-2">{element.model}</div>
                  </div>

              )
             }
            })
          
          : <div><h3 className="h3 text-white">Data Not Found</h3> </div>}
      </div>
    </div>
  );
}


const endFunction=(e)=>{
  setEndDate(e.target.value);
  let mydatevalue=e.target.value;
  let start=startdate;
console.log("START=",start);
console.log("END=",mydatevalue);

if(typeof startdate!=="undefined")
{
  let startdate=new Date(start);
  startdate.setDate(startdate.getDate()-1)
  let end=new Date(mydatevalue);
  end.setDate(end.getDate()+1);

  console.log("START=",startdate);
  console.log("END=",end);

  if(startdate>end)
  {
    alert("Please Enter Date Carefully");
  }
  else if(startdate<=end)
  {
    let mydatevalues=mylistdata.filter((values)=>(MyDateConverter(MyDateCheckerToday(values.createdAt))>startdate)&&(MyDateConverter(MyDateCheckerToday(values.createdAt))<end));

    console.log("Date Values Are=",mydatevalues);

    if(mydatevalues.length===0)
    {
      mylistdata.length=0;
      myanotherdata.length=0;
    }
    else if(mydatevalues.length>0)
    {

    setMyListData(mydatevalues);
    setMyAnotherData(mydatevalues);
    }
  }
}

else if(typeof startdate==="undefined")
{
  alert("Please Enter Date");
}

}





 

 
  
 
  

  return (
    <VehicleHistoryStyled className="mainpart">
      <div className="modeldescription">
        <div className="inputElement">
          <h5>MODEL</h5>
          <select className={"Model"}  value={model} onChange={(e)=>modelHandler(e)}>
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
          onChange={(e)=>periodHandler(e)}
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
            onChange={(e)=>SegmentHandler(e)}
            
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
            onChange={(e)=>setStartDate(e.target.value)}
          ></input>
        </div>
        <div className="inputElement">
          <h5>End Date</h5>
          <input
            type="date"
            className="enddate"
            value={endDate}
            onChange={(e)=>endFunction(e)}
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
              onChange={(e)=>NewDataHandler(e)}
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
              onChange={(e)=>NewDataHandler(e)}
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
