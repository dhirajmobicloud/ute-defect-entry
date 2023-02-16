import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import DefectDashboard from "./Components/Defect-Segments/DefectDashboard";
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
        <Route exact path="/surface-rh-139-defects" element={<Segement segement="surface-rh-139-defects" station='Surface-RH-139' />} />
        <Route exact path="/surface-ftr-139-defects" element={<Segement segement="surface-ftr-139-defects" station='Surface-FTR-139'/>} />
        <Route exact path="/electrical-1-140-defects" element={<Segement segement="electrical-1-140-defects" station='Electrical-1-140'/>} />
        <Route exact path="/bluetooth-139-defect" element={<Segement segement="bluetooth-139-defect" station='Bluetooth-139'/>} />
        <Route exact path="/surface-lh-140-defect" element={<Segement segement="surface-lh-140-defect" station='Surface-LH-140'/>} />
        <Route exact path="/rear-int-140-defects" element={<Segement segement="rear-int-140-defects" station='Rear-Int-140'/>} />
        <Route exact path="/rear-ext-141-defects" element={<Segement segement="rear-ext-141-defects" station='Rear-EXT-141'/>} />
        <Route exact path="/rh-exterior-141-defects" element={<Segement segement="rh-exterior-141-defects" station='RH-Exterior-141'/>} />
        <Route exact path="/lh-exterior-141-defects" element={<Segement segement="lh-exterior-141-defects" station='LH-Exterior-141'/>} />
        <Route exact path="/electrical-2-142-defects" element={<Segement segement="electrical-2-142-defects" station='Electrical-2-142'/>} />
        <Route exact path="/front-ext-142-defects" element={<Segement segement="front-ext-142-defects" station='Front EXT-142'/>} />
        <Route exact path="/door-closing-142-defects" element={<Segement segement="door-closing-142-defects" station='Door-Closing-142'/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
