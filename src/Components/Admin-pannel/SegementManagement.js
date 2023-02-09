import React from 'react';
import { SegmentManagementStyle } from '../Styled-Components/SegmentManagementStyle';
import {useState,useEffect} from 'react';
import axios from 'axios';

const SegementManagement = () => {
  const SegmentData=["Surface RH 139","Surface FTR 139","Bluetooth 139","Electrical 1 140","Surface LH 140","Rear Int 140","Rear EXT 141","RH Exterior 141","LH Exterior 141","Electrical 2 142","Front EXT 142","Door Closing 142"];
  const [userdata,setUserdata]=useState([]);
  const [flag,setflag]=useState(false);

  useEffect(()=>{
axios.get('https://easy-gray-camel-sock.cyclic.app/users').then((values)=>{
  setUserdata(values.data)
}).catch((err)=>{
  console.log(err)
})
  },[])

  console.log(userdata);

  const workType=['Repair Defect','Add Defect'];
  const [selectedSegment,setSelectedSegment]=useState([]);
  const [username,setUsername]=useState('');
  const [defectWork,setDefectWork]=useState([]);

  const UserNameEnter=(e)=>{
    setUsername(e.target.value);
    let value=e.target.value;
    console.log(value);
    if(value.length>0)
    {
      setflag(true);
    }
    else{
      setflag(false);
    }
  }
 const EnterSearch=(value)=>{
  setUsername(value);
  setflag(false);

 }

  function AutoComplete()
  {
    if(userdata.filter((values)=>values.username.search(username)>=0).length>0)
    {
   return(
    <div className='autocomplete'>
      {userdata.filter((values)=>values.username.search(username)>=0).map((data)=>
      <div>
<h5 className='mainvalues h5 form-label' onClick={()=>EnterSearch(data.username)}>{data.username}</h5>
        </div>
      
      )}
    </div>
   )
      }
      else{
        return(
          <div>
            <h5 className='description h5 form-label'>Not Found</h5>
          </div>
        )
      }
  }

  const AddSegment=(e)=>{
if(e.target.checked===true)
{
  setSelectedSegment([...selectedSegment,e.target.value]);
}
else if(e.target.checked===false){
  setSelectedSegment(selectedSegment.filter((values)=>values!==e.target.value));
}
  }


const AddRole=(e)=>{
  if(e.target.checked===true)
  {
    setDefectWork([...defectWork,e.target.value]);
}
else if(e.target.checked===false)
{
  setDefectWork(defectWork.filter((values)=>values!=e.target.value));
}
}

const Mysubmit=(e)=>{
  console.log(selectedSegment);
  e.preventDefault();
  let mydata={username:username,segment_assigned:selectedSegment,work:defectWork};
  console.log(mydata);
  alert(JSON.stringify(mydata));
  
}
console.log("Userdata is",userdata);
  
console.log( userdata.filter((values)=>values.username.includes(username)));

  

  return (
    <SegmentManagementStyle className='container-fluid'>
    <div className='title'>
      <h3 className='titledata h3 text-center'>SEGMENT MANAGEMENT</h3>
    </div>
    <form onSubmit={Mysubmit}>
    <div className='formdata'>
      <div className='inputText container-fluid'>
<h5 className='description h5 form-label'>Enter the name:</h5>

<input type='text' placeholder='Enter the name' className='inputWrite form-control' onChange={(e)=>UserNameEnter(e)} value={username}></input>
{
  flag===true?AutoComplete():null
}
</div>
<div className='checkboxData container-fluid'>
  <h5 className='description h5 form-label'>Select the defect work to assign:</h5>
  <div className='mycheckboxvalues row'>
    {
      SegmentData.map((values)=>
      <div className='checkboxDiv col-sm-6'>
<input type='checkbox' defaultValue={values} className='mycheckbox form-check-input' onChange={(e)=>AddSegment(e)}></input>
<span className='mycheckboxvalues h5 text-center'>{values}</span>
        </div>
      
      
      
      )
    }

  </div>
</div>
<div className='checkboxData container-fluid'>
<h5 className='description h5 form-label'>Select the Segments to assign:</h5>
<div className='mycheckboxvalues row'>
  {
    workType.map((values)=>
    <div className='checkboxDiv col-sm'>
    <input type='checkbox' defaultValue={values} className='mycheckbox form-check-input' onChange={(e)=>AddRole(e)}></input>
    <span className='mycheckboxvalues h5'>{values}</span>
            </div>
    
    )
  }
</div>

</div>
<button type='submit' className=' Mybutton btn btn-success'>Submit</button>
</div>
</form>
   
    </SegmentManagementStyle>
  )
}

export default SegementManagement