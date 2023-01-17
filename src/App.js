
import './App.css';
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
