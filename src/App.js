import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import DefectDashboard from "./Components/DefectDashboard";
import Segement from "./Components/Defect-Segments/Segement";
// import Dashboard from "./Components/Dashboard/Dashboard";
import VehicleHistory from "./Components/Admin-pannel/VehicleHistory";
import AdminLogin from "./Components/Admin-pannel/AdminLogin";
import AdminDashboard from "./Components/Admin-pannel/AdminDashboard";
import NewDefects from "./Components/Admin-pannel/NewDefects";
import SegementManagement from "./Components/Admin-pannel/SegementManagement";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/admin-login" element={<AdminLogin/>}/>
        <Route exact path="/admin-pannel" element={<AdminDashboard/>}>
          <Route path="admin-dashboard" element={<VehicleHistory/>}/>
          <Route path="new-defects" element={<NewDefects/>}/>
          <Route path="segement-managenent" element={<SegementManagement/>}/>

        </Route>
        <Route path="/defect-dashboard" element={<DefectDashboard />} />
        <Route exact path="/surface-RH-139-defects" element={<Segement segement="surface_RH_139_defects" station='Surface-RH-139' />} />
        <Route exact path="/surface-FTR-139-defects" element={<Segement segement="surface_FTR_139_defects" station='Surface-FTR-139'/>} />
        <Route exact path="/electrical-1-140-defects" element={<Segement segement="electrical_1_140_defects" station='Electrical-1-140'/>} />
        <Route exact path="/bluetooth-139-defect" element={<Segement segement="bluetooth_139_defect" station='Bluetooth-139'/>} />
        <Route exact path="/surface-LH-140-defect" element={<Segement segement="surface_LH_140_defect" station='Surface-LH-140'/>} />
        <Route exact path="/rear-INT-140-defects" element={<Segement segement="rear_INT_140_defects" station='Rear-Int-140'/>} />
        <Route exact path="/rear-EXT-141-defects" element={<Segement segement="rear_EXT_141_defects" station='Rear-EXT-141'/>} />
        <Route exact path="/rh-exterior-141-defects" element={<Segement segement="rH_exterior_141_defects" station='RH-Exterior-141'/>} />
        <Route exact path="/lh-exterior-141-defects" element={<Segement segement="lH_exterior_141_defects" station='LH-Exterior-141'/>} />
        <Route exact path="/electrical-2-142-defects" element={<Segement segement="electrical_2_142_defects" station='Electrical-2-142'/>} />
        <Route exact path="/front-EXT-142-defects" element={<Segement segement="front_EXT_142_defects" station='Front EXT-142'/>} />
        <Route exact path="/door-closing-142-defects" element={<Segement segement="door_closing_142_defects" station='Door-Closing-142'/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
