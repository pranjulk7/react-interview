
import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
 
  const [mode, setMode] = useState("light");
  const toggleMode = () =>{
    if(mode=="light"){
      setMode("dark");
      document.body.style.backgroundColor= "black";
    }
    else
      {
        setMode("light");
        document.body.style.backgroundColor= "white";
      }
  }
  return(
  <>


  <Navbar title = "textUtils" aboutText="About us"  mode = {mode} toggleMode={toggleMode}/>
  <div className="container my-3">
 <TextForm heading = "Enter the text below to analyze" showClearText = "Clear" showUpText="Convert To UpperCase" showLoText = "Convert To Lowercase"  mode = {mode} />
  {//<About></About>
  }
  </div>          

 </>
    
  );
  }

export default App;
