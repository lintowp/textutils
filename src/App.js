import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';

import React, { useState } from 'react';
import {Route, Routes} from 'react-router-dom';

function App() {

  const [mode, setmode] = useState('light');
  const [togglebtn, setbtntext] = useState('Enable Light Mode');

    const toggleMode = () =>{

    if(mode === 'light'){
      setmode('dark');
      setbtntext('Enable Dark Mode');
      document.body.style.backgroundColor = 'rgb(0 0 0)';
      // showAlert("Dark Mode Enabled","success");
    }
    else{
      setmode('light');
      setbtntext('Enable Light Mode');
      document.body.style.backgroundColor = 'white';
      // showAlert("Light Mode Enabled","success");
    }
  }

  return (
    <> 
      <div className='container'>
        {/* <Navbar /> */}
        <Navbar title="TextUtils" AboutText="Abouts" mode={mode} toggleMode={toggleMode} togglebtn={togglebtn} /> 
       
        <div className="container my-3">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/> 
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* <About AboutText="Abouts"/> */}
      </div>
    </>
  );
}

export default App;
