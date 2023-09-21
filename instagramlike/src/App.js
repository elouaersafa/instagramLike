
import { Routes,Route } from 'react-router-dom';
import './App.css';
import FormRegister from './components/register/FormRegister';

import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
    <Home/>

    <Routes>
          <Route path="/" >
         
           
            <Route path="/FormRegister" element={<FormRegister />} />
   
          </Route>
        </Routes>
    </div>
  );
}

export default App;
