import { createSlice } from "@reduxjs/toolkit";

const vehicle = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
      Add_vehicle:(state, action)=> {
        state.unshift(action.payload)
      },
      add_vehicle_defect : (state, action)=>{
      
        state[0].defect.unshift(action.payload)
        
      },
      remove_vehicle_defect : (state, action)=>{
      
        return state[0].defect.filter((element)=> action.payload !== element._id)
        
      },
      add_repaired_defect : (state, action)=>{
      
        state[0].defect.unshift(action.payload)
        
      }
    }
  })

  
  export const {Add_vehicle , add_vehicle_defect, remove_vehicle_defect} = vehicle.actions;
  export default vehicle.reducer;
