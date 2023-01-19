import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import DefectDashboard from "./Components/DefectDashboard";
import SurfaceRH1 from "./Components/Defect-Segments/SurfaceRH1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/defect-dashboard" element={<DefectDashboard />} />
        <Route exact path="/surface-rh-1" element={<SurfaceRH1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
