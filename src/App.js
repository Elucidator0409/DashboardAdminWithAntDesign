import logo from './logo.svg';
import './App.css';
import { Button, Space } from 'antd';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Dashboard from 'Component/Pages/Dashboard'
function App() {
  return (
    <BrowserRouter>
       
        <Routes>
          
          
          <Route path='/Dashboard' Component={Dashboard} />
          <Route path='/Users' Component={""} />
          <Route path='/Products' Component={Dashboard} />
          
          
          
        </Routes>
    </BrowserRouter>
  );
}

export default App;
