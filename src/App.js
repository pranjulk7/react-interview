
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (<>

  <Navbar title = "textUtils" aboutText="About us"/>
  <div className="container my-3">
{ <TextForm heading = "Enter the text below to analyze" showClearText = "Clear" showUpText="Convert To UpperCase" showLoText = "Convert To Lowercase"/>
}  <About></About>
  </div>          

 </>
    
  );
  }

export default App;
