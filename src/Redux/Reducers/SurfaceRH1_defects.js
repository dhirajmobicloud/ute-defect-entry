import { createSlice } from "@reduxjs/toolkit";

const SurfaceRH1_defects = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
      Add_SurfaceRH1_defect(state, action) {
        state.unshift(action.payload)
      },
    }
  })

  export const {Add_SurfaceRH1_defect} = SurfaceRH1_defects.actions;
  export default SurfaceRH1_defects.reducer;