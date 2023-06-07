
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); // whether Dark mode is enable or not
  const [alert, setAlert] = useState(null);  

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() =>{
        setAlert(null);
      }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", "success");
      document.title = 'TextUtils - Dark Mode';
    }else{
      setMode('light'); 
      document.body.style.backgroundColor = 'White  ';
      showAlert("Light mode has been enable", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    <Router>
      <Navbar title="Textutils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      < Alert alert={alert}/>
      {/* <Navbar /> */}
      <div className="container my-3">
          <Routes>
              <Route exact path="/about" element={<About />}/>
              
              <Route exact path="/" element={<TextForm showAlert={showAlert}   heading="Enter the text to analyze below" mode={mode}/>}/>
                
              
          </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
