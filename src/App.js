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
        <Route exact path="/surface-RH-139-defects" element={<SurfaceRH1 segment="surface_RH_139_defects" />} />
        <Route exact path="/surface-FTR-139-defects" element={<SurfaceRH1 segment="surface_FTR_139_defects" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
