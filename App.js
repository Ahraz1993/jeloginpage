import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route,
 
} from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Homepage from './components/Homepage';
import {useState} from "react";


function App() {
  const[user,setLoginuser]=useState({})
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={  <Login/>}/>
        
        <Route path="/Signup" element={<Signup />} ></Route>
        <Route path="/Homepage"element={<Homepage />} ></Route>
          
           
          
      
       
      </Routes>
    </BrowserRouter>

  );
}

export default App;
