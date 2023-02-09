import React from 'react';
import { SegmentManagementStyle } from '../Styled-Components/SegmentManagementStyle';
import {useState} from 'react';

const SegementManagement = () => {
  const SegmentData=["Surface RH 139","Surface FTR 139","Bluetooth 139","Electrical 1 140","Surface LH 140","Rear Int 140","Rear EXT 141","RH Exterior 141","LH Exterior 141","Electrical 2 142","Front EXT 142","Door Closing 142"];

  const workType=['Report Defect','Add Defect'];

  const [selectedSegment,setSelectedSegment]=useState([]);
  const [username,setUsername]=useState('');
  const [defectWork,setDefectWork]=useState([]);

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

  return (
    <SegmentManagementStyle className='container-fluid'>
    <div className='title'>
      <h3 className='titledata h3 text-center'>SEGMENT MANAGEMENT</h3>
    </div>
    <form onSubmit={Mysubmit}>
    <div className='formdata'>
      <div className='inputText container-fluid'>
<h5 className='description h5 form-label'>Enter the name:</h5>
<input type='text' placeholder='Enter the name' className='inputWrite form-control' onChange={(e)=>setUsername(e.target.value)}></input>
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