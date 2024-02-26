import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Service from './Services';



function App() {

  const [mode, setMode] = useState('light');
  const [modeText, setModeText] = useState('light');
  const [myname, setMyname] = useState('fahim');

const changeMode = () => {
  setMyname("Mr. Fahim");
  
  if(mode==='light'){
    setMode('dark');
    setModeText('Dark');
  }else{
    setMode('light');
    setModeText('Light');
  }
}


  return (
    <BrowserRouter>

    <Navbar myname={myname} mode={mode} changeMode = {changeMode} modeText={modeText} />

    <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='/services' element= {<Service/>} />
      <Route path='/about' element= {<About/>} />
      <Route path='/contact' element= {<Contact/>} />
    </Routes>



    </BrowserRouter>
  );
}

export default App;
