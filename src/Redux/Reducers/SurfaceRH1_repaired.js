import { createSlice } from "@reduxjs/toolkit"

const SurfaceRH1_repaired = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
      Add_SurfaceRH1_repaired:(state, action)=> {
        state.unshift(action.payload)
      },
    //   Remove_SurfaceRH1_repaired : (state, action)=>{
    //     return state.filter((element)=>action.payload !== element._id)
        
    //   }
    }
  })

  export  const {Add_SurfaceRH1_repaired}  = SurfaceRH1_repaired.actions;
  export default SurfaceRH1_repaired.reducer;
  
