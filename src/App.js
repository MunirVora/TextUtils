import './App.css';
import Navbar from './Components/Navbar';
import React, { useState } from 'react'
import Home from './Components/Home';
import Alert from './Components/Alert';


function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState('');

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Enabled!", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled!", "success");
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode} title='TextUtils'/>
    <Alert alert={alert}/>
    <div className="container">
          <Home showAlert={showAlert} mode={mode} heading="Enter your text to analyze"/>
    </div>
    </>
  );
}

export default App;