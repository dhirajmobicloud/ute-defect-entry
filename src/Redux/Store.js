import { configureStore } from "@reduxjs/toolkit";
import SurfaceRH1_defects from "./Reducers/SurfaceRH1_defects";
import SurfaceRH1_repaired from "./Reducers/SurfaceRH1_repaired";

const Store = configureStore({
    reducer:{
        surfaceRH1_defects : SurfaceRH1_defects,
        surfaceRH1_repaired : SurfaceRH1_repaired
    }
})

export default Store;