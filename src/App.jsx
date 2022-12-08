import './App.css';
import { useState } from 'react';
import Paginicial from './pages/pagInicio';
import Dashboard from './pages/dashboard';


function App() {
  
  const [loginPage,setloginPage] = useState(true)

  return (

    <div className="container_header">  
    {
      loginPage ? <Paginicial setloginPage = {setloginPage} />  
      : <Dashboard setloginPage = {setloginPage}/>
    }
    </div>

  );
}

export default App;
