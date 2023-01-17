
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import {BrowserRouter, Route , Routes} from 'react-router-dom'
import Login from './Components/Login';
import DefectDashboard from './Components/DefectDashboard';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/defect-dashboard' element={<DefectDashboard/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
