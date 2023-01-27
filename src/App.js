import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import DefectDashboard from "./Components/DefectDashboard";
import SurfaceRH1 from "./Components/Defect-Segments/SurfaceRH1";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/defect-dashboard" element={<DefectDashboard />} />
        <Route exact path="/Dashboard" element={<Dashboard/>} />
        <Route exact path="/surface-RH-139-defects" element={<SurfaceRH1 segement="surface_RH_139_defects" station='Surface-RH-139' />} />
        <Route exact path="/surface-FTR-139-defects" element={<SurfaceRH1 segement="surface_FTR_139_defects" station='Surface-FTR-139'/>} />
        <Route exact path="/electrical-1-140-defects" element={<SurfaceRH1 segement="electrical_1_140_defects" station='Electrical-1-140'/>} />
        <Route exact path="/bluetooth-139-defect" element={<SurfaceRH1 segement="bluetooth_139_defect" station='Bluetooth-139'/>} />
        <Route exact path="/surface-LH-140-defect" element={<SurfaceRH1 segement="surface_LH_140_defect" station='Surface-LH-140'/>} />
        <Route exact path="/rear-INT-140-defects" element={<SurfaceRH1 segement="rear_INT_140_defects" station='Rear-Int-140'/>} />
        <Route exact path="/rear-EXT-141-defects" element={<SurfaceRH1 segement="rear_EXT_141_defects" station='Rear-EXT-141'/>} />
        <Route exact path="/rh-exterior-141-defects" element={<SurfaceRH1 segement="rH_exterior_141_defects" station='RH-Exterior-141'/>} />
        <Route exact path="/lh-exterior-141-defects" element={<SurfaceRH1 segement="lH_exterior_141_defects" station='LH-Exterior-141'/>} />
        <Route exact path="/electrical-2-142-defects" element={<SurfaceRH1 segement="electrical_2_142_defects" station='Electrical-2-142'/>} />
        <Route exact path="/front-EXT-142-defects" element={<SurfaceRH1 segement="front_EXT_142_defects" station='Front EXT-142'/>} />
        <Route exact path="/door-closing-142-defects" element={<SurfaceRH1 segement="door_closing_142_defects" station='Door-Closing-142'/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
