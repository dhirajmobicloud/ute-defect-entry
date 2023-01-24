import { configureStore } from "@reduxjs/toolkit";
import SurfaceRH1_defects from "./Reducers/SurfaceRH1_defects";

const Store = configureStore({
    reducer:{
        surfaceRH1_defects : SurfaceRH1_defects
    }
})

export default Store;