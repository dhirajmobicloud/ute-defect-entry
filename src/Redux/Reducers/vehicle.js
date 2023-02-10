import { createSlice } from "@reduxjs/toolkit";

// export const saveVehicle = createAsyncThunk('saveVehicle', async () => {
//   const response = await fetch('',{method:'POST', body: })
//   return response.json()
// })


const vehicle = createSlice({
    name: 'posts',
    initialState:
      {
        model:"Nexon EV", win_number :"0001",defect:[] , repaired:[]
      }
     ,
    reducers: {
      Add_vehicle:(state, action)=> {
        state.unshift(action.payload)
      },
      add_vehicle_defect : (state, action)=>{
      
        state.defect.unshift(action.payload)
        
      },
      remove_vehicle_defect : (state, action)=>{
      
        const defects = state.defect.filter((element)=> element._id !== action.payload)
        return void(state.defect = defects) 
        
      },
      add_repaired_defect : (state, action)=>{
      
        state.repaired
        .unshift(action.payload)
        
      }
    }
  })

  
  export const {Add_vehicle , add_vehicle_defect, remove_vehicle_defect,add_repaired_defect} = vehicle.actions;
  export default vehicle.reducer;
